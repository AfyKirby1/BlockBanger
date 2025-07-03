class AudioEngine {
    constructor() {
        this.audioContext = null;
        this.masterGain = null;
        this.reverbGain = null;
        this.delayGain = null;
        this.filterNode = null;
        this.dryGain = null;
        this.wetGain = null;
        this.delay = null;
        this.reverb = null;
        this.isInitialized = false;
        
        // Individual instrument volumes (0.0 to 2.0, default 1.0)
        this.instrumentVolumes = {
            kick: 1.0, snare: 1.0, hihat: 1.0, openhat: 1.0, tom: 1.0, floortom: 1.0,
            crash: 1.0, ride: 1.0, perc: 1.0, cowbell: 1.0, rimshot: 1.0, shaker: 1.0,
            bass: 1.0, synth: 1.0, lead: 1.0, pad: 1.0, arp: 1.0,
            piano: 1.0, guitar: 1.0, violin: 1.0, trumpet: 1.0, organ: 1.0,
            flute: 1.0, saxophone: 1.0, cello: 1.0, harp: 1.0, clap: 1.0
        };

        this.unlockAudioContext();
    }

    async init() {
        if (this.isInitialized) return;
        
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            this.setupAudioChain();
            
            this.isInitialized = true;
            console.log("Audio Engine Initialized Successfully");
        } catch (error) {
            console.error("Error initializing Audio Engine:", error);
            alert("Sorry, your browser doesn't support the Web Audio API, which is needed for Block Banger to work. Please try a modern browser like Chrome, Firefox, or Safari.");
        }
    }

    unlockAudioContext() {
        const unlock = () => {
            if (this.audioContext && this.audioContext.state === 'suspended') {
                this.audioContext.resume();
            }
            document.body.removeEventListener('click', unlock);
            document.body.removeEventListener('touchend', unlock);
        };
        document.body.addEventListener('click', unlock);
        document.body.addEventListener('touchend', unlock);
    }

    setupAudioChain() {
        // Create the main gain node
        this.masterGain = this.audioContext.createGain();
        
        // Create filter
        this.filterNode = this.audioContext.createBiquadFilter();
        this.filterNode.type = 'lowpass';
        this.filterNode.frequency.value = 20000;
        this.filterNode.Q.value = 1;
        
        // Create delay effect
        this.delay = this.audioContext.createDelay(1.0);
        this.delay.delayTime.value = 0.2;
        this.delayGain = this.audioContext.createGain();
        this.delayGain.gain.value = 0;
        
        // Create reverb
        this.reverb = this.createReverb();
        this.reverbGain = this.audioContext.createGain();
        this.reverbGain.gain.value = 0;
        
        // Create dry/wet controls
        this.dryGain = this.audioContext.createGain();
        this.wetGain = this.audioContext.createGain();
        this.dryGain.gain.value = 1;
        this.wetGain.gain.value = 0;
        
        // Connect the audio chain:
        this.masterGain.connect(this.filterNode);
        this.filterNode.connect(this.dryGain);
        this.dryGain.connect(this.audioContext.destination);
        
        // Delay path
        this.filterNode.connect(this.delay);
        this.delay.connect(this.delayGain);
        this.delayGain.connect(this.delay); // Feedback
        this.delayGain.connect(this.wetGain);
        
        // Reverb path
        this.filterNode.connect(this.reverb);
        this.reverb.connect(this.reverbGain);
        this.reverbGain.connect(this.wetGain);
        
        this.wetGain.connect(this.audioContext.destination);
    }

    createReverb() {
        const convolver = this.audioContext.createConvolver();
        const length = this.audioContext.sampleRate * 2; // 2 seconds
        const impulse = this.audioContext.createBuffer(2, length, this.audioContext.sampleRate);
        
        for (let channel = 0; channel < 2; channel++) {
            const channelData = impulse.getChannelData(channel);
            for (let i = 0; i < length; i++) {
                channelData[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, 2);
            }
        }
        
        convolver.buffer = impulse;
        return convolver;
    }

    playSound(soundName) {
        if (!this.isInitialized) return;

        let sound;
        switch (soundName) {
            case 'kick':
                sound = this.createKick();
                break;
            case 'snare':
                sound = this.createSnare();
                break;
            case 'hihat':
                sound = this.createHiHat();
                break;
            case 'openhat':
                sound = this.createOpenHat();
                break;
            case 'tom':
                sound = this.createTom();
                break;
            case 'floortom':
                sound = this.createFloorTom();
                break;
            case 'crash':
                sound = this.createCrash();
                break;
            case 'ride':
                sound = this.createRide();
                break;
            case 'perc':
                sound = this.createPerc();
                break;
            case 'cowbell':
                sound = this.createCowbell();
                break;
            case 'rimshot':
                sound = this.createRimshot();
                break;
            case 'shaker':
                sound = this.createShaker();
                break;
            case 'bass':
                sound = this.createBass();
                break;
            case 'synth':
                sound = this.createSynth();
                break;
            case 'lead':
                sound = this.createLead();
                break;
            case 'pad':
                sound = this.createPad();
                break;
            case 'arp':
                sound = this.createArp();
                break;
            case 'piano':
                sound = this.createPiano();
                break;
            case 'clap':
                sound = this.createClap();
                break;
            case 'guitar':
                sound = this.createGuitar();
                break;
            case 'violin':
                sound = this.createViolin();
                break;
            case 'trumpet':
                sound = this.createTrumpet();
                break;
            case 'organ':
                sound = this.createOrgan();
                break;
            case 'flute':
                sound = this.createFlute();
                break;
            case 'saxophone':
                sound = this.createSaxophone();
                break;
            case 'cello':
                sound = this.createCello();
                break;
            case 'harp':
                sound = this.createHarp();
                break;
            default:
                return;
        }

        if (sound) {
            // Apply individual instrument volume
            const instrumentVolume = this.instrumentVolumes[soundName] || 1.0;
            
            // Connect to the master gain (effects chain)
            if (Array.isArray(sound.gain)) {
                sound.gain.forEach(gain => {
                    gain.gain.value *= instrumentVolume;
                    gain.connect(this.masterGain);
                });
            } else {
                sound.gain.gain.value *= instrumentVolume;
                sound.gain.connect(this.masterGain);
            }
            
            // Start all oscillators
            const now = this.audioContext.currentTime;
            sound.oscillators.forEach(osc => {
                osc.start(now);
                osc.stop(now + sound.duration);
            });
        }
    }

    playKick(time) {
        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        const clickOsc = this.audioContext.createOscillator();
        const clickGain = this.audioContext.createGain();
        
        // Main kick oscillator
        osc.frequency.setValueAtTime(150, time);
        osc.frequency.exponentialRampToValueAtTime(0.01, time + 0.5);
        gain.gain.setValueAtTime(1, time);
        gain.gain.exponentialRampToValueAtTime(0.01, time + 0.5);
        
        // Click for attack
        clickOsc.frequency.setValueAtTime(600, time);
        clickOsc.frequency.exponentialRampToValueAtTime(50, time + 0.05);
        clickGain.gain.setValueAtTime(0.4, time);
        clickGain.gain.exponentialRampToValueAtTime(0.01, time + 0.05);
        
        // Connect
        osc.connect(gain);
        clickOsc.connect(clickGain);
        
        return { 
            oscillators: [osc, clickOsc], 
            gain: [gain, clickGain], 
            duration: 0.5,
            connect: function(destination) {
                gain.connect(destination);
                clickGain.connect(destination);
            }
        };
    }

    playSnare(time) {
        const noise = this.audioContext.createBufferSource();
        const bufferSize = this.audioContext.sampleRate;
        const buffer = this.audioContext.createBuffer(1, bufferSize, bufferSize);
        const output = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            output[i] = Math.random() * 2 - 1;
        }
        noise.buffer = buffer;
        
        const noiseFilter = this.audioContext.createBiquadFilter();
        noiseFilter.type = 'bandpass';
        noiseFilter.frequency.value = 1500;
        noiseFilter.Q.value = 1.5;
        noise.connect(noiseFilter);

        const noiseEnvelope = this.audioContext.createGain();
        noiseFilter.connect(noiseEnvelope);
        noiseEnvelope.connect(this.masterGain);
        noiseEnvelope.gain.setValueAtTime(1, time);
        noiseEnvelope.gain.exponentialRampToValueAtTime(0.01, time + 0.2);
        noise.start(time);
        noise.stop(time + 0.2);

        const osc = this.audioContext.createOscillator();
        osc.type = 'triangle';
        const oscEnvelope = this.audioContext.createGain();
        osc.connect(oscEnvelope);
        oscEnvelope.connect(this.masterGain);
        osc.frequency.setValueAtTime(180, time);
        oscEnvelope.gain.setValueAtTime(0.6, time);
        oscEnvelope.gain.exponentialRampToValueAtTime(0.01, time + 0.1);
        osc.start(time);
        osc.stop(time + 0.2);
        
        const snapOsc = this.audioContext.createOscillator();
        snapOsc.type = 'sine';
        const snapEnvelope = this.audioContext.createGain();
        snapOsc.connect(snapEnvelope);
        snapEnvelope.connect(this.masterGain);
        snapOsc.frequency.setValueAtTime(1000, time);
        snapEnvelope.gain.setValueAtTime(0.7, time);
        snapEnvelope.gain.exponentialRampToValueAtTime(0.01, time + 0.05);
        snapOsc.start(time);
        snapOsc.stop(time + 0.1);
    }

    playHihat(time) {
        const gain = this.audioContext.createGain();
        const fundamental = 40;
        const ratios = [2, 3, 4.16, 5.43, 6.79, 8.21];

        ratios.forEach(ratio => {
            const osc = this.audioContext.createOscillator();
            osc.type = 'square';
            osc.frequency.value = fundamental * ratio;
            const bandpass = this.audioContext.createBiquadFilter();
            bandpass.type = 'bandpass';
            bandpass.frequency.value = 10000;
            bandpass.Q.value = 0.5;
            osc.connect(bandpass);
            bandpass.connect(gain);
            osc.start(time);
            osc.stop(time + 0.05);
        });

        gain.gain.setValueAtTime(1, time);
        gain.gain.exponentialRampToValueAtTime(0.01, time + 0.05);
        gain.connect(this.masterGain);
    }

    playCrash(time) {
        const gain = this.audioContext.createGain();
        const fundamental = 40;
        const ratios = [1, 1.34, 1.68, 2.0, 2.52, 3.02];

        ratios.forEach(ratio => {
            const osc = this.audioContext.createOscillator();
            osc.type = 'square';
            osc.frequency.value = fundamental * ratio;
            const bandpass = this.audioContext.createBiquadFilter();
            bandpass.type = 'highpass';
            bandpass.frequency.value = 5000;
            osc.connect(bandpass);
            bandpass.connect(gain);
            osc.start(time);
            osc.stop(time + 1);
        });

        gain.gain.setValueAtTime(0.5, time);
        gain.gain.exponentialRampToValueAtTime(0.01, time + 1);
        gain.connect(this.masterGain);
    }

    playBass(time) {
        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.type = 'sine';
        osc.frequency.setValueAtTime(100, time);
        gain.gain.setValueAtTime(0.8, time);

        osc.frequency.exponentialRampToValueAtTime(40, time + 0.3);
        gain.gain.exponentialRampToValueAtTime(0.01, time + 0.3);

        osc.start(time);
        osc.stop(time + 0.3);
    }

    playSynth(time) {
        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(440, time);
        gain.gain.setValueAtTime(0.3, time);

        gain.gain.exponentialRampToValueAtTime(0.01, time + 0.5);

        osc.start(time);
        osc.stop(time + 0.5);
    }

    playPiano(time) {
        const fundamental = 261.63; // C4
        const harmonics = [1, 2, 3, 4, 5, 6];
        const harmonicGains = [0.6, 0.2, 0.1, 0.05, 0.02, 0.01];

        harmonics.forEach((harmonic, index) => {
            const osc = this.audioContext.createOscillator();
            const gain = this.audioContext.createGain();

            osc.type = 'sine';
            osc.frequency.value = fundamental * harmonic;

            osc.connect(gain);
            gain.connect(this.masterGain);

            gain.gain.setValueAtTime(harmonicGains[index] * 0.5, time);
            gain.gain.exponentialRampToValueAtTime(0.001, time + 1.5);
            
            osc.start(time);
            osc.stop(time + 1.5);
        });
    }

    playTom(time) {
        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(120, time);
        gain.gain.setValueAtTime(1, time);
        osc.frequency.exponentialRampToValueAtTime(0.01, time + 0.3);
        gain.gain.exponentialRampToValueAtTime(0.01, time + 0.3);
        osc.connect(gain);
        gain.connect(this.masterGain);
        osc.start(time);
        osc.stop(time + 0.3);
    }

    playClap(time) {
        const noise = this.audioContext.createBufferSource();
        const bufferSize = this.audioContext.sampleRate * 0.1;
        const buffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
        const output = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            output[i] = Math.random() * 2 - 1;
        }
        noise.buffer = buffer;

        const bandpass = this.audioContext.createBiquadFilter();
        bandpass.type = 'bandpass';
        bandpass.frequency.value = 1200;
        bandpass.Q.value = 10;
        noise.connect(bandpass);

        const envelope = this.audioContext.createGain();
        bandpass.connect(envelope);
        envelope.connect(this.masterGain);

        envelope.gain.setValueAtTime(0, time);
        envelope.gain.linearRampToValueAtTime(1, time + 0.005);
        envelope.gain.exponentialRampToValueAtTime(0.1, time + 0.02);
        envelope.gain.linearRampToValueAtTime(0, time + 0.1);

        noise.start(time);
        noise.stop(time + 0.1);
    }

    playFloorTom(time) {
        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(80, time);
        gain.gain.setValueAtTime(1, time);
        osc.frequency.exponentialRampToValueAtTime(0.01, time + 0.5);
        gain.gain.exponentialRampToValueAtTime(0.01, time + 0.5);
        osc.connect(gain);
        gain.connect(this.masterGain);
        osc.start(time);
        osc.stop(time + 0.5);
    }

    playRide(time) {
        const gain = this.audioContext.createGain();
        const fundamental = 120;
        const ratios = [1.0, 1.34, 1.68, 2.0, 2.52, 3.02, 3.54, 4.22, 4.54, 5.33];
        
        ratios.forEach(ratio => {
            const osc = this.audioContext.createOscillator();
            osc.type = 'square';
            osc.frequency.value = fundamental * ratio;
            const bandpass = this.audioContext.createBiquadFilter();
            bandpass.type = 'highpass';
            bandpass.frequency.value = 4000;
            osc.connect(bandpass);
            bandpass.connect(gain);
            osc.start(time);
            osc.stop(time + 1.5);
        });

        gain.gain.setValueAtTime(0.4, time);
        gain.gain.exponentialRampToValueAtTime(0.01, time + 1.5);
        gain.connect(this.masterGain);
    }

    setVolume(volume) { // volume is 0-1
        if(this.masterGain) {
            this.masterGain.gain.setValueAtTime(volume, this.audioContext.currentTime);
        }
    }

    setReverb(amount) { // amount is 0-1
        if(this.reverbGain) {
            this.reverbGain.gain.setValueAtTime(amount, this.audioContext.currentTime);
        }
    }

    setDelay(amount) { // amount is 0-1
        if(this.delayGain) {
            this.delayGain.gain.setValueAtTime(amount, this.audioContext.currentTime);
        }
    }

    setFilter(frequency) { // frequency is 0-1, maps to 200-20000 Hz
        if(this.filterNode) {
            const minFreq = 200;
            const maxFreq = 20000;
            const freq = minFreq * Math.pow(maxFreq / minFreq, frequency);
            this.filterNode.frequency.setValueAtTime(freq, this.audioContext.currentTime);
        }
    }

    setInstrumentVolume(instrumentName, volume) { // volume is 0-2 (0-200%)
        if (this.instrumentVolumes.hasOwnProperty(instrumentName)) {
            this.instrumentVolumes[instrumentName] = Math.max(0, Math.min(2, volume));
        }
    }

    createOpenHat() {
        const osc1 = this.audioContext.createOscillator();
        const osc2 = this.audioContext.createOscillator();
        const noise = this.createNoise();
        const gain = this.audioContext.createGain();
        const filter = this.audioContext.createBiquadFilter();
        
        // High frequency oscillators for metallic sound
        osc1.frequency.setValueAtTime(800, this.audioContext.currentTime);
        osc2.frequency.setValueAtTime(1200, this.audioContext.currentTime);
        osc1.type = 'square';
        osc2.type = 'square';
        
        // High-pass filter for crisp sound
        filter.type = 'highpass';
        filter.frequency.setValueAtTime(8000, this.audioContext.currentTime);
        filter.Q.setValueAtTime(1, this.audioContext.currentTime);
        
        // Longer decay than regular hi-hat
        gain.gain.setValueAtTime(0.3, this.audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3);
        
        // Connect the audio graph
        osc1.connect(filter);
        osc2.connect(filter);
        noise.source.connect(filter);
        filter.connect(gain);
        
        return { oscillators: [osc1, osc2, noise.source], gain, duration: 0.3 };
    }
    
    createPerc() {
        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        const filter = this.audioContext.createBiquadFilter();
        
        // Mid-range percussive sound
        osc.frequency.setValueAtTime(400, this.audioContext.currentTime);
        osc.frequency.exponentialRampToValueAtTime(200, this.audioContext.currentTime + 0.1);
        osc.type = 'triangle';
        
        // Band-pass filter for focused sound
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(800, this.audioContext.currentTime);
        filter.Q.setValueAtTime(5, this.audioContext.currentTime);
        
        // Sharp attack, quick decay
        gain.gain.setValueAtTime(0.4, this.audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.15);
        
        osc.connect(filter);
        filter.connect(gain);
        
        return { oscillators: [osc], gain, duration: 0.15 };
    }
    
    createLead() {
        const osc1 = this.audioContext.createOscillator();
        const osc2 = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        const filter = this.audioContext.createBiquadFilter();
        
        // Lead synth with detuned oscillators
        const baseFreq = 220; // A3
        osc1.frequency.setValueAtTime(baseFreq, this.audioContext.currentTime);
        osc2.frequency.setValueAtTime(baseFreq * 1.007, this.audioContext.currentTime); // Slight detune
        osc1.type = 'sawtooth';
        osc2.type = 'sawtooth';
        
        // Low-pass filter with resonance
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1200, this.audioContext.currentTime);
        filter.Q.setValueAtTime(8, this.audioContext.currentTime);
        
        // Sustained envelope
        gain.gain.setValueAtTime(0, this.audioContext.currentTime);
        gain.gain.linearRampToValueAtTime(0.3, this.audioContext.currentTime + 0.05);
        gain.gain.linearRampToValueAtTime(0.2, this.audioContext.currentTime + 0.2);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.8);
        
        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(gain);
        
        return { oscillators: [osc1, osc2], gain, duration: 0.8 };
    }
    
    createPad() {
        const osc1 = this.audioContext.createOscillator();
        const osc2 = this.audioContext.createOscillator();
        const osc3 = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        const filter = this.audioContext.createBiquadFilter();
        
        // Pad with rich harmonics
        const baseFreq = 110; // A2
        osc1.frequency.setValueAtTime(baseFreq, this.audioContext.currentTime);
        osc2.frequency.setValueAtTime(baseFreq * 1.5, this.audioContext.currentTime); // Perfect fifth
        osc3.frequency.setValueAtTime(baseFreq * 2, this.audioContext.currentTime); // Octave
        osc1.type = 'sine';
        osc2.type = 'sine';
        osc3.type = 'sine';
        
        // Gentle low-pass filter
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(800, this.audioContext.currentTime);
        filter.Q.setValueAtTime(1, this.audioContext.currentTime);
        
        // Very slow attack and release
        gain.gain.setValueAtTime(0, this.audioContext.currentTime);
        gain.gain.linearRampToValueAtTime(0.15, this.audioContext.currentTime + 0.3);
        gain.gain.linearRampToValueAtTime(0.1, this.audioContext.currentTime + 1.0);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 2.0);
        
        osc1.connect(filter);
        osc2.connect(filter);
        osc3.connect(filter);
        filter.connect(gain);
        
        return { oscillators: [osc1, osc2, osc3], gain, duration: 2.0 };
    }
    
    createArp() {
        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        const filter = this.audioContext.createBiquadFilter();
        
        // Bright arpeggio sound
        const baseFreq = 440; // A4
        osc.frequency.setValueAtTime(baseFreq, this.audioContext.currentTime);
        osc.type = 'square';
        
        // Bright filter with resonance
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(2000, this.audioContext.currentTime);
        filter.frequency.exponentialRampToValueAtTime(800, this.audioContext.currentTime + 0.2);
        filter.Q.setValueAtTime(6, this.audioContext.currentTime);
        
        // Plucky envelope
        gain.gain.setValueAtTime(0.25, this.audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3);
        
        osc.connect(filter);
        filter.connect(gain);
        
        return { oscillators: [osc], gain, duration: 0.3 };
    }

    createKick() {
        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        const clickOsc = this.audioContext.createOscillator();
        const clickGain = this.audioContext.createGain();
        
        // Main kick oscillator
        osc.frequency.setValueAtTime(150, this.audioContext.currentTime);
        osc.frequency.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.5);
        osc.type = 'sine';
        
        gain.gain.setValueAtTime(1, this.audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.5);
        
        // Click for attack
        clickOsc.frequency.setValueAtTime(600, this.audioContext.currentTime);
        clickOsc.frequency.exponentialRampToValueAtTime(50, this.audioContext.currentTime + 0.05);
        clickOsc.type = 'sine';
        
        clickGain.gain.setValueAtTime(0.4, this.audioContext.currentTime);
        clickGain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.05);
        
        osc.connect(gain);
        clickOsc.connect(clickGain);
        
        return { 
            oscillators: [osc, clickOsc], 
            gain: [gain, clickGain], 
            duration: 0.5
        };
    }

    createNoise() {
        const bufferSize = this.audioContext.sampleRate;
        const buffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
        const output = buffer.getChannelData(0);
        
        for (let i = 0; i < bufferSize; i++) {
            output[i] = Math.random() * 2 - 1;
        }
        
        const noise = this.audioContext.createBufferSource();
        noise.buffer = buffer;
        noise.loop = true;
        
        return { source: noise };
    }

    createSnare() {
        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        const noise = this.createNoise();
        const noiseGain = this.audioContext.createGain();
        const filter = this.audioContext.createBiquadFilter();
        
        // Tone component
        osc.frequency.setValueAtTime(200, this.audioContext.currentTime);
        osc.type = 'triangle';
        gain.gain.setValueAtTime(0.7, this.audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.2);
        
        // Noise component
        filter.type = 'highpass';
        filter.frequency.setValueAtTime(1000, this.audioContext.currentTime);
        noiseGain.gain.setValueAtTime(0.8, this.audioContext.currentTime);
        noiseGain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.2);
        
        // Connect
        osc.connect(gain);
        noise.source.connect(filter);
        filter.connect(noiseGain);
        
        return { 
            oscillators: [osc, noise.source], 
            gain: [gain, noiseGain], 
            duration: 0.2,
            connect: function(destination) {
                gain.connect(destination);
                noiseGain.connect(destination);
            }
        };
    }

    createHiHat() {
        const osc1 = this.audioContext.createOscillator();
        const osc2 = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        const filter = this.audioContext.createBiquadFilter();
        
        osc1.frequency.setValueAtTime(800, this.audioContext.currentTime);
        osc2.frequency.setValueAtTime(1200, this.audioContext.currentTime);
        osc1.type = 'square';
        osc2.type = 'square';
        
        filter.type = 'highpass';
        filter.frequency.setValueAtTime(7000, this.audioContext.currentTime);
        
        gain.gain.setValueAtTime(0.3, this.audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1);
        
        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(gain);
        
        return { oscillators: [osc1, osc2], gain, duration: 0.1 };
    }

    createTom() {
        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        
        osc.frequency.setValueAtTime(120, this.audioContext.currentTime);
        osc.frequency.exponentialRampToValueAtTime(40, this.audioContext.currentTime + 0.1);
        osc.type = 'sine';
        
        gain.gain.setValueAtTime(0.8, this.audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3);
        
        osc.connect(gain);
        
        return { oscillators: [osc], gain, duration: 0.3 };
    }

    createFloorTom() {
        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        
        osc.frequency.setValueAtTime(80, this.audioContext.currentTime);
        osc.frequency.exponentialRampToValueAtTime(30, this.audioContext.currentTime + 0.15);
        osc.type = 'sine';
        
        gain.gain.setValueAtTime(0.9, this.audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.4);
        
        osc.connect(gain);
        
        return { oscillators: [osc], gain, duration: 0.4 };
    }

    createCrash() {
        const noise = this.createNoise();
        const gain = this.audioContext.createGain();
        const filter = this.audioContext.createBiquadFilter();
        
        filter.type = 'highpass';
        filter.frequency.setValueAtTime(3000, this.audioContext.currentTime);
        filter.Q.setValueAtTime(0.5, this.audioContext.currentTime);
        
        gain.gain.setValueAtTime(0.8, this.audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 1.0);
        
        noise.source.connect(filter);
        filter.connect(gain);
        
        return { oscillators: [noise.source], gain, duration: 1.0 };
    }

    createRide() {
        const osc1 = this.audioContext.createOscillator();
        const osc2 = this.audioContext.createOscillator();
        const osc3 = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        const filter = this.audioContext.createBiquadFilter();
        
        osc1.frequency.setValueAtTime(1200, this.audioContext.currentTime);
        osc2.frequency.setValueAtTime(1800, this.audioContext.currentTime);
        osc3.frequency.setValueAtTime(2400, this.audioContext.currentTime);
        osc1.type = 'square';
        osc2.type = 'square';
        osc3.type = 'square';
        
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(3000, this.audioContext.currentTime);
        filter.Q.setValueAtTime(2, this.audioContext.currentTime);
        
        gain.gain.setValueAtTime(0.4, this.audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.8);
        
        osc1.connect(filter);
        osc2.connect(filter);
        osc3.connect(filter);
        filter.connect(gain);
        
        return { oscillators: [osc1, osc2, osc3], gain, duration: 0.8 };
    }

    createBass() {
        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        
        osc.frequency.setValueAtTime(80, this.audioContext.currentTime);
        osc.type = 'sawtooth';
        
        gain.gain.setValueAtTime(0.6, this.audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.5);
        
        osc.connect(gain);
        
        return { oscillators: [osc], gain, duration: 0.5 };
    }

    createSynth() {
        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        const filter = this.audioContext.createBiquadFilter();
        
        osc.frequency.setValueAtTime(440, this.audioContext.currentTime);
        osc.type = 'sawtooth';
        
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(800, this.audioContext.currentTime);
        filter.Q.setValueAtTime(5, this.audioContext.currentTime);
        
        gain.gain.setValueAtTime(0.4, this.audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3);
        
        osc.connect(filter);
        filter.connect(gain);
        
        return { oscillators: [osc], gain, duration: 0.3 };
    }

    createPiano() {
        const osc1 = this.audioContext.createOscillator();
        const osc2 = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        
        osc1.frequency.setValueAtTime(440, this.audioContext.currentTime);
        osc2.frequency.setValueAtTime(880, this.audioContext.currentTime);
        osc1.type = 'sine';
        osc2.type = 'sine';
        
        gain.gain.setValueAtTime(0.5, this.audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 1.0);
        
        osc1.connect(gain);
        osc2.connect(gain);
        
        return { oscillators: [osc1, osc2], gain, duration: 1.0 };
    }

    createClap() {
        const noise = this.createNoise();
        const gain = this.audioContext.createGain();
        const filter = this.audioContext.createBiquadFilter();
        
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(1000, this.audioContext.currentTime);
        filter.Q.setValueAtTime(5, this.audioContext.currentTime);
        
        gain.gain.setValueAtTime(1.2, this.audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.15);
        
        noise.source.connect(filter);
        filter.connect(gain);
        
        return { oscillators: [noise.source], gain, duration: 0.15 };
    }

    createCowbell() {
        const osc1 = this.audioContext.createOscillator();
        const osc2 = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        const filter = this.audioContext.createBiquadFilter();
        
        // Classic 808/909 cowbell frequencies
        osc1.frequency.setValueAtTime(800, this.audioContext.currentTime);
        osc2.frequency.setValueAtTime(540, this.audioContext.currentTime);
        osc1.type = 'square';
        osc2.type = 'square';
        
        // Bandpass filter for metallic tone
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(1200, this.audioContext.currentTime);
        filter.Q.setValueAtTime(8, this.audioContext.currentTime);
        
        // Sharp attack, quick decay
        gain.gain.setValueAtTime(0.6, this.audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.2);
        
        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(gain);
        
        return { oscillators: [osc1, osc2], gain, duration: 0.2 };
    }

    createRimshot() {
        const osc = this.audioContext.createOscillator();
        const noise = this.createNoise();
        const oscGain = this.audioContext.createGain();
        const noiseGain = this.audioContext.createGain();
        const filter = this.audioContext.createBiquadFilter();
        
        // Sharp crack sound
        osc.frequency.setValueAtTime(2000, this.audioContext.currentTime);
        osc.frequency.exponentialRampToValueAtTime(200, this.audioContext.currentTime + 0.02);
        osc.type = 'triangle';
        
        // High-frequency noise component
        filter.type = 'highpass';
        filter.frequency.setValueAtTime(3000, this.audioContext.currentTime);
        
        // Very short, sharp envelope
        oscGain.gain.setValueAtTime(0.7, this.audioContext.currentTime);
        oscGain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.05);
        
        noiseGain.gain.setValueAtTime(0.3, this.audioContext.currentTime);
        noiseGain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.03);
        
        osc.connect(oscGain);
        noise.source.connect(filter);
        filter.connect(noiseGain);
        
        return { 
            oscillators: [osc, noise.source], 
            gain: [oscGain, noiseGain], 
            duration: 0.05 
        };
    }

    createShaker() {
        const noise = this.createNoise();
        const gain = this.audioContext.createGain();
        const filter = this.audioContext.createBiquadFilter();
        
        // High-frequency filtered noise for shaker sound
        filter.type = 'highpass';
        filter.frequency.setValueAtTime(8000, this.audioContext.currentTime);
        filter.Q.setValueAtTime(1, this.audioContext.currentTime);
        
        // Quick burst envelope
        gain.gain.setValueAtTime(0.4, this.audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.08);
        
        noise.source.connect(filter);
        filter.connect(gain);
        
        return { oscillators: [noise.source], gain, duration: 0.08 };
    }

    // ===== REALISTIC INSTRUMENTS =====

    createGuitar() {
        const osc1 = this.audioContext.createOscillator();
        const osc2 = this.audioContext.createOscillator();
        const osc3 = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        const filter = this.audioContext.createBiquadFilter();
        
        // Guitar-like harmonics (fundamental + overtones)
        const baseFreq = 220; // A3
        osc1.frequency.setValueAtTime(baseFreq, this.audioContext.currentTime);
        osc2.frequency.setValueAtTime(baseFreq * 2, this.audioContext.currentTime); // Octave
        osc3.frequency.setValueAtTime(baseFreq * 3, this.audioContext.currentTime); // Perfect fifth
        
        osc1.type = 'sawtooth';
        osc2.type = 'triangle';
        osc3.type = 'sine';
        
        // Warm, woody filter characteristic of acoustic guitar
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(3000, this.audioContext.currentTime);
        filter.frequency.exponentialRampToValueAtTime(1200, this.audioContext.currentTime + 0.1);
        filter.Q.setValueAtTime(1.5, this.audioContext.currentTime);
        
        // Quick attack, sustained decay like a plucked string
        gain.gain.setValueAtTime(0, this.audioContext.currentTime);
        gain.gain.linearRampToValueAtTime(0.4, this.audioContext.currentTime + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 1.2);
        
        osc1.connect(filter);
        osc2.connect(filter);
        osc3.connect(filter);
        filter.connect(gain);
        
        return { oscillators: [osc1, osc2, osc3], gain, duration: 1.2 };
    }

    createViolin() {
        const osc1 = this.audioContext.createOscillator();
        const osc2 = this.audioContext.createOscillator();
        const osc3 = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        const filter = this.audioContext.createBiquadFilter();
        const vibrato = this.audioContext.createOscillator();
        const vibratoGain = this.audioContext.createGain();
        
        // Rich harmonic content for violin-like timbre
        const baseFreq = 440; // A4
        osc1.frequency.setValueAtTime(baseFreq, this.audioContext.currentTime);
        osc2.frequency.setValueAtTime(baseFreq * 2, this.audioContext.currentTime);
        osc3.frequency.setValueAtTime(baseFreq * 3, this.audioContext.currentTime);
        
        osc1.type = 'sawtooth';
        osc2.type = 'triangle';
        osc3.type = 'sine';
        
        // Vibrato oscillator (5Hz modulation)
        vibrato.frequency.setValueAtTime(5, this.audioContext.currentTime);
        vibrato.type = 'sine';
        vibratoGain.gain.setValueAtTime(8, this.audioContext.currentTime); // ±8Hz vibrato
        
        // Connect vibrato to main oscillators
        vibrato.connect(vibratoGain);
        vibratoGain.connect(osc1.frequency);
        vibratoGain.connect(osc2.frequency);
        vibratoGain.connect(osc3.frequency);
        
        // Bright, resonant filter characteristic of violin
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(2000, this.audioContext.currentTime);
        filter.Q.setValueAtTime(8, this.audioContext.currentTime);
        
        // Bowing envelope - slower attack, sustained
        gain.gain.setValueAtTime(0, this.audioContext.currentTime);
        gain.gain.linearRampToValueAtTime(0.3, this.audioContext.currentTime + 0.1);
        gain.gain.linearRampToValueAtTime(0.25, this.audioContext.currentTime + 0.5);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 2.0);
        
        osc1.connect(filter);
        osc2.connect(filter);
        osc3.connect(filter);
        filter.connect(gain);
        
        return { oscillators: [osc1, osc2, osc3, vibrato], gain, duration: 2.0 };
    }

    createTrumpet() {
        const osc1 = this.audioContext.createOscillator();
        const osc2 = this.audioContext.createOscillator();
        const osc3 = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        const filter = this.audioContext.createBiquadFilter();
        
        // Brass-like harmonic series
        const baseFreq = 261.63; // C4
        osc1.frequency.setValueAtTime(baseFreq, this.audioContext.currentTime);
        osc2.frequency.setValueAtTime(baseFreq * 2, this.audioContext.currentTime);
        osc3.frequency.setValueAtTime(baseFreq * 4, this.audioContext.currentTime);
        
        osc1.type = 'square';
        osc2.type = 'sawtooth';
        osc3.type = 'triangle';
        
        // Bright, piercing filter for brass character
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(1500, this.audioContext.currentTime);
        filter.frequency.exponentialRampToValueAtTime(2500, this.audioContext.currentTime + 0.1);
        filter.Q.setValueAtTime(6, this.audioContext.currentTime);
        
        // Sharp attack with slight crescendo, typical of brass
        gain.gain.setValueAtTime(0, this.audioContext.currentTime);
        gain.gain.linearRampToValueAtTime(0.3, this.audioContext.currentTime + 0.02);
        gain.gain.linearRampToValueAtTime(0.4, this.audioContext.currentTime + 0.2);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 1.5);
        
        osc1.connect(filter);
        osc2.connect(filter);
        osc3.connect(filter);
        filter.connect(gain);
        
        return { oscillators: [osc1, osc2, osc3], gain, duration: 1.5 };
    }

    createOrgan() {
        const osc1 = this.audioContext.createOscillator();
        const osc2 = this.audioContext.createOscillator();
        const osc3 = this.audioContext.createOscillator();
        const osc4 = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        const filter = this.audioContext.createBiquadFilter();
        
        // Church organ drawbar configuration (Hammond organ style)
        const baseFreq = 130.81; // C3
        osc1.frequency.setValueAtTime(baseFreq, this.audioContext.currentTime); // 8' (fundamental)
        osc2.frequency.setValueAtTime(baseFreq * 2, this.audioContext.currentTime); // 4' (octave)
        osc3.frequency.setValueAtTime(baseFreq * 3, this.audioContext.currentTime); // 2 2/3' (fifth)
        osc4.frequency.setValueAtTime(baseFreq * 4, this.audioContext.currentTime); // 2' (octave)
        
        // Pure sine waves for classic organ tone
        osc1.type = 'sine';
        osc2.type = 'sine';
        osc3.type = 'sine';
        osc4.type = 'sine';
        
        // Gentle filtering to smooth harsh edges
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(4000, this.audioContext.currentTime);
        filter.Q.setValueAtTime(0.5, this.audioContext.currentTime);
        
        // Sustained organ envelope
        gain.gain.setValueAtTime(0, this.audioContext.currentTime);
        gain.gain.linearRampToValueAtTime(0.25, this.audioContext.currentTime + 0.05);
        gain.gain.linearRampToValueAtTime(0.2, this.audioContext.currentTime + 1.5);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 3.0);
        
        osc1.connect(filter);
        osc2.connect(filter);
        osc3.connect(filter);
        osc4.connect(filter);
        filter.connect(gain);
        
        return { oscillators: [osc1, osc2, osc3, osc4], gain, duration: 3.0 };
    }

    createFlute() {
        const osc1 = this.audioContext.createOscillator();
        const osc2 = this.audioContext.createOscillator();
        const noise = this.createNoise();
        const gain = this.audioContext.createGain();
        const noiseGain = this.audioContext.createGain();
        const filter = this.audioContext.createBiquadFilter();
        const noiseFilter = this.audioContext.createBiquadFilter();
        
        // Pure fundamental with subtle harmonics
        const baseFreq = 523.25; // C5
        osc1.frequency.setValueAtTime(baseFreq, this.audioContext.currentTime);
        osc2.frequency.setValueAtTime(baseFreq * 2, this.audioContext.currentTime);
        
        osc1.type = 'sine';
        osc2.type = 'triangle';
        
        // High-frequency filtered noise for breath/air sound
        noiseFilter.type = 'highpass';
        noiseFilter.frequency.setValueAtTime(4000, this.audioContext.currentTime);
        noiseFilter.Q.setValueAtTime(0.5, this.audioContext.currentTime);
        
        // Pure, airy filter for flute character
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(3000, this.audioContext.currentTime);
        filter.Q.setValueAtTime(1, this.audioContext.currentTime);
        
        // Gentle breath noise mixing
        noiseGain.gain.setValueAtTime(0.05, this.audioContext.currentTime);
        
        // Soft, breathy envelope
        gain.gain.setValueAtTime(0, this.audioContext.currentTime);
        gain.gain.linearRampToValueAtTime(0.2, this.audioContext.currentTime + 0.08);
        gain.gain.linearRampToValueAtTime(0.15, this.audioContext.currentTime + 0.8);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 1.8);
        
        osc1.connect(filter);
        osc2.connect(filter);
        noise.source.connect(noiseFilter);
        noiseFilter.connect(noiseGain);
        filter.connect(gain);
        noiseGain.connect(gain);
        
        return { oscillators: [osc1, osc2, noise.source], gain, duration: 1.8 };
    }

    createSaxophone() {
        const osc1 = this.audioContext.createOscillator();
        const osc2 = this.audioContext.createOscillator();
        const osc3 = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        const filter = this.audioContext.createBiquadFilter();
        const vibrato = this.audioContext.createOscillator();
        const vibratoGain = this.audioContext.createGain();
        
        // Rich saxophone harmonics
        const baseFreq = 293.66; // D4
        osc1.frequency.setValueAtTime(baseFreq, this.audioContext.currentTime);
        osc2.frequency.setValueAtTime(baseFreq * 2, this.audioContext.currentTime);
        osc3.frequency.setValueAtTime(baseFreq * 3, this.audioContext.currentTime);
        
        osc1.type = 'sawtooth';
        osc2.type = 'square';
        osc3.type = 'triangle';
        
        // Saxophone vibrato (6Hz)
        vibrato.frequency.setValueAtTime(6, this.audioContext.currentTime);
        vibrato.type = 'sine';
        vibratoGain.gain.setValueAtTime(12, this.audioContext.currentTime); // ±12Hz vibrato
        
        vibrato.connect(vibratoGain);
        vibratoGain.connect(osc1.frequency);
        vibratoGain.connect(osc2.frequency);
        vibratoGain.connect(osc3.frequency);
        
        // Warm, woody filter with slight resonance
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(800, this.audioContext.currentTime);
        filter.frequency.exponentialRampToValueAtTime(1200, this.audioContext.currentTime + 0.2);
        filter.Q.setValueAtTime(4, this.audioContext.currentTime);
        
        // Smooth jazz-like envelope
        gain.gain.setValueAtTime(0, this.audioContext.currentTime);
        gain.gain.linearRampToValueAtTime(0.3, this.audioContext.currentTime + 0.05);
        gain.gain.linearRampToValueAtTime(0.25, this.audioContext.currentTime + 0.3);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 2.2);
        
        osc1.connect(filter);
        osc2.connect(filter);
        osc3.connect(filter);
        filter.connect(gain);
        
        return { oscillators: [osc1, osc2, osc3, vibrato], gain, duration: 2.2 };
    }

    createCello() {
        const osc1 = this.audioContext.createOscillator();
        const osc2 = this.audioContext.createOscillator();
        const osc3 = this.audioContext.createOscillator();
        const osc4 = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        const filter = this.audioContext.createBiquadFilter();
        
        // Deep, rich cello harmonics
        const baseFreq = 130.81; // C3
        osc1.frequency.setValueAtTime(baseFreq, this.audioContext.currentTime);
        osc2.frequency.setValueAtTime(baseFreq * 2, this.audioContext.currentTime);
        osc3.frequency.setValueAtTime(baseFreq * 3, this.audioContext.currentTime);
        osc4.frequency.setValueAtTime(baseFreq * 4, this.audioContext.currentTime);
        
        osc1.type = 'sawtooth';
        osc2.type = 'triangle';
        osc3.type = 'sine';
        osc4.type = 'sine';
        
        // Warm, resonant filter for cello body resonance
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1200, this.audioContext.currentTime);
        filter.frequency.exponentialRampToValueAtTime(800, this.audioContext.currentTime + 0.5);
        filter.Q.setValueAtTime(3, this.audioContext.currentTime);
        
        // Bowing envelope with expressive dynamics
        gain.gain.setValueAtTime(0, this.audioContext.currentTime);
        gain.gain.linearRampToValueAtTime(0.15, this.audioContext.currentTime + 0.2);
        gain.gain.linearRampToValueAtTime(0.3, this.audioContext.currentTime + 0.8);
        gain.gain.linearRampToValueAtTime(0.2, this.audioContext.currentTime + 2.0);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 3.5);
        
        osc1.connect(filter);
        osc2.connect(filter);
        osc3.connect(filter);
        osc4.connect(filter);
        filter.connect(gain);
        
        return { oscillators: [osc1, osc2, osc3, osc4], gain, duration: 3.5 };
    }

    createHarp() {
        const osc1 = this.audioContext.createOscillator();
        const osc2 = this.audioContext.createOscillator();
        const osc3 = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        const filter = this.audioContext.createBiquadFilter();
        
        // Harp arpeggio harmonics
        const baseFreq = 523.25; // C5
        osc1.frequency.setValueAtTime(baseFreq, this.audioContext.currentTime);
        osc2.frequency.setValueAtTime(baseFreq * 2, this.audioContext.currentTime);
        osc3.frequency.setValueAtTime(baseFreq * 3, this.audioContext.currentTime);
        
        osc1.type = 'triangle';
        osc2.type = 'sine';
        osc3.type = 'sine';
        
        // Bright, bell-like filter
        filter.type = 'highpass';
        filter.frequency.setValueAtTime(200, this.audioContext.currentTime);
        filter.Q.setValueAtTime(0.5, this.audioContext.currentTime);
        
        // Plucked string envelope with beautiful decay
        gain.gain.setValueAtTime(0, this.audioContext.currentTime);
        gain.gain.linearRampToValueAtTime(0.4, this.audioContext.currentTime + 0.005);
        gain.gain.exponentialRampToValueAtTime(0.1, this.audioContext.currentTime + 0.3);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 2.5);
        
        osc1.connect(filter);
        osc2.connect(filter);
        osc3.connect(filter);
        filter.connect(gain);
        
        return { oscillators: [osc1, osc2, osc3], gain, duration: 2.5 };
    }
} 