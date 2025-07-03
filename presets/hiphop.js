const hiphopPresets = {
    "trap": [
        // Drums - Classic trap pattern with heavy kick and snare
        [true, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false], // Kick
        [false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false], // Snare
        [true, false, true, true, false, true, true, false, true, false, true, true, false, true, true, false], // Hi-Hat
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Open Hat
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Tom
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Floor Tom
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Crash
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Ride
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Perc
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Cowbell
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Rimshot
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Shaker
        // Synths - Deep bass pattern
        [true, false, false, false, true, false, false, false, true, false, false, false, true, false, false, false], // Bass
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Synth
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Lead
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Pad
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
        [false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false]  // Clap
    ],
    
    "drill": [
        // Drums - UK drill pattern with sliding hi-hats
        [true, false, false, false, true, false, false, false, true, false, false, false, true, false, false, false], // Kick
        [false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false], // Snare
        [true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false], // Hi-Hat
        [false, false, false, true, false, false, false, true, false, false, false, true, false, false, false, true], // Open Hat
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Tom
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Floor Tom
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Crash
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Ride
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Perc
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Cowbell
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Rimshot
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Shaker
        // Synths - Sliding bass
        [true, false, false, true, false, false, true, false, true, false, false, true, false, false, true, false], // Bass
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Synth
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Lead
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Pad
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
        [false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false]  // Clap
    ],
    
    "phonk": [
        // Drums - Memphis phonk style
        [true, false, false, false, true, false, false, false, true, false, false, false, true, false, false, false], // Kick
        [false, false, false, false, true, false, false, true, false, false, false, false, true, false, false, true], // Snare
        [true, true, false, true, true, true, false, true, true, true, false, true, true, true, false, true], // Hi-Hat
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Open Hat
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Tom
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Floor Tom
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Crash
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Ride
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Perc
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Cowbell
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Rimshot
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Shaker
        // Synths - Deep distorted bass
        [true, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false], // Bass
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Synth
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Lead
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Pad
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
        [false, false, false, false, true, false, false, true, false, false, false, false, true, false, false, true]  // Clap
    ],
    
    "grime": [
        // Drums - UK grime pattern
        [true, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false], // Kick
        [false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false], // Snare
        [true, false, true, true, false, true, true, false, true, false, true, true, false, true, true, false], // Hi-Hat
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Open Hat
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Tom
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Floor Tom
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Crash
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Ride
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Perc
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Cowbell
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Rimshot
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Shaker
        // Synths - Wobbling bass
        [true, false, false, false, true, false, false, false, true, false, false, false, true, false, false, false], // Bass
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Synth
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Lead
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Pad
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
        [false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false]  // Clap
    ],
    
    "lofi": [
        // Drums - Chill lo-fi pattern
        [true, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false], // Kick
        [false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false], // Snare
        [true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false], // Hi-Hat
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Open Hat
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Tom
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Floor Tom
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Crash
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Ride
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Perc
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Cowbell
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Rimshot
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Shaker
        // Synths - Warm bass
        [true, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false], // Bass
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Synth
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Lead
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Pad
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Arp
        // Instruments - Piano chords
        [false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false], // Piano
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
    
    "breakbeat": [
        // Drums - Classic breakbeat pattern
        [true, false, false, false, false, false, true, false, false, false, false, false, false, false, true, false], // Kick
        [false, false, false, false, true, false, false, true, false, false, false, false, true, false, false, false], // Snare
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
        // Synths - Funky bass
        [true, false, false, true, false, false, false, false, true, false, false, true, false, false, false, false], // Bass
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Synth
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Lead
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Pad
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
        [false, false, false, false, true, false, false, true, false, false, false, false, true, false, false, false]  // Clap
    ]
}; 