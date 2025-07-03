const popRetroPresets = {
    "disco": [
        // Drums - Classic disco pattern
        [true, false, false, false, true, false, false, false, true, false, false, false, true, false, false, false], // Kick
        [false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false], // Snare
        [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true], // Hi-Hat
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Open Hat
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Tom
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Floor Tom
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Crash
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Ride
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Perc
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Cowbell
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Rimshot
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Shaker
        // Synths - Disco bass
        [true, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false], // Bass
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Synth
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Lead
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Pad
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Arp
        // Instruments
        [false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false], // Piano
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Guitar
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Violin
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Trumpet
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Organ
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Flute
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Saxophone
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Cello
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Harp
        [false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false]  // Clap
    ],
    
    "synthpop": [
        // Drums - Synthpop pattern
        [true, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false], // Kick
        [false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false], // Snare
        [false, false, true, false, false, false, true, false, false, false, true, false, false, false, true, false], // Hi-Hat
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Open Hat
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Tom
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Floor Tom
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Crash
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Ride
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Perc
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Cowbell
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Rimshot
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Shaker
        // Synths - Synthpop bass and lead
        [true, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false], // Bass
        [false, false, false, false, false, true, false, false, false, false, false, false, false, true, false, false], // Synth
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Lead
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Pad
        [true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false], // Arp
        // Instruments
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Piano
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Guitar
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Violin
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Trumpet
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Organ
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Flute
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Saxophone
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Cello
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Harp
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]  // Clap
    ],
    
    "synthwave": [
        // Drums - Synthwave pattern
        [true, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false], // Kick
        [false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false], // Snare
        [false, false, true, false, false, false, true, false, false, false, true, false, false, false, true, false], // Hi-Hat
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Open Hat
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Tom
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Floor Tom
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Crash
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Ride
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Perc
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Cowbell
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Rimshot
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Shaker
        // Synths - Synthwave bass and lead
        [true, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false], // Bass
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Synth
        [false, false, false, false, false, true, false, false, false, false, false, false, false, true, false, false], // Lead
        [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true], // Pad
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Arp
        // Instruments
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Piano
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Guitar
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Violin
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Trumpet
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Organ
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Flute
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Saxophone
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Cello
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Harp
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]  // Clap
    ]
}; 