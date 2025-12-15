import { useState } from "react";
import familyTreeData from "../data/familyTreeData";
import JoestarModal from "./JoestarModal";

const FamilyTreeIcons = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="mt-6">
      <h3 className="text-lg font-bold mb-3">Main Protagonists (Click an icon to learn more)</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {familyTreeData.map((char) => (
          <button
            key={char.name}
            onClick={() => setSelected(char)}
            className="group bg-black/40 border border-white/10 rounded-2xl p-3 text-center hover:bg-black/60 transition"
            title={`${char.name}`}
          >
            <img
              src={char.icon}
              alt={char.name}
              className="w-28 h-28 mx-auto rounded-xl object-cover border border-white/10 group-hover:scale-105 transition"
            />
            <p className="mt-2 text-sm font-semibold text-white/90 leading-tight">
              {char.name}
            </p>
            <p className="text-xs text-white/60 mt-1">{char.part}</p>
          </button>
        ))}
      </div>

      <JoestarModal character={selected} onClose={() => setSelected(null)} />
    </div>
  );
};

export default FamilyTreeIcons;
