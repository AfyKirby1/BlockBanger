const realisticInstrumentsPresets = {
    "jazz_quartet": [
        [true, false, false, false, false, false, true, false, true, false, false, false, false, false, true, false], // Kick
        [false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false], // Snare
        [false, false, true, false, false, false, true, false, false, false, true, false, false, false, true, false], // Hi-Hat
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Open Hat
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Tom
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Floor Tom
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Crash
        [true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false], // Ride
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Perc
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Cowbell
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Rimshot
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Shaker
        [true, false, false, true, false, false, true, false, true, false, false, true, false, false, true, false], // Bass
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Synth
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Lead
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Pad
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Arp
        [true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false], // Piano
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Guitar
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Violin
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Trumpet
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Organ
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Flute
        [false, false, true, false, true, false, false, true, false, false, true, false, true, false, false, true], // Saxophone
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Cello
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Harp
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]  // Clap
    ],

    "classical_orchestra": [
        [true, false, false, false, true, false, false, false, true, false, false, false, true, false, false, false], // Kick
        [false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false], // Snare
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Hi-Hat
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Open Hat
        [false, false, false, true, false, false, false, false, false, false, false, true, false, false, false, false], // Tom
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true], // Floor Tom
        [true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Crash
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Ride
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Perc
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Cowbell
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Rimshot
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Shaker
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Bass
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Synth
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Lead
        [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true], // Pad
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Arp
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Piano
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Guitar
        [false, false, true, false, true, false, false, true, false, false, true, false, true, false, false, true], // Violin
        [false, false, false, true, false, false, false, true, false, false, false, true, false, false, false, true], // Trumpet
        [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true], // Organ
        [false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true], // Flute
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Saxophone
        [true, false, false, true, false, false, true, false, true, false, false, true, false, false, true, false], // Cello
        [false, false, true, false, false, true, false, false, false, false, true, false, false, true, false, false], // Harp
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]  // Clap
    ],

    "country_folk": [
        [true, false, false, false, true, false, false, false, true, false, false, false, true, false, false, false], // Kick
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
        [true, false, false, true, false, false, false, false, true, false, false, true, false, false, false, false], // Bass
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Synth
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Lead
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Pad
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Arp
        [false, false, true, false, false, false, true, false, false, false, false, false, false, false, true, false], // Piano
        [true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false], // Guitar
        [false, false, false, true, false, false, false, true, false, false, false, true, false, false, false, true], // Violin
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Trumpet
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Organ
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Flute
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Saxophone
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Cello
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Harp
        [false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false]  // Clap
    ],

    "reggae_vibes": [
        [false, false, true, false, false, false, true, false, false, false, true, false, false, false, true, false], // Kick
        [false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false], // Snare
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
        [true, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false], // Bass
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Synth
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Lead
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Pad
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Arp
        [false, false, true, false, false, false, true, false, false, false, true, false, false, false, true, false], // Piano
        [true, false, false, true, false, false, false, true, true, false, false, true, false, false, false, true], // Guitar
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Violin
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Trumpet
        [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true], // Organ
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Flute
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Saxophone
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Cello
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Harp
        [false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false]  // Clap
    ],

    "smooth_jazz": [
        [true, false, false, false, false, false, true, false, true, false, false, false, false, false, true, false], // Kick
        [false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false], // Snare
        [false, false, true, false, false, false, true, false, false, false, true, false, false, false, true, false], // Hi-Hat
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Open Hat
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Tom
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Floor Tom
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Crash
        [true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false], // Ride
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Perc
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Cowbell
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Rimshot
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Shaker
        [true, false, false, true, false, false, true, false, true, false, false, true, false, false, true, false], // Bass
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Synth
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Lead
        [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true], // Pad
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Arp
        [true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false], // Piano
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Guitar
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Violin
        [false, false, false, true, false, false, false, true, false, false, false, true, false, false, false, true], // Trumpet
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Organ
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Flute
        [false, false, true, false, true, false, false, true, false, false, true, false, true, false, false, true], // Saxophone
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Cello
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // Harp
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]  // Clap
    ]
}; 