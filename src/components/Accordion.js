import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/15">
      <button
        className="w-full text-left py-4 px-6 text-lg font-medium text-white/90 hover:bg-white/10 focus:outline-none flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span className="text-white/80">{isOpen ? "-" : "+"}</span>
      </button>

      {isOpen && (
        <div className="px-6 pb-4 text-white/80 leading-relaxed">
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;
