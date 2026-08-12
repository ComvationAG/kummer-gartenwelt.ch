import type { Metadata } from "@huuma/ui/server";

export const metadata: Metadata = {
  title: "Aurum — Mood 02 · Kummer Gartenbau",
  description: "Gestaltungsrichtung Aurum: Palette, Typografie und Bildkomposition.",
};

// Verified-loading Unsplash CDN URLs — natural imagery, warmed by the .lexend filter.
const img = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

const shots = {
  hero: img("1448375240586-882707db888b", 2000, 1300),
  a: img("1545241047-6083a3684587", 900, 1200),
  b: img("1416879595882-3373a0480b5b", 900, 700),
  c: img("1466692476868-aef1dfb1e735", 900, 900),
  d: img("1503602642458-232111445657", 1200, 800),
  e: img("1502082553048-f009c37129b9", 900, 1100),
  ex: img("1518173946687-a4c8892bbd9f", 1200, 900),
};

export default () => {
  return (
    <div class="lexend">
      <div class="scene" aria-hidden="true" />
      <div class="bloom bloom-verdant" aria-hidden="true" />
      <div class="scene-grain" aria-hidden="true" />

      {/* Top bar */}
      <header
        class="reveal sticky top-0 z-30 flex items-center justify-between px-6 sm:px-10 lg:px-16 py-5 backdrop-blur-md bg-white/70 border-b border-india-green-100"
        style="animation-delay:80ms"
      >
        <a href="/" class="group flex items-center gap-3">
          <span class="arrow text-india-green-700 text-lg transition-transform duration-500 group-hover:-translate-x-1.5">
            ←
          </span>
          <span class="kicker text-[10px] text-stone-500">Zurück</span>
        </a>
        <div class="flex items-center gap-3">
          <span class="block w-2 h-2 rounded-full bg-olive-bark-500 shadow-[0_0_12px_2px_rgba(209,187,46,0.5)]" />
          <span class="kicker text-[10px] text-stone-500">
            Mood 02 · Aurum
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
              class="reveal kicker text-[11px] text-stone-500 mb-6"
              style="animation-delay:240ms"
            >
              Gestaltungsrichtung 02
            </p>
            <h1
              class="reveal display text-black text-7xl sm:text-8xl lg:text-[11rem]"
              style="animation-delay:320ms"
            >
              Au<span class="font-medium">rum</span>
            </h1>
            <p
              class="reveal mt-6 max-w-xl text-lg sm:text-xl text-stone-600 leading-relaxed"
              style="animation-delay:460ms"
            >
              Goldgrün, gediegen und warm — ein Aussenraum im Licht des späten
              Nachmittags, getragen von geduldigem Olive. Ein Stimmungsbild für
              Farbe, Schrift und Bild.
            </p>
          </div>

          <div class="scroll-hint absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-stone-400 text-2xl">
            ↓
          </div>
        </section>

        {/* ── Palette ──────────────────────────────────────────── */}
        <section class="px-6 sm:px-10 lg:px-16 py-24 lg:py-32 max-w-7xl">
          <div class="reveal flex items-baseline justify-between mb-14">
            <h2 class="display text-black text-4xl sm:text-5xl">Palette</h2>
            <span class="kicker text-[10px] text-stone-500">Primär · Sekundär</span>
          </div>

          {/* Accent pairing demo */}
          <div
            class="reveal grid sm:grid-cols-3 gap-4"
            style="animation-delay:120ms"
          >
            <div class="rounded-2xl border border-india-green-200 bg-india-green-50 p-7">
              <span class="kicker text-[10px] text-stone-500">Auf Grün</span>
              <p class="display text-black text-3xl mt-4">Aussenraum</p>
              <p class="text-stone-500 text-sm mt-2">india-green-50 / 950</p>
            </div>
            <div class="rounded-2xl border border-olive-bark-200 bg-olive-bark-50 p-7">
              <span class="kicker text-[10px] text-stone-500">Auf Olive</span>
              <p class="display text-black text-3xl mt-4">Akzent</p>
              <p class="text-stone-500 text-sm mt-2">olive-bark-50 / 900</p>
            </div>
            <div class="rounded-2xl border border-stone-200 bg-white p-7">
              <span class="kicker text-[10px] text-stone-500">Auf Weiss</span>
              <p class="display text-black text-3xl mt-4">Balance</p>
              <p class="text-stone-500 text-sm mt-2">white / stone-900</p>
            </div>
          </div>
        </section>

        {/* ── Typography ──────────────────────────────────────── */}
        <section class="px-6 sm:px-10 lg:px-16 py-24 lg:py-32 max-w-7xl">
          <div class="reveal flex items-baseline justify-between mb-16">
            <h2 class="display text-black text-4xl sm:text-5xl">Typografie</h2>
            <span class="kicker text-[10px] text-stone-500">Lexend</span>
          </div>

          {/* Lexend — single, calm typeface */}
          <div class="reveal border-t border-india-green-100 pt-10" style="animation-delay:120ms">
            <div class="flex items-baseline justify-between mb-8">
              <span class="kicker text-[10px] text-stone-500">Display & Text</span>
              <span class="text-stone-400 text-sm font-mono">Lexend · 100–900</span>
            </div>

            <p class="display text-black text-6xl sm:text-8xl lg:text-9xl">
              Garten<span class="font-medium">bau</span>
            </p>

            <div class="mt-10 flex flex-wrap items-baseline gap-x-10 gap-y-4">
              <span class="display text-stone-800 text-5xl font-light">Light</span>
              <span class="display text-stone-800 text-5xl font-normal">Regular</span>
              <span class="display text-stone-800 text-5xl font-medium">Medium</span>
              <span class="display text-stone-800 text-5xl font-semibold">Semibold</span>
              <span class="display text-stone-800 text-5xl font-bold">Bold</span>
            </div>

            <p class="display text-stone-700 text-2xl sm:text-3xl mt-10 max-w-2xl font-medium leading-snug">
              „Ein Garten ist die Seele des Hauses — nach aussen getragen.“
            </p>
          </div>

          {/* Body specimen */}
          <div
            class="reveal border-t border-india-green-100 pt-10 mt-16"
            style="animation-delay:240ms"
          >
            <div class="flex items-baseline justify-between mb-8">
              <span class="kicker text-[10px] text-stone-500">Fliesstext / UI</span>
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

        {/* ── Beispiel ───────────────────────────────────────── */}
        <section class="px-6 sm:px-10 lg:px-16 py-24 lg:py-32 max-w-7xl">
          <div class="reveal flex items-baseline justify-between mb-14">
            <h2 class="display text-black text-4xl sm:text-5xl">Beispiel</h2>
            <span class="kicker text-[10px] text-stone-500">In Anwendung</span>
          </div>

          <div class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image */}
            <div class="reveal img-frame rounded-3xl h-[54vh] min-h-[380px]" style="animation-delay:120ms">
              <img src={shots.ex} alt="" />
              <div class="absolute z-10 left-6 bottom-6">
                <span class="kicker text-[10px] text-stone-300">Beispiel</span>
                <p class="display text-white text-2xl sm:text-3xl mt-2">
                  Sitzplatz im Grün
                </p>
              </div>
            </div>

            {/* Text + CTA */}
            <div class="reveal" style="animation-delay:240ms">
              <h3 class="display text-black text-3xl sm:text-4xl">
                Ihr Garten, von Grund auf geplant.
              </h3>
              <p class="text-stone-600 text-lg leading-relaxed mt-5 max-w-md">
                Vom ersten Entwurf bis zur fertigen Anlage gestalten wir
                Aussenräume, die leben und mitwachsen — ruhend, lichterfüllt
                und auf Sie zugeschnitten.
              </p>
              <div class="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="/"
                  class="inline-flex items-center gap-2 rounded-full bg-india-green-600 px-6 py-3 font-medium text-white transition-colors hover:bg-india-green-700"
                >
                  Beratung anfragen
                  <span class="arrow">→</span>
                </a>
                <a
                  href="/"
                  class="font-medium text-olive-bark-700 underline-offset-4 hover:underline"
                >
                  Referenzen ansehen
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Image composition ──────────────────────────────── */}
        <section class="px-6 sm:px-10 lg:px-16 py-24 lg:py-32 max-w-7xl">
          <div class="reveal flex items-baseline justify-between mb-14">
            <h2 class="display text-black text-4xl sm:text-5xl">
              Bildkomposition
            </h2>
            <span class="kicker text-[10px] text-stone-500">Platzierung · Rhythmus</span>
          </div>

          {/* Full-bleed statement image */}
          <div class="reveal img-frame rounded-3xl h-[60vh] min-h-[420px] mb-8" style="animation-delay:120ms">
            <img src={shots.d} alt="" />
            <div class="absolute z-10 left-7 bottom-7">
              <span class="kicker text-[10px] text-stone-300">Full-bleed</span>
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
                <span class="kicker text-[10px] text-stone-300">3 / 5</span>
                <p class="display text-white text-2xl mt-2">Spannung</p>
              </div>
            </div>
            <div class="reveal img-frame rounded-3xl h-[52vh] min-h-[380px] sm:col-span-2" style="animation-delay:300ms">
              <img src={shots.c} alt="" />
              <div class="absolute z-10 left-6 bottom-6">
                <span class="kicker text-[10px] text-stone-300">2 / 5</span>
                <p class="display text-white text-2xl mt-2">Atmen</p>
              </div>
            </div>
          </div>

          {/* Portrait + caption triad */}
          <div class="grid sm:grid-cols-3 gap-8">
            <div class="reveal img-frame rounded-3xl h-[56vh] min-h-[380px]" style="animation-delay:160ms">
              <img src={shots.a} alt="" />
              <div class="absolute z-10 left-6 bottom-6">
                <span class="kicker text-[10px] text-stone-300">Porträt</span>
                <p class="display text-white text-2xl mt-2">Hochformat</p>
              </div>
            </div>
            <div class="reveal img-frame rounded-3xl h-[56vh] min-h-[380px]" style="animation-delay:260ms">
              <img src={shots.e} alt="" />
              <div class="absolute z-10 left-6 bottom-6">
                <span class="kicker text-[10px] text-stone-300">Porträt</span>
                <p class="display text-white text-2xl mt-2">Stimmung</p>
              </div>
            </div>

            {/* Caption block — type-on-color placing */}
            <div
              class="reveal flex flex-col justify-between rounded-3xl border border-olive-bark-200 bg-olive-bark-50 p-8 h-[56vh] min-h-[380px]"
              style="animation-delay:360ms"
            >
              <span class="kicker text-[10px] text-stone-500">Bild + Wort</span>
              <div>
                <p class="display text-black text-3xl leading-snug">
                  Wo das Bild schweigt, setzt die Schrift den Ton.
                </p>
                <p class="text-stone-500 text-sm mt-5">
                  Beschriftungen ruhen auf hellem Olive — die Farbe kommt aus
                  der Palette, nicht aus der Schrift.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Footer ─────────────────────────────────────────── */}
        <footer
          class="reveal-soft flex flex-col sm:flex-row items-center justify-between gap-4 px-6 sm:px-10 lg:px-16 py-12 border-t border-india-green-100"
          style="animation-delay:200ms"
        >
          <div class="flex items-center gap-3">
            <span class="block w-2.5 h-2.5 rounded-full bg-india-green-500" />
            <span class="block w-2.5 h-2.5 rounded-full bg-olive-bark-500" />
            <span class="kicker text-[10px] text-stone-500">
              Mood 02 · Aurum — Kummer Gartenbau
            </span>
          </div>
          <a
            href="/mood-1"
            class="group flex items-center gap-3 text-stone-600"
          >
            <span class="arrow text-india-green-700 text-lg transition-transform duration-500 group-hover:-translate-x-1.5">
              ←
            </span>
            <span class="kicker text-[10px]">Mood 01 ansehen</span>
          </a>
        </footer>
      </main>
    </div>
  );
};