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
        this.addGlobalEventListeners();
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
        // Drag state tracking
        this.isDragging = false;
        this.dragMode = null; // 'paint' or 'erase'
        this.dragStartValue = null; // The initial state we're setting
        this.hasActuallyDragged = false; // Track if mouse actually moved during drag
        this.mouseDownBlock = null; // Track which block was initially clicked
        
        // Mouse down - start potential drag operation
        this.gridElement.addEventListener('mousedown', (e) => {
            if (e.target.classList.contains('block')) {
                e.preventDefault(); // Prevent text selection
                this.isDragging = true;
                this.hasActuallyDragged = false;
                
                const row = parseInt(e.target.dataset.row, 10);
                const step = parseInt(e.target.dataset.step, 10);
                this.mouseDownBlock = { row, step };
                
                // Determine drag mode based on modifier keys or mouse button
                if (e.button === 2 || e.shiftKey) {
                    // Right click or Shift + click = erase mode
                    this.dragMode = 'erase';
                    this.dragStartValue = false;
                } else {
                    // Left click = paint mode (toggle current state)
                    this.dragMode = 'paint';
                    this.dragStartValue = !this.gridState[row][step];
                }
                
                // Don't apply action immediately - wait to see if it's a drag or click
            }
        });
        
        // Mouse move - continue drag operation
        this.gridElement.addEventListener('mousemove', (e) => {
            if (this.isDragging && e.target.classList.contains('block')) {
                const row = parseInt(e.target.dataset.row, 10);
                const step = parseInt(e.target.dataset.step, 10);
                
                // Check if we've actually moved to a different block
                if (!this.hasActuallyDragged && this.mouseDownBlock && 
                    (row !== this.mouseDownBlock.row || step !== this.mouseDownBlock.step)) {
                    // This is the first movement - start actual dragging
                    this.hasActuallyDragged = true;
                    
                    // Apply visual feedback for dragging
                    this.gridElement.classList.add('dragging');
                    if (this.dragMode === 'erase') {
                        this.gridElement.classList.add('erase-mode');
                    }
                    
                    // Apply action to the original clicked block
                    this.setBlock(this.mouseDownBlock.row, this.mouseDownBlock.step, this.dragStartValue);
                }
                
                if (this.hasActuallyDragged) {
                    // Apply the drag action to the current block
                    this.setBlock(row, step, this.dragStartValue);
                }
            }
            
            // Add hover effect for all blocks during potential drag
            if (e.target.classList.contains('block') && !this.isDragging) {
                // Clear previous hover
                this.gridElement.querySelectorAll('.block.hover').forEach(block => {
                    block.classList.remove('hover');
                });
                // Add hover to current block
                e.target.classList.add('hover');
            }
        });
        
        // Mouse up - end drag operation or handle click
        this.gridElement.addEventListener('mouseup', (e) => {
            if (this.isDragging) {
                if (!this.hasActuallyDragged && this.mouseDownBlock && e.target.classList.contains('block')) {
                    // This was a click, not a drag - handle as simple toggle
                    const row = parseInt(e.target.dataset.row, 10);
                    const step = parseInt(e.target.dataset.step, 10);
                    
                    // Only toggle if we're clicking the same block we started on
                    if (row === this.mouseDownBlock.row && step === this.mouseDownBlock.step) {
                        this.toggleBlock(row, step);
                    }
                }
                
                // Reset all drag state
                this.isDragging = false;
                this.dragMode = null;
                this.dragStartValue = null;
                this.hasActuallyDragged = false;
                this.mouseDownBlock = null;
                
                // Remove visual feedback
                this.gridElement.classList.remove('dragging', 'erase-mode');
            }
        });
        
        // Mouse leave - end drag operation when leaving grid
        this.gridElement.addEventListener('mouseleave', (e) => {
            if (this.isDragging) {
                // Reset all drag state
                this.isDragging = false;
                this.dragMode = null;
                this.dragStartValue = null;
                this.hasActuallyDragged = false;
                this.mouseDownBlock = null;
                
                // Remove visual feedback
                this.gridElement.classList.remove('dragging', 'erase-mode');
            }
            
            // Clear hover effects
            this.gridElement.querySelectorAll('.block.hover').forEach(block => {
                block.classList.remove('hover');
            });
        });
        
        // Prevent context menu on right click
        this.gridElement.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
        

    }

    toggleBlock(row, step) {
        this.gridState[row][step] = !this.gridState[row][step];
        this.updateGridUI();
    }
    
    setBlock(row, step, value) {
        this.gridState[row][step] = value;
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

    addGlobalEventListeners() {
        // Global mouse up event to handle cases where mouse is released outside the grid
        document.addEventListener('mouseup', (e) => {
            if (this.isDragging) {
                // Reset all drag state
                this.isDragging = false;
                this.dragMode = null;
                this.dragStartValue = null;
                this.hasActuallyDragged = false;
                this.mouseDownBlock = null;
                
                // Remove visual feedback
                this.gridElement.classList.remove('dragging', 'erase-mode');
            }
        });
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