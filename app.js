document.addEventListener('DOMContentLoaded', () => {
    const INSTRUMENT_ORDER = [
        'kick', 'snare', 'hihat', 'openhat', 'tom', 'floortom', 'crash', 'ride', 'perc', 'cowbell', 'rimshot', 'shaker',
        'bass', 'synth', 'lead', 'pad', 'arp',
        'piano', 'guitar', 'violin', 'trumpet', 'organ', 'flute', 'saxophone', 'cello', 'harp', 'clap'
    ];
    const ROWS = INSTRUMENT_ORDER.length;
    let STEPS = 16;

    // --- CONSTANTS ---
    const DEFAULT_TEMPO = 120;
    const DEFAULT_VOLUME = 70;
    const DEFAULT_SWING = 0;
    const NUM_TRACKS = 11;
    const TRACK_KEYS = INSTRUMENT_ORDER;

    class App {
        constructor() {
            // Set CSS variable for number of tracks
            document.documentElement.style.setProperty('--number-of-tracks', ROWS);

            this.audioEngine = new AudioEngine();
            this.sequencer = new Sequencer(ROWS, STEPS, INSTRUMENT_ORDER);
            
            this.isPlaying = false;
            this.tempo = DEFAULT_TEMPO;
            this.swing = DEFAULT_SWING; // 0-50% swing
            this.currentStep = 0;
            this.timerId = null;

            this.bindDOMElements();
            this.addEventListeners();
            this.init();
        }

        init() {
            // Initial UI setup
            this.updateTempoDisplay(this.tempo);
            this.updateVolumeDisplay(DEFAULT_VOLUME); // Default volume
            this.updateSwingDisplay(this.swing);
            this.updateReverbDisplay(0);
            this.updateDelayDisplay(0);
            this.updateFilterDisplay(100);
            console.log("App Initialized. Waiting for user interaction to start audio.");
        }

        bindDOMElements() {
            this.playBtn = document.getElementById('playBtn');
            this.pauseBtn = document.getElementById('pauseBtn');
            this.stopBtn = document.getElementById('stopBtn');
            this.clearBtn = document.getElementById('clearBtn');
            this.recordBtn = document.getElementById('recordBtn');
            this.tempoSlider = document.getElementById('tempoSlider');
            this.tempoValue = document.getElementById('tempoValue');
            this.volumeSlider = document.getElementById('volumeSlider');
            this.volumeValue = document.getElementById('volumeValue');
            this.swingSlider = document.getElementById('swingSlider');
            this.swingValue = document.getElementById('swingValue');
            this.reverbSlider = document.getElementById('reverbSlider');
            this.reverbValue = document.getElementById('reverbValue');
            this.delaySlider = document.getElementById('delaySlider');
            this.delayValue = document.getElementById('delayValue');
            this.filterSlider = document.getElementById('filterSlider');
            this.filterValue = document.getElementById('filterValue');
            this.presetButtons = document.querySelectorAll('.preset-btn');
            this.patternName = document.getElementById('patternName');
            this.saveBtn = document.getElementById('saveBtn');
            this.loadBtn = document.getElementById('loadBtn');
            this.exportBtn = document.getElementById('exportBtn');
            this.importBtn = document.getElementById('importBtn');
            this.savedPatterns = document.getElementById('savedPatterns');
            this.patternLengthSelect = document.getElementById('patternLengthSelect');
            this.patternLengthValue = document.getElementById('patternLengthValue');
            
            this.visualizerCanvas = document.getElementById('visualizer');
            this.visualizerCtx = this.visualizerCanvas.getContext('2d');

            // Mixer elements
            this.mixerTabs = document.querySelectorAll('.mixer-tab');
            this.mixerGroups = document.querySelectorAll('.mixer-group');
            this.volumeSliders = document.querySelectorAll('.volume-slider');
        }

        addEventListeners() {
            this.playBtn.addEventListener('click', () => this.start());
            this.pauseBtn.addEventListener('click', () => this.pause());
            this.stopBtn.addEventListener('click', () => this.stop());
            this.clearBtn.addEventListener('click', () => this.sequencer.clear());
            this.recordBtn.addEventListener('click', () => this.toggleRecording());
            
            this.tempoSlider.addEventListener('input', (e) => {
                this.setTempo(parseInt(e.target.value, 10));
            });

            this.volumeSlider.addEventListener('input', (e) => {
                const volume = parseInt(e.target.value, 10);
                this.updateVolumeDisplay(volume);
                this.audioEngine.setVolume(volume / 100);
            });

            this.swingSlider.addEventListener('input', (e) => {
                this.swing = parseInt(e.target.value, 10);
                this.updateSwingDisplay(this.swing);
            });

            this.reverbSlider.addEventListener('input', (e) => {
                const reverb = parseInt(e.target.value, 10);
                this.updateReverbDisplay(reverb);
                this.audioEngine.setReverb(reverb / 100);
            });

            this.delaySlider.addEventListener('input', (e) => {
                const delay = parseInt(e.target.value, 10);
                this.updateDelayDisplay(delay);
                this.audioEngine.setDelay(delay / 100);
            });

            this.filterSlider.addEventListener('input', (e) => {
                const filter = parseInt(e.target.value, 10);
                this.updateFilterDisplay(filter);
                this.audioEngine.setFilter(filter / 100);
            });

            this.presetButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    const presetName = e.target.dataset.preset;
                    this.loadPreset(presetName);
                });
            });

            this.saveBtn.addEventListener('click', () => this.savePattern());
            this.exportBtn.addEventListener('click', () => this.exportPattern());
            this.importBtn.addEventListener('click', () => this.importPattern());

            this.patternLengthSelect.addEventListener('change', (e) => {
                this.setPatternLength(parseInt(e.target.value, 10));
            });

            // Mixer event listeners
            this.mixerTabs.forEach(tab => {
                tab.addEventListener('click', (e) => {
                    this.switchMixerTab(e.target.dataset.tab);
                });
            });

            this.volumeSliders.forEach(slider => {
                slider.addEventListener('input', (e) => {
                    const instrumentName = e.target.id.replace('-volume', '');
                    const volume = parseInt(e.target.value, 10) / 100; // Convert to 0-2 range
                    this.audioEngine.setInstrumentVolume(instrumentName, volume);
                    
                    // Update display
                    const valueSpan = e.target.nextElementSibling;
                    if (valueSpan) {
                        valueSpan.textContent = `${e.target.value}%`;
                    }
                });
            });
        }
        
        start() {
            if (this.isPlaying) return;

            if (!this.audioEngine.isInitialized) {
                this.audioEngine.init();
                // Set initial volume after context is created
                this.audioEngine.setVolume(parseInt(this.volumeSlider.value, 10) / 100);
            }
            
            this.isPlaying = true;
            this.playBtn.classList.add('active');
            this.pauseBtn.classList.remove('active');
            this.tick();
            this.drawVisualizer();
        }
        
        pause() {
            if (!this.isPlaying) return;
            this.isPlaying = false;
            this.playBtn.classList.remove('active');
            this.pauseBtn.classList.add('active');
            clearTimeout(this.timerId);
        }

        stop() {
            this.pause();
            this.currentStep = 0;
            this.sequencer.highlightStep(null); // Clear highlight
            this.clearVisualizer();
        }

        tick() {
            this.playStep();
            this.currentStep = (this.currentStep + 1) % this.sequencer.steps;

            // Calculate interval with swing
            let interval = (60 / this.tempo) * 250; // 16th notes
            
            // Apply swing to off-beats (odd steps)
            if (this.currentStep % 2 === 1 && this.swing > 0) {
                interval = interval * (1 + (this.swing / 100));
            } else if (this.currentStep % 2 === 0 && this.swing > 0) {
                interval = interval * (1 - (this.swing / 200));
            }
            
            this.timerId = setTimeout(() => this.tick(), interval);
        }
        
        playStep() {
            this.sequencer.highlightStep(this.currentStep);

            for (let i = 0; i < this.sequencer.rows; i++) {
                if (this.sequencer.gridState[i][this.currentStep]) {
                    const trackName = this.sequencer.getTrackName(i);
                    this.audioEngine.playSound(trackName);
                }
            }
        }

        setTempo(newTempo) {
            this.tempo = newTempo;
            this.updateTempoDisplay(newTempo);
        }

        updateTempoDisplay(value) {
            this.tempoValue.textContent = value;
        }

        updateVolumeDisplay(value) {
            this.volumeValue.textContent = value;
        }

        updateSwingDisplay(value) {
            this.swingValue.textContent = value;
        }

        updateReverbDisplay(value) {
            this.reverbValue.textContent = value;
        }

        updateDelayDisplay(value) {
            this.delayValue.textContent = value;
        }

        updateFilterDisplay(value) {
            this.filterValue.textContent = value;
        }

        setPatternLength(newSteps) {
            this.sequencer.setPatternLength(newSteps);
            this.patternLengthValue.textContent = newSteps;
            
            // Reset playback position if it's beyond the new length
            if (this.currentStep >= newSteps) {
                this.currentStep = 0;
            }
            
            this.showNotification(`Pattern length set to ${newSteps} steps! 🎵`, 'info');
        }
        
        loadPreset(name) {
            const pattern = PRESETS[name];
            if (pattern) {
                this.sequencer.loadPattern(pattern);
                this.showNotification(`Loaded preset: ${name.toUpperCase()}`, 'info');
            }
        }

        savePattern() {
            const name = this.patternName.value.trim();
            if (!name) {
                alert('Please enter a pattern name!');
                return;
            }

            const patterns = this.getSavedPatterns();
            patterns[name] = {
                pattern: JSON.parse(JSON.stringify(this.sequencer.gridState)),
                tempo: this.tempo,
                swing: this.swing,
                patternLength: this.sequencer.steps,
                saved: new Date().toLocaleString()
            };

            localStorage.setItem('blockBangerPatterns', JSON.stringify(patterns));
            this.patternName.value = '';
            this.updateSavedPatternsDisplay();
            
            // Show success feedback
            this.showNotification(`Pattern "${name}" saved! 💾`, 'success');
        }

        getSavedPatterns() {
            const stored = localStorage.getItem('blockBangerPatterns');
            return stored ? JSON.parse(stored) : {};
        }

        updateSavedPatternsDisplay() {
            const patterns = this.getSavedPatterns();
            this.savedPatterns.innerHTML = '';

            Object.keys(patterns).forEach(name => {
                const button = document.createElement('button');
                button.className = 'saved-pattern-btn';
                button.innerHTML = `
                    ${name}
                    <button class="delete-btn" onclick="event.stopPropagation(); app.deletePattern('${name}')">×</button>
                `;
                button.addEventListener('click', () => this.loadSavedPattern(name));
                this.savedPatterns.appendChild(button);
            });
        }

        loadSavedPattern(name) {
            const patterns = this.getSavedPatterns();
            const patternData = patterns[name];
            
            if (patternData) {
                // Set pattern length first
                if (patternData.patternLength) {
                    this.setPatternLength(patternData.patternLength);
                    this.patternLengthSelect.value = patternData.patternLength;
                }
                
                this.sequencer.loadPattern(patternData.pattern);
                this.setTempo(patternData.tempo || DEFAULT_TEMPO);
                this.swing = patternData.swing || DEFAULT_SWING;
                this.updateSwingDisplay(this.swing);
                this.swingSlider.value = this.swing;
                this.showNotification(`Pattern "${name}" loaded! 🎵`, 'success');
            }
        }

        deletePattern(name) {
            if (confirm(`Delete pattern "${name}"?`)) {
                const patterns = this.getSavedPatterns();
                delete patterns[name];
                localStorage.setItem('blockBangerPatterns', JSON.stringify(patterns));
                this.updateSavedPatternsDisplay();
                this.showNotification(`Pattern "${name}" deleted! 🗑️`, 'info');
            }
        }

        exportPattern() {
            const exportData = {
                pattern: this.sequencer.gridState,
                tempo: this.tempo,
                swing: this.swing,
                patternLength: this.sequencer.steps,
                exported: new Date().toISOString(),
                app: 'Block Banger v2.0'
            };

            const dataStr = JSON.stringify(exportData, null, 2);
            const dataBlob = new Blob([dataStr], {type: 'application/json'});
            const url = URL.createObjectURL(dataBlob);
            
            const link = document.createElement('a');
            link.href = url;
            link.download = 'block-banger-pattern.json';
            link.click();
            
            URL.revokeObjectURL(url);
            this.showNotification('Pattern exported! 📤', 'success');
        }

        importPattern() {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = '.json';
            input.onchange = (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        try {
                            const data = JSON.parse(e.target.result);
                            
                            // Set pattern length first if available
                            if (data.patternLength) {
                                this.setPatternLength(data.patternLength);
                                this.patternLengthSelect.value = data.patternLength;
                            }
                            
                            this.sequencer.loadPattern(data.pattern);
                            this.setTempo(data.tempo || DEFAULT_TEMPO);
                            this.swing = data.swing || DEFAULT_SWING;
                            this.updateSwingDisplay(this.swing);
                            this.swingSlider.value = this.swing;
                            this.showNotification('Pattern imported! 📥', 'success');
                        } catch (error) {
                            this.showNotification('Invalid pattern file! ❌', 'error');
                        }
                    };
                    reader.readAsText(file);
                }
            };
            input.click();
        }

        switchMixerTab(tabName) {
            // Remove active class from all tabs and groups
            this.mixerTabs.forEach(tab => tab.classList.remove('active'));
            this.mixerGroups.forEach(group => group.classList.remove('active'));
            
            // Add active class to selected tab and group
            const selectedTab = document.querySelector(`[data-tab="${tabName}"]`);
            const selectedGroup = document.getElementById(`mixer-${tabName}`);
            
            if (selectedTab && selectedGroup) {
                selectedTab.classList.add('active');
                selectedGroup.classList.add('active');
            }
        }

        showNotification(message, type) {
            // Create notification element
            const notification = document.createElement('div');
            notification.className = `notification ${type}`;
            notification.textContent = message;
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: ${type === 'success' ? '#2ecc71' : type === 'error' ? '#e74c3c' : '#3498db'};
                color: white;
                padding: 12px 20px;
                border-radius: 6px;
                font-family: var(--font-family);
                font-weight: bold;
                z-index: 1000;
                animation: slideIn 0.3s ease;
            `;

            document.body.appendChild(notification);

            // Remove after 3 seconds
            setTimeout(() => {
                notification.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => notification.remove(), 300);
            }, 3000);
        }

        drawVisualizer() {
            if (!this.isPlaying) return;

            const bufferLength = this.audioEngine.analyser.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLength);
            this.audioEngine.analyser.getByteTimeDomainData(dataArray);

            this.visualizerCtx.fillStyle = 'rgb(26, 26, 26)';
            this.visualizerCtx.fillRect(0, 0, this.visualizerCanvas.width, this.visualizerCanvas.height);

            this.visualizerCtx.lineWidth = 2;
            this.visualizerCtx.strokeStyle = 'rgb(0, 255, 255)';

            this.visualizerCtx.beginPath();

            const sliceWidth = this.visualizerCanvas.width * 1.0 / bufferLength;
            let x = 0;

            for (let i = 0; i < bufferLength; i++) {
                const v = dataArray[i] / 128.0;
                const y = v * this.visualizerCanvas.height / 2;

                if (i === 0) {
                    this.visualizerCtx.moveTo(x, y);
                } else {
                    this.visualizerCtx.lineTo(x, y);
                }

                x += sliceWidth;
            }

            this.visualizerCtx.lineTo(this.visualizerCanvas.width, this.visualizerCanvas.height / 2);
            this.visualizerCtx.stroke();

            requestAnimationFrame(() => this.drawVisualizer());
        }

        clearVisualizer() {
            this.visualizerCtx.fillStyle = 'rgb(26, 26, 26)';
            this.visualizerCtx.fillRect(0, 0, this.visualizerCanvas.width, this.visualizerCanvas.height);
        }

        toggleRecording() {
            if (!this.audioEngine.isInitialized) {
                this.showNotification("Start playback to initialize audio before recording.", "warning");
                return;
            }

            if (this.audioEngine.isRecording) {
                this.audioEngine.stopRecording();
                this.recordBtn.classList.remove('active');
                this.showNotification("Recording saved to your downloads folder.", "success");
            } else {
                this.audioEngine.startRecording();
                this.recordBtn.classList.add('active');
                this.showNotification("Recording started...", "info");
            }
        }
    }

    // Initialize the app and load saved patterns
    window.app = new App();
    app.updateSavedPatternsDisplay();
}); 