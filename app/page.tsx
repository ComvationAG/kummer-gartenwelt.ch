import type { Metadata } from "@huuma/ui/server";

export const metadata: Metadata = {
  title: "Kummer Gartenbau — Gestaltungsvarianten",
  description:
    "Zwei gestalterische Richtungen für Ihren Aussenraum. Wählen Sie eine Stimmung.",
};

const moods = [
  {
    href: "/mood-1",
    index: "01",
    name: "Verdant",
    tagline: "Üppig. Lebendig. Frisch grün.",
    description:
      "Ein Garten, der atmet — saftiges Laub, lichte Klare und die ruhige Kraft des Wachstums.",
    glow: "rgba(40, 215, 40, 0.22)",
    shadow: "rgba(40, 215, 40, 0.35)",
    vein: "linear-gradient(90deg, #28d728, #a9efa9)",
    surface:
      "linear-gradient(155deg, rgba(8, 43, 8, 0.92), rgba(6, 30, 6, 0.55))",
    accent: "text-india-green-300",
    border: "border-india-green-700/40",
  },
  {
    href: "/mood-2",
    index: "02",
    name: "Terra",
    tagline: "Geerdet. Warm. Vollendet in Rinde.",
    description:
      "Wurzeln, Stein und gedörrtes Holz — ein Aussenraum von ruhiger, sonnengewärmter Beständigkeit.",
    glow: "rgba(195, 121, 60, 0.22)",
    shadow: "rgba(195, 121, 60, 0.32)",
    vein: "linear-gradient(90deg, #c3793c, #e7c9b1)",
    surface:
      "linear-gradient(155deg, rgba(39, 24, 12, 0.92), rgba(27, 17, 8, 0.55))",
    accent: "text-brown-bark-300",
    border: "border-brown-bark-700/40",
  },
];

export default () => {
  return (
    <>
      {/* Atmosphere */}
      <div class="scene" aria-hidden="true" />
      <div class="bloom bloom-verdant" aria-hidden="true" />
      <div class="bloom bloom-terra" aria-hidden="true" />
      <div class="scene-grain" aria-hidden="true" />

      <main class="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header
          class="reveal flex items-center justify-between px-6 sm:px-10 lg:px-16 pt-8"
          style="animation-delay:120ms"
        >
          <div class="flex items-center gap-3">
            <span class="block w-2.5 h-2.5 rounded-full bg-india-green-400 shadow-[0_0_18px_4px_rgba(40,215,40,0.6)]" />
            <span class="kicker text-[11px] text-stone-300/80">
              Kummer Gartenbau
            </span>
          </div>
          <span class="kicker text-[10px] text-stone-400/60 hidden sm:block">
            Gestaltungsvarianten · 2025
          </span>
        </header>

        {/* Hero */}
        <section class="flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-14 lg:py-20 max-w-6xl">
          <p
            class="reveal kicker text-[11px] text-india-green-300/90 mb-7"
            style="animation-delay:260ms"
          >
            Zwei Richtungen · eine Vision
          </p>

          <h1
            class="reveal display text-stone-50 text-5xl sm:text-7xl lg:text-8xl max-w-4xl"
            style="animation-delay:340ms"
          >
            Ein Garten, der zu{" "}
            <em class="italic text-india-green-300 font-light">Ihnen</em>{" "}
            spricht.
          </h1>

          <p
            class="reveal mt-8 max-w-xl text-lg sm:text-xl text-stone-300/85 leading-relaxed"
            style="animation-delay:460ms"
          >
            Wir haben zwei gestalterische Stimmungen für Ihren Aussenraum
            entwickelt. Treffen Sie eine Wahl — und tauchen Sie ein in die
            Atmosphäre, die am besten zu Ihnen passt.
          </p>

          <div
            class="reveal divider-grow mt-10 h-px w-40 bg-gradient-to-r from-india-green-400/70 to-transparent"
            style="animation-delay:560ms"
          />

          {/* Mood selector */}
          <div class="mt-12 grid gap-6 sm:grid-cols-2 sm:gap-7 lg:gap-8">
            {moods.map((mood, i) => (
              <a
                href={mood.href}
                class={`mood-card reveal group block rounded-3xl border ${mood.border} p-7 sm:p-9 backdrop-blur-md`}
                style={`animation-delay:${620 + i * 140}ms; background:${mood.surface}; --glow:${mood.glow}; --shadow:${mood.shadow};`}
              >
                <div class="relative z-10 flex flex-col h-full">
                  <div class="flex items-baseline justify-between">
                    <span class={`kicker text-[11px] ${mood.accent}`}>
                      Mood {mood.index}
                    </span>
                    <span class="text-stone-500 text-sm font-mono">
                      {mood.href}
                    </span>
                  </div>

                  <h2 class="display text-stone-50 text-4xl sm:text-5xl mt-8">
                    {mood.name}
                  </h2>
                  <p class={`mt-2 text-base ${mood.accent} font-medium`}>
                    {mood.tagline}
                  </p>
                  <p class="mt-4 text-stone-300/75 leading-relaxed text-[15px]">
                    {mood.description}
                  </p>

                  <div
                    class="mood-vein mt-8 h-px w-full"
                    style={`background:${mood.vein}`}
                  />

                  <div class="mt-6 flex items-center justify-between">
                    <span class={`text-sm font-medium ${mood.accent}`}>
                      Stimmung erkunden
                    </span>
                    <span class={`arrow text-2xl ${mood.accent}`}>→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer
          class="reveal-soft flex flex-col sm:flex-row items-center justify-between gap-3 px-6 sm:px-10 lg:px-16 py-8 text-stone-500 text-xs"
          style="animation-delay:1000ms"
        >
          <span class="kicker text-[10px]">Kummer Gartenbau · Aussenraumgestaltung</span>
          <span class="text-stone-600">Erstellt zur Präsentation — Variantenauswahl</span>
        </footer>
      </main>
    </>
  );
};