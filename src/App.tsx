import { useEffect, useState } from "react";
import gsap from "gsap";
import Scene from "./components/Scene";
import ShadePicker from "./components/ShadePicker";
import { SHADES, Shade } from "./lib/shades";
import { useScrollAnimations } from "./hooks";

export default function App() {
  const [shade, setShade] = useState<Shade>(SHADES[0]);
  useScrollAnimations();

  useEffect(() => {
    document.documentElement.style.setProperty("--shade", shade.color);
    gsap.fromTo(
      "#shadeName",
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.5 },
    );
  }, [shade]);

  return (
    <>
      <div id="glow" />
      <Scene color={shade.color} />

      <header className="fixed top-0 inset-x-0 z-20 flex justify-between items-center px-[6vw] py-5 backdrop-blur-sm">
        <span className="font-serif text-2xl tracking-[.35em]">ROUGE</span>
      </header>

      <main id="main" className="relative z-[2]">
        <section>
          <div className="max-w-xl max-md:bg-white/50 max-md:rounded-3xl max-md:p-5">
            <p className="reveal text-[#4AA3A2] tracking-[.4em] text-xs uppercase mb-6">
              Haute Couture Beauty
            </p>
            <h1 className="reveal font-bold text-6xl md:text-8xl  leading-[.95]">
              Rouge
              <br />
              <em className="text-rose-400 ">Éternel</em>
            </h1>
            <p className="reveal mt-8 text-neutral-600 leading-relaxed max-w-md">
              Move your cursor, scroll, and watch the lipstick respond. A
              couture ritual in white and rose, rendered in real-time 3D.
            </p>
            <a
              href="#shades"
              className="reveal inline-block mt-10 px-8 py-3 rounded-full bg-[#980a39] text-white text-sm tracking-widest hover:bg-rose-600 transition shadow-lg shadow-rose-300/50"
            >
              DISCOVER SHADES
            </a>
          </div>
        </section>

        <section className="justify-end text-right">
          <div className="max-w-md max-md:bg-white/60 max-md:rounded-3xl max-md:p-5">
            <p className="reveal text-rose-500 tracking-[.4em] text-xs uppercase mb-4">
              The Craft
            </p>
            <h2 className="reveal  text-5xl md:text-6xl font-light">
              Sculpted <em className="text-rose-400">precision</em>
            </h2>
            <p className="reveal mt-6 text-neutral-600 leading-relaxed">
              A satin-gold case, a hand-finished bullet and a cushiony,
              long-wear formula that glides in a single stroke.
            </p>
            <div className="reveal mt-8 flex justify-end gap-8 text-center">
              {[
                ["12h", "WEAR"],
                ["24", "SHADES"],
                ["99%", "PIGMENT"],
              ].map(([v, l]) => (
                <div key={l}>
                  <p className="font-serif text-4xl text-rose-500">{v}</p>
                  <p className="text-xs tracking-widest text-neutral-500">
                    {l}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="shades" className="flex-col justify-center text-center">
          <p className="reveal text-rose-500 tracking-[.4em] text-xs uppercase mb-4">
            Choose your shade
          </p>
          <h2 className="reveal  text-5xl md:text-6xl font-light mb-2">
            One lipstick, <em className="text-rose-400">four moods</em>
          </h2>
          <p
            id="shadeName"
            className="font-serif text-2xl text-rose-500 mb-[42vh] md:mb-[46vh]"
          >
            {shade.name}
          </p>
          <ShadePicker active={shade} onSelect={setShade} />
        </section>

        <section>
          <div className="max-w-xl max-md:bg-white/50 max-md:rounded-3xl max-md:p-5">
            <h2 className="reveal text-5xl md:text-7xl font-light leading-none">
              Wear the <em className="text-rose-400">moment</em>
            </h2>
            <p className="reveal mt-6 text-neutral-600">
              Independent concept project, not affiliated with or endorsed by
              Dior.
            </p>
            <a
              href="#"
              className="reveal inline-block mt-8 px-8 py-3 rounded-full border border-rose-400 text-rose-600 text-sm tracking-widest hover:bg-rose-500 hover:text-white transition"
            >
              SHOP THE COLLECTION
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
