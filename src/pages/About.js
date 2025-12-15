import BackgroundLayout from "../components/BackgroundLayout";
import ArakiCarousel from "../components/ArakiCarousel";
import FamilyTreeSlide from "../components/FamilyTreeSlide";
import FamilyTreeIcon from "../components/FamilyTreeIcon";
import Header from "../components/Header";
import PageBrowserTitle from "../components/PageBrowserTitle";

const About = () => {
  return (
    <BackgroundLayout image="/images/jojo-glass-display.jpg">
      <div className="max-w-6xl mx-auto px-4 py-10 text-white">
        {PageBrowserTitle("About")}
        <Header title="About JoJo’s Bizarre Adventure" />

        
        {/* Araki */}
        <section className="bg-black/55 rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <ArakiCarousel intervalMs={4000} />
            </div>

            <div className="md:col-span-2 md:border-l md:border-white/10 md:pl-6">
              <h2 className="text-2xl font-bold mb-3">Hirohiko Araki</h2>
              <p className="text-white/90 leading-relaxed">
                Hirohiko Araki is the creator of <em>JoJo’s Bizarre Adventure</em>, known for bold
                character design, inventive abilities, and a storytelling style that constantly evolves.
                His art direction—fashion-inspired poses, dramatic compositions, and striking silhouettes—
                became a signature part of JoJo’s identity.
              </p>
            </div>
          </div>
        </section>


                {/* Creation */}
        <section className="bg-black/55 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Creation and Development Process</h2>

          <p className="text-white/90 leading-relaxed mb-4">
            Hirohiko Araki created <em>JoJo’s Bizarre Adventure</em> as a story about legacy,
            destiny, and the impact people leave behind. After the death of his grandfather,
            Araki became deeply interested in how one generation influences the next, which led
            him to write a multi-generational story centered on the Joestar family.
          </p>

          <p className="text-white/90 leading-relaxed mb-4">
            Araki was inspired by stories that successfully changed main characters over time.
            This influenced his decision to end Jonathan Joestar’s story and continue the series
            through his descendants, passing on the “spirit” of the Joestar bloodline rather than
            focusing on a single hero.
          </p>

          <p className="text-white/90 leading-relaxed mb-4">
            Artistically, JoJo draws inspiration from Western classical art, 1980s fashion, and
            bold color theory. Araki intentionally changes color palettes for dramatic effect
            rather than consistency, citing painters like Paul Gauguin as an influence. The
            series’ iconic poses are inspired by Greek and Roman statues as well as European art
            he studied during his travels.
          </p>

          <p className="text-white/90 leading-relaxed">
            At its core, JoJo explores mystery and supernatural power. Early parts introduced
            Hamon, an energy based on breathing, while later parts evolved into Stands—
            manifestations of a character’s spirit and will. This shift moved the series away
            from pure physical strength and toward battles based on strategy, psychology, and
            creativity. Over time, the art style evolved from heavily muscular figures to
            fashion-inspired designs influenced by classical Western art, creating the bold,
            refined visual identity JoJo is known for today.
          </p>
        </section>


        {/* Family Tree */}
        <section className="bg-black/55 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-3 text-center">Joestar Family Tree</h2>
          <p className="text-white/90 leading-relaxed mb-4">
            The Joestar bloodline is the main lineage of the series, connecting key characters across generations.
            Below is a short explanation of each main protagonist of Parts 1–5:
          </p>

          
          <FamilyTreeIcon />
          

          <FamilyTreeSlide
            slides={[
              { title: "Main Timeline Family Tree", src: "/images/main-jojo-timeline.jpg" },
              { title: "New Timeline Family Tree", src: "/images/new-jojo-timeline.jpg" },
            ]}
            alt="Joestar Family Tree"
          />
        </section>
      </div>
    </BackgroundLayout>
  );
};

export default About;
