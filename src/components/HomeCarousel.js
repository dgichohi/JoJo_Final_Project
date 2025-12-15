import { useState, useEffect } from "react";


const slides = [
  "/images/phantom-blood-carousel.jpg",
  "/images/battle-tendency-carousel.jpg",
  "/images/stardust-crusaders-carousel.png",
  "/images/diamond-is-unbreakable-carousel.jpeg",
  "/images/golden-wind-carousel.jpeg",
];

const HomeCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % slides.length);
  const prev = () =>
    setCurrent((current - 1 + slides.length) % slides.length);

  const goTo = (index) => setCurrent(index);

  useEffect(() => {
    const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 
            3000
        ); // change 3000 to control speed (3 seconds)
        
        return () => clearInterval(interval); // cleanup
    }, 
    []
    );


  return (
    <div className="relative w-full max-w-5xl mx-auto mt-6">
      {/* Carousel wrapper */}
      <div className="relative h-56 md:h-96 overflow-hidden rounded-2xl">
        {slides.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={src}
              alt=""
              className="absolute block w-full h-full object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-3 left-1/2 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`w-3 h-3 rounded-full border border-white ${
              index === current ? "bg-white" : "bg-transparent"
            }`}
          />
        ))}
      </div>

      {/* Prev button */}
      <button
        onClick={prev}
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50">
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

      {/* Next button */}
      <button
        onClick={next}
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50">
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

export default HomeCarousel;
