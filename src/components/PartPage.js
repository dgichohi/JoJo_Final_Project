import { Link } from "react-router-dom";
import BackgroundLayout from "./BackgroundLayout";
import Accordion from "./Accordion";
import partsData from "../data/partsData";
import Header from "./Header";
import PageBrowserTitle from "../components/PageBrowserTitle";

const PartPage = ({ partId }) => {
  const part = partsData[partId];
  if (!part) return null;

  PageBrowserTitle(`Part ${part.number}: ${part.title}`);

  const prev = partsData[partId - 1];
  const next = partsData[partId + 1];

  return (
    <BackgroundLayout image={part.wallpaper}>
      <div className="max-w-6xl mx-auto px-4 py-10 text-white">
        <Header title={`Part ${part.number}: ${part.title}`} />


        {/* Lore */}
        <div className="bg-black/55 rounded-2xl p-6 mt-10 mb-12">

          <h2 className="text-2xl font-bold mb-3">Lore</h2>
          <p className="text-white/80 leading-relaxed">{part.lore}</p>
        </div>

        {/* Characters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Villain Card */}
          <div className="bg-black/60 rounded-2xl overflow-hidden shadow-xl">
            <img
              src={part.villain.image}
              alt={part.villain.name}
              className="w-full h-96 object-cover object-top"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold">{part.villain.name}</h2>
              <p className="text-white/80 mt-2">
                {part.villain.description}
              </p>
            </div>

            {/* Villain Facts */}
            <div className="border-t border-white/10">
              {part.villain.facts.map((fact, i) => (
                <Accordion
                  key={i}
                  title={fact.title}
                  content={fact.content}
                />
              ))}
            </div>
          </div>

          {/* Joestar Card */}
          <div className="bg-black/60 rounded-2xl overflow-hidden shadow-xl">
            <img
              src={part.joestar.image}
              alt={part.joestar.name}
              className="w-full h-96 object-cover object-top"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold">{part.joestar.name}</h2>
              <p className="text-white/80 mt-2">
                {part.joestar.description}
              </p>
            </div>

            {/* Joestar Facts */}
            <div className="border-t border-white/10">
              {part.joestar.facts.map((fact, i) => (
                <Accordion
                  key={i}
                  title={fact.title}
                  content={fact.content}
                />
              ))}
            </div>
          </div>
        </div>

        

        {/* Previous and Next */}
        <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/20">
          {prev ? (
            <Link to={`/part${prev.number}`} className="px-5 py-2 bg-white/20 rounded-full hover:bg-white/30">
              ← Previous
            </Link>
          ) : (
            <span className="px-5 py-2 bg-white/10 text-white/40 rounded-full cursor-not-allowed"> {/* Disable if no previouspart */}
              ← Previous
            </span>
          )}

          {next ? (
            <Link to={`/part${next.number}`} className="px-5 py-2 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300">
              Next →
            </Link>
          ) : (
            <span className="px-5 py-2 bg-white/10 text-white/40 rounded-full cursor-not-allowed"> {/* Disable if no next part */}
              Next →
            </span>
          )}
        </div>
      </div>
    </BackgroundLayout>
  );
};

export default PartPage;
