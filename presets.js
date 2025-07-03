const INSTRUMENT_ORDER = [
    'kick', 'snare', 'hihat', 'openhat', 'tom', 'floortom', 'crash', 'ride', 'perc', 'cowbell', 'rimshot', 'shaker',
    'bass', 'synth', 'lead', 'pad', 'arp',
    'piano', 'guitar', 'violin', 'trumpet', 'organ', 'flute', 'saxophone', 'cello', 'harp', 'clap'
];

const PRESETS = {
    ...electronicPresets,
    ...realisticInstrumentsPresets,
    ...hiphopPresets,
    ...popRetroPresets,
    ...rockFunkMetalPresets,
    ...worldTraditionalPresets,
    ...jazzBluesOtherPresets
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PRESETS, INSTRUMENT_ORDER };
}