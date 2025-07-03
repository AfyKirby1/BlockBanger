# 🎵 Reliable Sound Sources for Web Audio Projects

This document contains vetted, reliable sources for downloading audio samples that work well for web-based music applications like Block Banger.

## 🎯 Recommended Free Sample Libraries

### 1. **Freesound.org** ⭐⭐⭐⭐⭐
- **URL**: https://freesound.org/
- **Pros**: Massive library, Creative Commons licensing, high quality
- **Cons**: Requires free account, some samples need attribution
- **Best for**: All types of samples, field recordings, unique sounds
- **Direct download**: Yes (after login)

### 2. **Zapsplat** ⭐⭐⭐⭐
- **URL**: https://www.zapsplat.com/
- **Pros**: Professional quality, well organized, royalty-free
- **Cons**: Requires free account, limited downloads per day
- **Best for**: Professional drum samples, FX, ambient sounds

### 3. **Splice Sounds** ⭐⭐⭐⭐
- **URL**: https://splice.com/sounds
- **Pros**: High-quality samples, stems, loops
- **Cons**: Subscription required for full access
- **Best for**: Modern electronic music samples

### 4. **BBC Sound Effects Library** ⭐⭐⭐⭐⭐
- **URL**: https://sound-effects.bbcrewind.co.uk/
- **Pros**: Professional BBC archive, royalty-free
- **Cons**: Limited to sound effects (not musical samples)
- **Best for**: Atmospheric sounds, real-world recordings

## 🥁 Drum-Specific Sources

### 1. **Drum Samples by Hydrogen**
- **URL**: https://github.com/hydrogen-music/hydrogen/tree/master/data/drumkits
- **Format**: WAV files in organized folders
- **License**: Open source, free to use
- **Best for**: Classic drum machine sounds (808, 909, acoustic kits)

### 2. **Reverb.com Free Sample Packs**
- **URL**: https://reverb.com/software/samples-and-loops
- **Pros**: Professional quality, genre-specific packs
- **Cons**: Requires email signup
- **Best for**: Genre-specific drum patterns

### 3. **Loopmasters Free Sample Packs**
- **URL**: https://www.loopmasters.com/genres/1-Free-Samples
- **Pros**: Professional producer-made samples
- **Cons**: Limited selection in free tier
- **Best for**: High-quality electronic music samples

## 🎹 Instrument & Synth Sources

### 1. **Freepats**
- **URL**: http://freepats.zenvoid.org/
- **Pros**: Comprehensive instrument collection, SoundFont format
- **Cons**: Older interface, requires conversion for web use
- **Best for**: Traditional instruments, realistic sounds

### 2. **Philharmonia Orchestra**
- **URL**: https://philharmoniaorchestra.co.uk/resources/sound-samples/
- **Pros**: Professional orchestra recordings, note-by-note samples
- **Cons**: Large file sizes
- **Best for**: Classical instruments, high-quality single notes

### 3. **Native Instruments Free Samples**
- **URL**: https://www.native-instruments.com/en/specials/free-samples/
- **Pros**: Professional quality, curated collections
- **Cons**: Requires account registration
- **Best for**: Electronic music, modern production

## 🌐 Web-Ready Sample Collections

### Direct-Link Resources (Good for Development)

#### 1. **GitHub Audio Repositories**
```
https://github.com/Kevin-carrasco/samples/tree/main/audio
https://github.com/wesbos/JavaScript30/tree/master/01%20-%20JavaScript%20Drum%20Kit/sounds
https://github.com/freeCodeCamp/cdn/tree/main/build/testable-projects-fcc/audio
```

#### 2. **CDN-Hosted Samples**
```
https://www.soundjay.com/ (requires download, then self-host)
https://mixkit.co/free-sound-effects/ (direct download)
https://audionautix.com/ (requires attribution)
```

## 📝 Legal Notes & Best Practices

### ✅ Always Check Licenses
- **Creative Commons**: Usually requires attribution
- **Royalty-Free**: Can use without ongoing payments
- **Public Domain**: Free to use without restrictions
- **Fair Use**: Limited use for educational/research purposes

### 🎯 Web Audio Best Practices
1. **File Size**: Keep samples under 1MB for web use
2. **Format**: Use WAV or MP3 (WAV preferred for quality)
3. **Sample Rate**: 44.1kHz is standard for web
4. **Bit Depth**: 16-bit is usually sufficient
5. **Compression**: Consider OGG Vorbis for better compression

### 🛠️ Conversion Tools
- **Audacity**: Free, cross-platform audio editor
- **FFmpeg**: Command-line audio conversion
- **Online converters**: CloudConvert, Online-Convert.com

## 🚀 Integration Tips for Block Banger

### Loading External Samples
```javascript
// Example: Loading from a reliable CDN
const SAMPLE_URLS = {
    kick: 'https://cdn.jsdelivr.net/gh/username/samples/kick.wav',
    snare: 'https://cdn.jsdelivr.net/gh/username/samples/snare.wav'
};
```

### Self-Hosting Samples
1. Download samples to a `samples/` folder
2. Update `audio-engine.js` to load from local files
3. Consider using a simple HTTP server for local testing

## Finding More Sounds

This project uses procedurally generated audio, so you don't *need* any external sound files to run it. However, if you want to modify the code to use real audio samples, or if you're just looking for sounds for other projects, here are some fantastic resources for high-quality, royalty-free audio.

### General Purpose Sample Libraries (Good for all types of drums, effects, and loops)

*   **SampleSwap**: A massive, well-organized library of royalty-free sounds. It's been around for over 20 years and has a huge variety of loops and one-shots. You need to register, but it's free.
*   **Freesound**: A collaborative database of Creative Commons licensed sounds. It's a treasure trove for everything from field recordings to synthesized effects. Pay close attention to the license for each sound!
*   **Looperman**: A community for musicians with a focus on loops, acapellas, and vocals. Great for finding inspiration. Requires a free account.
*   **BBC Sound Effects**: A huge archive of sound effects from the BBC, released for personal, educational, or research purposes.

### Piano & Realistic Instrument Samples

*   **SampleSwap (Instruments)**: Specifically, the [instrument sections](https://sampleswap.org/filebrowser-new.php?d=INSTRUMENTS+%28SINGLE+SAMPLES%29/) on SampleSwap have a great collection of single-note samples for pianos, guitars, and more. This is ideal for building your own virtual instruments.
*   **decent|SAMPLES**: Offers some high-quality, free sample libraries for use in their free `Decent Sampler` plugin. They have an excellent free [Basic Piano](https://www.decentsamples.com/product/basic-piano/) that is clean and well-recorded.
*   **Freesound (Packs)**: Searching for "piano loops" or "drum kit" in the [Packs section](https://freesound.org/browse/packs/) can yield curated collections of samples that are designed to work together. Check out packs like [this one for piano loops](https://freesound.org/people/josefpres/packs/35548/).

### Important Considerations

*   **Check the License**: Always check the license before using a sound. "Royalty-free" doesn't always mean "free to use in any context." Some licenses require attribution, while others prohibit commercial use.
*   **File Format**: For web projects, `.wav`, `.mp3`, and `.ogg` are the most common formats. Be prepared to convert files if needed.
*   **Quality**: Listen for clean recordings without background noise (unless that's what you want!). Higher bit depth and sample rates (like 24-bit, 48kHz) are great for production but may need to be down-sampled for web use to save space.

Happy hunting!

---

*Last updated: December 2024*
*For Block Banger v1.0 and future versions* 