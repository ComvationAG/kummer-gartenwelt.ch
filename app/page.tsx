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
    glow: "rgba(255, 174, 0, 0.16)",
    shadow: "rgba(153, 105, 0, 0.24)",
    vein: "linear-gradient(90deg, #996900, #ffdf99)",
    surface: "linear-gradient(160deg, #ffffff, #fff7e5)",
    accent: "text-mustard-700",
    border: "border-mustard-200",
  },
  {
    href: "/mood-2",
    index: "02",
    name: "Aurum",
    tagline: "Goldgrün. Gediegen. Warm.",
    description:
      "Ein Aussenraum im warmen Licht des späten Nachmittags — gediegen, ruhend, von goldenem Olive getragen.",
    glow: "rgba(209, 187, 46, 0.16)",
    shadow: "rgba(125, 112, 28, 0.24)",
    vein: "linear-gradient(90deg, #7d701c, #ede4ab)",
    surface: "linear-gradient(160deg, #ffffff, #faf8ea)",
    accent: "text-olive-bark-700",
    border: "border-olive-bark-200",
  },
];

export default () => {
  return (
    <div class="bricolage">
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
            <span class="block w-2.5 h-2.5 rounded-full bg-india-green-500 shadow-[0_0_16px_3px_rgba(40,215,40,0.45)]" />
            <span class="kicker text-[11px] text-india-green-700">
              Kummer Gartenbau
            </span>
          </div>
          <span class="kicker text-[10px] text-stone-400 hidden sm:block">
            Gestaltungsvarianten · 2025
          </span>
        </header>

        {/* Hero */}
        <section class="flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-14 lg:py-20 max-w-6xl">
          <p
            class="reveal kicker text-[11px] text-stone-500 mb-7"
            style="animation-delay:260ms"
          >
            Zwei Richtungen · eine Vision
          </p>

          <h1
            class="reveal display text-black font-bold text-5xl sm:text-7xl lg:text-8xl max-w-4xl"
            style="animation-delay:340ms"
          >
            Ein Garten, der zu{" "}
            <em class="font-medium">Ihnen</em>{" "}
            spricht.
          </h1>

          <p
            class="reveal mt-8 max-w-xl text-lg sm:text-xl text-stone-600 leading-relaxed"
            style="animation-delay:460ms"
          >
            Wir haben zwei gestalterische Stimmungen für Ihren Aussenraum
            entwickelt. Treffen Sie eine Wahl — und tauchen Sie ein in die
            Atmosphäre, die am besten zu Ihnen passt.
          </p>

          <div
            class="reveal divider-grow mt-10 h-px w-40 bg-stone-400"
            style="animation-delay:560ms"
          />

          {/* Mood selector */}
          <div class="mt-12 grid gap-6 sm:grid-cols-2 sm:gap-7 lg:gap-8">
            {moods.map((mood, i) => (
              <a
                href={mood.href}
                class={`mood-card reveal group block rounded-3xl border ${mood.border} p-7 sm:p-9 backdrop-blur-sm`}
                style={`animation-delay:${620 + i * 140}ms; background:${mood.surface}; --glow:${mood.glow}; --shadow:${mood.shadow};`}
              >
                <div class="relative z-10 flex flex-col h-full">
                  <div class="flex items-baseline justify-between">
                    <span class={`kicker text-[11px] ${mood.accent}`}>
                      Mood {mood.index}
                    </span>
                    <span class="text-stone-400 text-sm font-mono">
                      {mood.href}
                    </span>
                  </div>

                  <h2 class="display text-stone-900 font-bold text-4xl sm:text-5xl mt-8">
                    {mood.name}
                  </h2>
                  <p class={`mt-2 text-base ${mood.accent} font-medium`}>
                    {mood.tagline}
                  </p>
                  <p class="mt-4 text-stone-600 leading-relaxed text-[15px]">
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
          class="reveal-soft flex flex-col sm:flex-row items-center justify-between gap-3 px-6 sm:px-10 lg:px-16 py-8 text-stone-400 text-xs"
          style="animation-delay:1000ms"
        >
          <span class="kicker text-[10px]">Kummer Gartenbau · Aussenraumgestaltung</span>
          <span class="text-stone-400">Erstellt zur Präsentation — Variantenauswahl</span>
        </footer>
      </main>
    </div>
  );
};