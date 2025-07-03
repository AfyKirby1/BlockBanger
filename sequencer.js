class Sequencer {
    constructor(rows, steps, trackNames) {
        this.gridElement = document.getElementById('sequencerGrid');
        this.stepNumbersElement = document.getElementById('stepNumbers');
        this.rows = rows; // This should be 27 (all playable tracks)
        this.steps = steps;
        this.maxSteps = 32;
        this.gridState = this.createInitialGridState();
        this.trackNames = trackNames;
        
        // Define the grid structure to match the labels
        this.gridStructure = [
            { type: 'spacer' },  // DRUMS label
            { type: 'track', index: 0 },  // kick
            { type: 'track', index: 1 },  // snare
            { type: 'track', index: 2 },  // hihat
            { type: 'track', index: 3 },  // openhat
            { type: 'track', index: 4 },  // tom
            { type: 'track', index: 5 },  // floortom
            { type: 'track', index: 6 },  // crash
            { type: 'track', index: 7 },  // ride
            { type: 'track', index: 8 },  // perc
            { type: 'track', index: 9 },  // cowbell
            { type: 'track', index: 10 }, // rimshot
            { type: 'track', index: 11 }, // shaker
            { type: 'spacer' },  // SYNTHS label
            { type: 'track', index: 12 }, // bass
            { type: 'track', index: 13 }, // synth
            { type: 'track', index: 14 }, // lead
            { type: 'track', index: 15 }, // pad
            { type: 'track', index: 16 }, // arp
            { type: 'spacer' },  // INSTRUMENTS label
            { type: 'track', index: 17 }, // piano
            { type: 'track', index: 18 }, // guitar
            { type: 'track', index: 19 }, // violin
            { type: 'track', index: 20 }, // trumpet
            { type: 'track', index: 21 }, // organ
            { type: 'track', index: 22 }, // flute
            { type: 'track', index: 23 }, // saxophone
            { type: 'track', index: 24 }, // cello
            { type: 'track', index: 25 }, // harp
            { type: 'track', index: 26 }  // clap
        ];

        this.createGrid();
        this.addGridEventListeners();
    }

    createInitialGridState() {
        return Array(this.rows).fill(null).map(() => Array(this.maxSteps).fill(false));
    }

    createGrid() {
        this.gridElement.innerHTML = '';
        this.stepNumbersElement.innerHTML = '';

        // Update CSS grid columns
        this.gridElement.style.gridTemplateColumns = `repeat(${this.steps}, 1fr)`;
        this.stepNumbersElement.style.gridTemplateColumns = `repeat(${this.steps}, 1fr)`;

        // Create elements for each row in the grid structure
        for (let structureRow = 0; structureRow < this.gridStructure.length; structureRow++) {
            const rowInfo = this.gridStructure[structureRow];
            
            if (rowInfo.type === 'spacer') {
                // Create spacer elements for group labels
                for (let step = 0; step < this.steps; step++) {
                    const spacer = document.createElement('div');
                    spacer.classList.add('grid-spacer');
                    this.gridElement.appendChild(spacer);
                }
            } else if (rowInfo.type === 'track') {
                // Create blocks for playable tracks
                for (let step = 0; step < this.steps; step++) {
                    const block = document.createElement('div');
                    block.classList.add('block');
                    block.dataset.row = rowInfo.index;
                    block.dataset.step = step;
                    this.gridElement.appendChild(block);
                }
            }
        }

        // Create the step numbers
        for (let step = 0; step < this.steps; step++) {
            const stepNumber = document.createElement('div');
            stepNumber.classList.add('step-number');
            stepNumber.textContent = step + 1;
            this.stepNumbersElement.appendChild(stepNumber);
        }
        
        this.updateGridUI();
    }

    addGridEventListeners() {
        this.gridElement.addEventListener('click', (e) => {
            if (e.target.classList.contains('block')) {
                const row = parseInt(e.target.dataset.row, 10);
                const step = parseInt(e.target.dataset.step, 10);
                this.toggleBlock(row, step);
            }
        });
    }

    toggleBlock(row, step) {
        this.gridState[row][step] = !this.gridState[row][step];
        this.updateGridUI();
    }

    updateGridUI() {
        for (let row = 0; row < this.rows; row++) {
            for (let step = 0; step < this.steps; step++) {
                const block = this.gridElement.querySelector(`[data-row='${row}'][data-step='${step}']`);
                if (block) {
                    if (this.gridState[row][step]) {
                        block.classList.add('active');
                    } else {
                        block.classList.remove('active');
                    }
                }
            }
        }
    }

    clear() {
        this.gridState = this.createInitialGridState();
        this.updateGridUI();
    }

    loadPattern(pattern) {
        // Clear existing state
        this.gridState = this.createInitialGridState();
        
        // Load pattern data, padding with false if needed
        for (let row = 0; row < Math.min(pattern.length, this.rows); row++) {
            for (let step = 0; step < Math.min(pattern[row].length, this.maxSteps); step++) {
                this.gridState[row][step] = pattern[row][step];
            }
        }
        this.updateGridUI();
    }

    setPatternLength(newSteps) {
        this.steps = newSteps;
        this.createGrid();
    }

    getTrackName(rowIndex) {
        return this.trackNames[rowIndex];
    }

    highlightStep(step) {
        // Clear previous highlights
        this.gridElement.querySelectorAll('.current-step').forEach(el => {
            el.classList.remove('current-step');
        });

        if (step !== null) {
            // Highlight new step - only on playable tracks
            for (let row = 0; row < this.rows; row++) {
                const block = this.gridElement.querySelector(`[data-row='${row}'][data-step='${step}']`);
                if (block) {
                    block.classList.add('current-step');
                }
            }

            // Update beat indicator
            const beatIndicator = document.getElementById('beatIndicator');
            if (beatIndicator) {
                const percentage = (step / this.steps) * 100;
                beatIndicator.style.transform = `translateX(${percentage}%)`;
            }
        }
    }
} 