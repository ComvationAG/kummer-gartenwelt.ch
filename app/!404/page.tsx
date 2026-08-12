export default () => {
  return (
    <>
      <div class="scene" aria-hidden="true" />
      <div class="bloom bloom-verdant" aria-hidden="true" />
      <div class="scene-grain" aria-hidden="true" />

      <main class="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <p
          class="reveal kicker text-[11px] text-india-green-700 mb-8"
          style="animation-delay:120ms"
        >
          Kummer Gartenbau
        </p>

        <h1
          class="reveal display text-stone-900 text-7xl sm:text-9xl"
          style="animation-delay:220ms"
        >
          4<span class="italic text-india-green-600 font-light">0</span>4
        </h1>

        <p
          class="reveal display italic text-stone-600 text-2xl sm:text-3xl mt-6 font-light"
          style="animation-delay:360ms"
        >
          Hier wächst vorerst nichts.
        </p>

        <p
          class="reveal mt-5 max-w-md text-stone-500 leading-relaxed"
          style="animation-delay:480ms"
        >
          Dieser Winkel des Gartens ist noch unbeplant. Kehren Sie zurück und
          wählen Sie eine der beiden Stimmungen.
        </p>

        <a
          href="/"
          class="reveal group mt-10 inline-flex items-center gap-3 rounded-full bg-india-green-600 px-7 py-3.5 text-white transition-all duration-500 hover:bg-india-green-700 hover:shadow-[0_14px_40px_-12px_rgba(40,215,40,0.6)]"
          style="animation-delay:600ms"
        >
          <span class="kicker text-[11px]">Zurück zur Auswahl</span>
          <span class="arrow text-lg transition-transform duration-500 group-hover:translate-x-1.5">
            →
          </span>
        </a>
      </main>
    </>
  );
};