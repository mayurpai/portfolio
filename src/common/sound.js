"use client";

// Browsers only allow audio after a user gesture, so the context is created on the visitor's first
// key press or tap in the intro (or their first click on a page link) and reused afterwards.
let context = null;

export function unlockSound() {
    if (typeof window === "undefined") return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    try {
        context ??= new AudioContext();
        if (context.state === "suspended") context.resume().catch(() => {});
    } catch (error) {
        context = null;
    }
}

function envelope(param, start, peak, attack, release) {
    param.setValueAtTime(0.0001, start);
    param.exponentialRampToValueAtTime(peak, start + attack);
    param.exponentialRampToValueAtTime(0.0001, start + attack + release);
}

function master(ctx, volume) {
    const gain = ctx.createGain();
    const compressor = ctx.createDynamicsCompressor();
    gain.gain.value = volume;
    gain.connect(compressor).connect(ctx.destination);
    return gain;
}

function noiseBuffer(ctx, seconds) {
    const buffer = ctx.createBuffer(1, Math.ceil(ctx.sampleRate * seconds), ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i += 1) data[i] = Math.random() * 2 - 1;
    return buffer;
}

function play(build) {
    const ctx = context;
    if (!ctx) return;
    if (ctx.state === "running") {
        build(ctx);
        return;
    }
    // Resuming can lag the gesture that unlocked it (e.g. "Skip intro" was the first tap).
    // If it doesn't come up promptly, stay silent rather than play out of sync later.
    let late = false;
    const timer = window.setTimeout(() => {
        late = true;
    }, 250);
    ctx.resume()
        .then(() => {
            window.clearTimeout(timer);
            if (!late && ctx.state === "running") build(ctx);
        })
        .catch(() => {});
}

// Arriving in Mayur's universe (the intro, and any page transition to home). ~1.6s, timed to the
// portal opening: an ignition thump, a hyperspace whoosh that peaks as the portal tears open,
// then a chime as the site appears.
export function playEntrance() {
    play(entrance);
}

// Entering the realm of words (page transition to poetry). ~1.8s, timed to the same portal:
// a breath of air, a harp run rising as it opens, then a warm chord and a glass bell.
export function playPoetry() {
    play(poetry);
}

function entrance(ctx) {
    const now = ctx.currentTime + 0.02;
    const out = master(ctx, 0.38);

    // Ignition: a sub drop as the stars streak to warp speed.
    const thump = ctx.createOscillator();
    const thumpGain = ctx.createGain();
    thump.type = "sine";
    thump.frequency.setValueAtTime(120, now);
    thump.frequency.exponentialRampToValueAtTime(38, now + 0.4);
    envelope(thumpGain.gain, now, 0.7, 0.008, 0.45);
    thump.connect(thumpGain).connect(out);
    thump.start(now);
    thump.stop(now + 0.5);

    // Warp: band-passed noise sweeping up and back down, with a rising tone underneath.
    const length = 1.6;
    const noise = ctx.createBufferSource();
    const band = ctx.createBiquadFilter();
    const whoosh = ctx.createGain();
    noise.buffer = noiseBuffer(ctx, length);
    band.type = "bandpass";
    band.Q.value = 1.1;
    band.frequency.setValueAtTime(260, now);
    band.frequency.exponentialRampToValueAtTime(3600, now + 0.7);
    band.frequency.exponentialRampToValueAtTime(700, now + length);
    envelope(whoosh.gain, now, 0.55, 0.7, 0.85);
    noise.connect(band).connect(whoosh).connect(out);
    noise.start(now);
    noise.stop(now + length);

    const riser = ctx.createOscillator();
    const riserGain = ctx.createGain();
    riser.type = "triangle";
    riser.frequency.setValueAtTime(160, now);
    riser.frequency.exponentialRampToValueAtTime(880, now + 0.7);
    envelope(riserGain.gain, now, 0.07, 0.6, 0.25);
    riser.connect(riserGain).connect(out);
    riser.start(now);
    riser.stop(now + 0.9);

    // Arrival: a bright E-major arpeggio, one note for each star colour (cyan, pink, gold).
    [659.25, 987.77, 1318.51].forEach((frequency, index) => {
        const start = now + 0.62 + index * 0.07;
        [
            [frequency, 0.22],
            [frequency * 2.76, 0.04],
        ].forEach(([pitch, level]) => {
            const bell = ctx.createOscillator();
            const bellGain = ctx.createGain();
            bell.type = "sine";
            bell.frequency.value = pitch;
            envelope(bellGain.gain, start, level, 0.01, 0.9);
            bell.connect(bellGain).connect(out);
            bell.start(start);
            bell.stop(start + 1);
        });
    });
}

function poetry(ctx) {
    const now = ctx.currentTime + 0.02;
    const out = master(ctx, 0.5);

    // A short shimmering echo, like light catching on gold dust; everything melodic runs through it.
    const delay = ctx.createDelay(1);
    const feedback = ctx.createGain();
    const wet = ctx.createGain();
    const warmth = ctx.createBiquadFilter();
    delay.delayTime.value = 0.13;
    feedback.gain.value = 0.32;
    wet.gain.value = 0.35;
    warmth.type = "lowpass";
    warmth.frequency.value = 4200;
    const voice = ctx.createGain();
    voice.connect(warmth).connect(out);
    warmth.connect(delay);
    delay.connect(feedback).connect(delay);
    delay.connect(wet).connect(out);

    // Breath: soft, airy noise that swells as the portal opens, like pages lifting.
    const length = 1.3;
    const air = ctx.createBufferSource();
    const airFilter = ctx.createBiquadFilter();
    const airGain = ctx.createGain();
    air.buffer = noiseBuffer(ctx, length);
    airFilter.type = "bandpass";
    airFilter.Q.value = 0.7;
    airFilter.frequency.setValueAtTime(900, now);
    airFilter.frequency.exponentialRampToValueAtTime(2600, now + 0.6);
    airFilter.frequency.exponentialRampToValueAtTime(1400, now + length);
    envelope(airGain.gain, now, 0.16, 0.55, 0.7);
    air.connect(airFilter).connect(airGain).connect(out);
    air.start(now);
    air.stop(now + length);

    // Harp run: D major pentatonic, rising and quickening into the moment the portal tears open.
    const run = [293.66, 369.99, 440, 493.88, 587.33, 659.25, 739.99, 880, 987.77];
    let at = now + 0.04;
    run.forEach((frequency, index) => {
        [
            ["triangle", frequency, 0.16],
            ["sine", frequency * 2, 0.035],
        ].forEach(([type, pitch, level]) => {
            const string = ctx.createOscillator();
            const pluck = ctx.createGain();
            string.type = type;
            string.frequency.value = pitch;
            envelope(pluck.gain, at, level, 0.004, 0.55);
            string.connect(pluck).connect(voice);
            string.start(at);
            string.stop(at + 0.6);
        });
        at += 0.075 - index * 0.004;
    });

    // Arrival: a warm Dmaj9 swell under a high glass bell on D, as the poetry page appears.
    const land = now + 0.6;
    [146.83, 220, 277.18, 329.63, 369.99].forEach((frequency, index) => {
        const pad = ctx.createOscillator();
        const padGain = ctx.createGain();
        pad.type = "sine";
        pad.frequency.value = frequency;
        pad.detune.value = index % 2 ? 5 : -5;
        envelope(padGain.gain, land - 0.15, 0.07, 0.3, 1);
        pad.connect(padGain).connect(voice);
        pad.start(land - 0.15);
        pad.stop(land + 1.2);
    });
    [
        [1174.66, 0.12],
        [1174.66 * 2.76, 0.025],
        [1174.66 * 5.4, 0.01],
    ].forEach(([pitch, level]) => {
        const glass = ctx.createOscillator();
        const glassGain = ctx.createGain();
        glass.type = "sine";
        glass.frequency.value = pitch;
        envelope(glassGain.gain, land, level, 0.006, 1.1);
        glass.connect(glassGain).connect(voice);
        glass.start(land);
        glass.stop(land + 1.2);
    });
}
