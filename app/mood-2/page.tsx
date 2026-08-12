import type { Metadata } from "@huuma/ui/server";

export const metadata: Metadata = {
  title: "Terra — Mood 02 · Kummer Gartenbau",
  description: "Gestaltungsrichtung Terra: Palette, Typografie und Bildkomposition.",
};

const bark = [
  ["50", "#f9f2eb"], ["100", "#f3e4d8"], ["200", "#e7c9b1"], ["300", "#dbae8a"],
  ["400", "#cf9463"], ["500", "#c3793c"], ["600", "#9c6130"], ["700", "#754824"],
  ["800", "#4e3018"], ["900", "#27180c"], ["950", "#1b1108"],
];

const olive = [
  ["50", "#f5f3ef"], ["100", "#ece8df"], ["200", "#d9d1bf"], ["300", "#c6ba9f"],
  ["400", "#b3a280"], ["500", "#9f8b60"], ["600", "#806f4d"], ["700", "#605439"],
  ["800", "#403826"], ["900", "#201c13"], ["950", "#16130d"],
];

// Verified-loading Unsplash CDN urls — natural imagery, warmed by the .terra filter.
const img = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

const shots = {
  hero: img("1448375240586-882707db888b", 2000, 1300),
  a: img("1545241047-6083a3684587", 900, 1200),
  b: img("1416879595882-3373a0480b5b", 900, 700),
  c: img("1466692476868-aef1dfb1e735", 900, 900),
  d: img("1503602642458-232111445657", 1200, 800),
  e: img("1502082553048-f009c37129b9", 900, 1100),
};

export default () => {
  return (
    <div class="terra">
      <div class="scene" aria-hidden="true" />
      <div class="bloom bloom-terra" aria-hidden="true" />
      <div class="scene-grain" aria-hidden="true" />

      {/* Top bar */}
      <header
        class="reveal sticky top-0 z-30 flex items-center justify-between px-6 sm:px-10 lg:px-16 py-5 backdrop-blur-md bg-white/70 border-b border-brown-bark-100"
        style="animation-delay:80ms"
      >
        <a href="/" class="group flex items-center gap-3">
          <span class="arrow text-brown-bark-700 text-lg transition-transform duration-500 group-hover:-translate-x-1.5">
            ←
          </span>
          <span class="kicker text-[10px] text-stone-500">Zurück</span>
        </a>
        <div class="flex items-center gap-3">
          <span class="block w-2 h-2 rounded-full bg-olive-wood-500 shadow-[0_0_12px_2px_rgba(159,139,96,0.5)]" />
          <span class="kicker text-[10px] text-stone-500">
            Mood 02 · Terra
          </span>
        </div>
      </header>

      <main class="relative z-10">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section class="relative h-screen min-h-[640px] w-full overflow-hidden">
          <img
            src={shots.hero}
            alt=""
            class="absolute inset-0 h-full w-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-white via-white/55 to-transparent" />

          <div class="relative z-10 flex h-full flex-col justify-end px-6 sm:px-10 lg:px-16 pb-20">
            <p
              class="reveal kicker text-[11px] text-olive-wood-700 mb-6"
              style="animation-delay:240ms"
            >
              Gestaltungsrichtung 02
            </p>
            <h1
              class="reveal display text-brown-bark-950 text-7xl sm:text-8xl lg:text-[11rem]"
              style="animation-delay:320ms"
            >
              Te<span class="font-light text-brown-bark-600">rra</span>
            </h1>
            <p
              class="reveal mt-6 max-w-xl text-lg sm:text-xl text-stone-600 leading-relaxed"
              style="animation-delay:460ms"
            >
              Geerdet, warm und von ruhiger Beständigkeit — ein Aussenraum aus
              Wurzel, Stein und gedörrtem Holz. Ein Stimmungsbild für Farbe,
              Schrift und Bild.
            </p>
          </div>

          <div class="scroll-hint absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-brown-bark-600/70 text-2xl">
            ↓
          </div>
        </section>

        {/* ── Palette ──────────────────────────────────────────── */}
        <section class="px-6 sm:px-10 lg:px-16 py-24 lg:py-32 max-w-7xl">
          <div class="reveal flex items-baseline justify-between mb-14">
            <h2 class="display text-brown-bark-950 text-4xl sm:text-5xl">Palette</h2>
            <span class="kicker text-[10px] text-stone-400">Primär · Sekundär</span>
          </div>

          {/* Primary — brown-bark */}
          <div class="reveal mb-12" style="animation-delay:120ms">
            <div class="mb-4 flex items-center gap-3">
              <span class="kicker text-[10px] text-brown-bark-700">Brown Bark</span>
              <span class="text-stone-400 text-xs font-mono">primary</span>
            </div>
            <div class="grid grid-cols-6 sm:grid-cols-11 gap-2 sm:gap-3">
              {bark.map(([step, hex]) => (
                <div class="swatch" title={`brown-bark-${step} · ${hex}`}>
                  <div
                    class="h-24 sm:h-32 rounded-lg shadow-sm"
                    style={`background:${hex}`}
                  />
                  <div class="mt-2 flex items-center justify-between">
                    <span class="text-[10px] text-stone-500 font-mono">{step}</span>
                    <span class="hex text-[9px] text-stone-400 font-mono">{hex}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary — olive-wood */}
          <div class="reveal" style="animation-delay:240ms">
            <div class="mb-4 flex items-center gap-3">
              <span class="kicker text-[10px] text-olive-wood-700">Olive Wood</span>
              <span class="text-stone-400 text-xs font-mono">secondary</span>
            </div>
            <div class="grid grid-cols-6 sm:grid-cols-11 gap-2 sm:gap-3">
              {olive.map(([step, hex]) => (
                <div class="swatch" title={`olive-wood-${step} · ${hex}`}>
                  <div
                    class="h-24 sm:h-32 rounded-lg shadow-sm"
                    style={`background:${hex}`}
                  />
                  <div class="mt-2 flex items-center justify-between">
                    <span class="text-[10px] text-stone-500 font-mono">{step}</span>
                    <span class="hex text-[9px] text-stone-400 font-mono">{hex}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Accent pairing demo */}
          <div
            class="reveal mt-14 grid sm:grid-cols-3 gap-4"
            style="animation-delay:360ms"
          >
            <div class="rounded-2xl border border-brown-bark-200 bg-brown-bark-50 p-7">
              <span class="kicker text-[10px] text-brown-bark-700">Auf Rinde</span>
              <p class="display text-brown-bark-950 text-3xl mt-4">Aussenraum</p>
              <p class="text-stone-500 text-sm mt-2">brown-bark-50 / 950</p>
            </div>
            <div class="rounded-2xl border border-olive-wood-200 bg-olive-wood-50 p-7">
              <span class="kicker text-[10px] text-olive-wood-700">Auf Olive</span>
              <p class="display text-olive-wood-900 text-3xl mt-4">Akzent</p>
              <p class="text-stone-500 text-sm mt-2">olive-wood-50 / 900</p>
            </div>
            <div class="rounded-2xl border border-stone-200 bg-white p-7">
              <span class="kicker text-[10px] text-stone-500">Auf Weiss</span>
              <p class="display text-stone-900 text-3xl mt-4">Balance</p>
              <p class="text-stone-500 text-sm mt-2">white / stone-900</p>
            </div>
          </div>
        </section>

        {/* ── Palette ticker ──────────────────────────────────── */}
        <div class="overflow-hidden border-y border-brown-bark-100 py-5 bg-white/60">
          <div class="ticker-track">
            {[...bark, ...olive, ...bark, ...olive].map(([, hex], i) => (
              <span
                key={i}
                class="mx-6 flex items-center gap-3 whitespace-nowrap text-stone-500 font-mono text-xs"
              >
                <span class="inline-block w-4 h-4 rounded-full shadow-sm" style={`background:${hex}`} />
                {hex}
              </span>
            ))}
          </div>
        </div>

        {/* ── Typography ──────────────────────────────────────── */}
        <section class="px-6 sm:px-10 lg:px-16 py-24 lg:py-32 max-w-7xl">
          <div class="reveal flex items-baseline justify-between mb-16">
            <h2 class="display text-brown-bark-950 text-4xl sm:text-5xl">Typografie</h2>
            <span class="kicker text-[10px] text-stone-400">Lexend</span>
          </div>

          {/* Lexend — single, calm typeface */}
          <div class="reveal border-t border-brown-bark-100 pt-10" style="animation-delay:120ms">
            <div class="flex items-baseline justify-between mb-8">
              <span class="kicker text-[10px] text-olive-wood-700">Display & Text</span>
              <span class="text-stone-400 text-sm font-mono">Lexend · 100–900</span>
            </div>

            <p class="display text-brown-bark-950 text-6xl sm:text-8xl lg:text-9xl">
              Garten<span class="font-light text-brown-bark-600">bau</span>
            </p>

            <div class="mt-10 flex flex-wrap items-baseline gap-x-10 gap-y-4">
              <span class="display text-stone-800 text-5xl font-light">Light</span>
              <span class="display text-stone-800 text-5xl font-normal">Regular</span>
              <span class="display text-stone-800 text-5xl font-medium">Medium</span>
              <span class="display text-stone-800 text-5xl font-semibold">Semibold</span>
              <span class="display text-stone-800 text-5xl font-bold">Bold</span>
            </div>

            <p class="display text-olive-wood-800 text-2xl sm:text-3xl mt-10 max-w-2xl font-light leading-snug">
              „Ein Garten ist die Seele des Hauses — nach aussen getragen.“
            </p>
          </div>

          {/* Body specimen */}
          <div
            class="reveal border-t border-brown-bark-100 pt-10 mt-16"
            style="animation-delay:240ms"
          >
            <div class="flex items-baseline justify-between mb-8">
              <span class="kicker text-[10px] text-olive-wood-700">Fliesstext / UI</span>
              <span class="text-stone-400 text-sm font-mono">Lexend</span>
            </div>

            <div class="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <p class="text-stone-800 text-xl sm:text-2xl leading-relaxed max-w-xl">
                  Lexend trägt die gesamte Lesefläche — ruhig, gleichmässig und
                  professionell. Eine einzige, sicher gelesene Stimme für
                  Überschrift, Text und Navigation.
                </p>
                <p class="text-stone-500 text-base leading-relaxed mt-6 max-w-xl">
                  Hierarchie entsteht über Grösse und Gewicht, nicht über
                  Wechsel der Schrift — das wirkt geerdet und verlässlich.
                </p>
              </div>

              <div class="grid grid-cols-2 gap-x-8 gap-y-3 text-stone-700">
                <span class="text-xs">Aa — 12 px</span>
                <span class="text-sm">Aa — 14 px</span>
                <span class="text-base">Aa — 16 px</span>
                <span class="text-lg">Aa — 18 px</span>
                <span class="text-xl">Aa — 20 px</span>
                <span class="text-2xl">Aa — 24 px</span>
                <span class="font-light">Light 200</span>
                <span class="font-normal">Regular 400</span>
                <span class="font-medium">Medium 500</span>
                <span class="font-semibold">Semibold 600</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Image composition ──────────────────────────────── */}
        <section class="px-6 sm:px-10 lg:px-16 py-24 lg:py-32 max-w-7xl">
          <div class="reveal flex items-baseline justify-between mb-14">
            <h2 class="display text-brown-bark-950 text-4xl sm:text-5xl">
              Bildkomposition
            </h2>
            <span class="kicker text-[10px] text-stone-400">Platzierung · Rhythmus</span>
          </div>

          {/* Full-bleed statement image */}
          <div class="reveal img-frame rounded-3xl h-[60vh] min-h-[420px] mb-8" style="animation-delay:120ms">
            <img src={shots.d} alt="" />
            <div class="absolute z-10 left-7 bottom-7">
              <span class="kicker text-[10px] text-olive-wood-300">Full-bleed</span>
              <p class="display text-white text-3xl sm:text-4xl mt-2">
                Bild als Bühne
              </p>
            </div>
          </div>

          {/* Asymmetric duo */}
          <div class="grid sm:grid-cols-5 gap-8 mb-8">
            <div class="reveal img-frame rounded-3xl h-[52vh] min-h-[380px] sm:col-span-3" style="animation-delay:200ms">
              <img src={shots.b} alt="" />
              <div class="absolute z-10 left-6 bottom-6">
                <span class="kicker text-[10px] text-olive-wood-300">3 / 5</span>
                <p class="display text-white text-2xl mt-2">Spannung</p>
              </div>
            </div>
            <div class="reveal img-frame rounded-3xl h-[52vh] min-h-[380px] sm:col-span-2" style="animation-delay:300ms">
              <img src={shots.c} alt="" />
              <div class="absolute z-10 left-6 bottom-6">
                <span class="kicker text-[10px] text-olive-wood-300">2 / 5</span>
                <p class="display text-white text-2xl mt-2">Atmen</p>
              </div>
            </div>
          </div>

          {/* Portrait + caption triad */}
          <div class="grid sm:grid-cols-3 gap-8">
            <div class="reveal img-frame rounded-3xl h-[56vh] min-h-[380px]" style="animation-delay:160ms">
              <img src={shots.a} alt="" />
              <div class="absolute z-10 left-6 bottom-6">
                <span class="kicker text-[10px] text-olive-wood-300">Porträt</span>
                <p class="display text-white text-2xl mt-2">Hochformat</p>
              </div>
            </div>
            <div class="reveal img-frame rounded-3xl h-[56vh] min-h-[380px]" style="animation-delay:260ms">
              <img src={shots.e} alt="" />
              <div class="absolute z-10 left-6 bottom-6">
                <span class="kicker text-[10px] text-olive-wood-300">Porträt</span>
                <p class="display text-white text-2xl mt-2">Stimmung</p>
              </div>
            </div>

            {/* Caption block — type-on-color placing */}
            <div
              class="reveal flex flex-col justify-between rounded-3xl border border-olive-wood-200 bg-olive-wood-50 p-8 h-[56vh] min-h-[380px]"
              style="animation-delay:360ms"
            >
              <span class="kicker text-[10px] text-olive-wood-700">Bild + Wort</span>
              <div>
                <p class="display text-olive-wood-900 text-3xl leading-snug">
                  Wo das Bild schweigt, setzt die Schrift den Ton.
                </p>
                <p class="text-stone-500 text-sm mt-5">
                  Beschriftungen ruhen auf hellem Olive — Brown Bark als
                  Wegweiser für Hierarchie.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Footer ─────────────────────────────────────────── */}
        <footer
          class="reveal-soft flex flex-col sm:flex-row items-center justify-between gap-4 px-6 sm:px-10 lg:px-16 py-12 border-t border-brown-bark-100"
          style="animation-delay:200ms"
        >
          <div class="flex items-center gap-3">
            <span class="block w-2.5 h-2.5 rounded-full bg-brown-bark-500" />
            <span class="block w-2.5 h-2.5 rounded-full bg-olive-wood-500" />
            <span class="kicker text-[10px] text-stone-500">
              Mood 02 · Terra — Kummer Gartenbau
            </span>
          </div>
          <a
            href="/mood-1"
            class="group flex items-center gap-3 text-stone-600"
          >
            <span class="arrow text-brown-bark-700 text-lg transition-transform duration-500 group-hover:-translate-x-1.5">
              ←
            </span>
            <span class="kicker text-[10px]">Mood 01 ansehen</span>
          </a>
        </footer>
      </main>
    </div>
  );
};