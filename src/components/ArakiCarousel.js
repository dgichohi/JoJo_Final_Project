import { useEffect, useState } from "react";

const slides = [
  "/images/hirohiko-araki.jpg",
  "/images/hirohiko-araki1.jpg",
  "/images/hirohiko-araki2.jpg",
  "/images/hirohiko-araki-and-rohan.jpg"
];

const ArakiCarousel = ({ intervalMs = 4000 }) => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const goTo = (index) => setCurrent(index);

  // auto-slide
  useEffect(() => {
    const id = setInterval(next, intervalMs);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intervalMs]);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-xl">
      {/* Slides */}
      <div className="relative h-64 sm:h-72 md:h-80">
        {slides.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              i === current ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover object-[50%_15%]"
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 w-6 rounded-full border border-white/70 transition ${
              i === current ? "bg-white" : "bg-white/20"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Prev/Next */}
      <button
        onClick={prev}
        className="absolute inset-y-0 left-0 px-3 flex items-center justify-center z-10"
        aria-label="Previous"
      >
        <span className="w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m15 19-7-7 7-7"
            />
          </svg>
        </span>
      </button>

      <button
        onClick={next}
        className="absolute inset-y-0 right-0 px-3 flex items-center justify-center z-10"
        aria-label="Next"
      >
        <span className="w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9 5 7 7-7 7"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default ArakiCarousel;
