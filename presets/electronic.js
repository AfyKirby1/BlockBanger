const electronicPresets = {
    "house": [
        [true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false], // Kick
        [false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false], // Snare
        [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true], // Hi-Hat
        [false, false, true, false, false, false, true, false, false, false, true, false, false, false, true, false], // Open Hat
        [false, false, false, false, false, false, false, false, false, true, false, false, false, false, true, false], // Tom
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Floor Tom
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true], // Crash
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Ride
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Perc
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Cowbell
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Rimshot
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Shaker
        [true, false, false, true, false, false, false, false, true, false, false, true, false, false, false, false], // Bass
        [false, false, false, false, false, true, false, true, false, false, false, false, false, true, false, true], // Synth
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Lead
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Pad
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Arp
        [false, false, false, false, false, true, false, true, false, false, false, true, false, true, false, true], // Piano
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
    
    "techno": [
        // Drums - Hard techno pattern
        [true, false, false, false, true, false, false, false, true, false, false, false, true, false, false, false], // Kick
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Snare
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
        // Synths - Driving bass
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
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]  // Clap
    ],
    
    "trance": [
        // Drums - Uplifting trance pattern
        [true, false, false, false, true, false, false, false, true, false, false, false, true, false, false, false], // Kick
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Snare
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
        // Synths - Trance bass and lead
        [true, false, false, false, true, false, false, false, true, false, false, false, true, false, false, false], // Bass
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
    ],
    
    "dnb": [
        // Drums - Drum and bass pattern
        [true, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false], // Kick
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
        // Synths - Sub bass
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
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]  // Clap
    ],
    
    "jungle": [
        // Drums - Jungle breakbeat pattern
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
        // Synths - Jungle bass
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
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]  // Clap
    ],
    
    "dubstep": [
        // Drums - Dubstep pattern
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
        // Synths - Wobble bass
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
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]  // Clap
    ],
    
    "minimal": [
        // Drums - Minimal techno pattern
        [true, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false], // Kick
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Snare
        [false, false, true, false, false, false, false, false, false, false, true, false, false, false, false, false], // Hi-Hat
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Open Hat
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Tom
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Floor Tom
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Crash
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Ride
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Perc
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Cowbell
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Rimshot
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Shaker
        // Synths - Simple bass
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
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]  // Clap
    ]
}; 