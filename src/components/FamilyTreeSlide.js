import { useState } from "react";

const FamilyTreeSlide = ({ slides, alt = "" }) => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <div className="mt-6">
      {/* Title will change with the tree image */}
      <h3 className="text-lg font-bold text-center mb-3">
        {slides[index].title}
      </h3>

      <button
        type="button"
        onClick={next}
        className="block mx-auto"
        title="Click to view next image"
      >
        <img
          src={slides[index].src}
          alt={alt}
          className="w-full max-w-3xl rounded-2xl border border-white/10 shadow-xl"
        />
      </button>

      <p className="mt-2 text-sm text-yellow-300 text-center">
        Click the image to view the next one
      </p>
    </div>
  );
};

export default FamilyTreeSlide;
