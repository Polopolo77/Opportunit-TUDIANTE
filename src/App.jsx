import { useRef, useState, useEffect } from "react";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import Aurora from "./components/Aurora/Aurora";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import CountUp from "./components/CountUp/CountUp";
import PreLoader from "./components/PreLoader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { allProjects, socialLinks } from "./data/projects";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const handleProjectClick = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  // Filtrage des projets par section
  const filteredProjects = activeFilter === "all"
    ? allProjects
    : allProjects.filter((p) => p.section === activeFilter);

  const filters = [
    { key: "all", label: "Tous" },
    { key: "sites", label: "Sites Web" },
    { key: "ugc", label: "UGC Vidéo" },
    { key: "automations", label: "Automatisations" },
    { key: "saas", label: "SaaS" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
      },
      { threshold: 0.2 }
    );
    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <PreLoader />

      {/* Aurora en fond */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Aurora colorStops={["#4f46e5", "#7c3aed", "#6366f1"]} blend={0.5} amplitude={1.0} speed={0.5} />
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />

        {/* ===== HERO ===== */}
        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1" id="home">
          <div className="animate__animated animate__fadeInUp" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
              <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-zinc-300">Disponible pour de nouveaux projets</span>
            </div>

            <h1 className="text-5xl font-bold mb-6">
              <ShinyText text="L'IA au service de votre croissance" disabled={false} speed={3} className="custom-class" />
            </h1>

            <BlurText
              text="Freelance AI Creative Strategist — Je crée des sites web performants, des vidéos UGC par IA, des automatisations intelligentes et des produits SaaS sur mesure pour accélérer votre business."
              delay={100}
              animateBy="words"
              direction="top"
              className="mb-6 text-zinc-300"
            />

            {/* Stat Meta Ads */}
            <div className="flex items-center gap-4 mb-8 bg-zinc-800/60 backdrop-blur-md p-4 rounded-2xl border border-violet-500/20 w-fit">
              <div className="text-center">
                <span className="text-2xl font-bold text-violet-400">19%</span>
                <p className="text-xs text-zinc-400">CTR</p>
              </div>
              <div className="w-px h-10 bg-zinc-600" />
              <div className="text-center">
                <span className="text-2xl font-bold text-violet-400">€0.08</span>
                <p className="text-xs text-zinc-400">CPC</p>
              </div>
              <div className="w-px h-10 bg-zinc-600" />
              <div className="text-center">
                <span className="text-sm font-medium text-zinc-300">Meta Ads</span>
              </div>
            </div>

            <div className="flex items-center sm:gap-4 gap-2">
              <a href="#contact" className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors">
                <ShinyText text="Discutons de votre projet" disabled={false} speed={3} className="custom-class" />
              </a>
              <a href="#project" className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors">
                <ShinyText text="Voir mes projets" disabled={false} speed={3} className="custom-class" />
              </a>
            </div>
          </div>

          {/* Colonne droite : card stat */}
          <div className="md:ml-auto" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
            <div className="bg-zinc-900/80 backdrop-blur-md border border-violet-500/30 rounded-3xl p-8 shadow-2xl shadow-violet-500/10 max-w-sm mx-auto">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-1">Paul-Emile</h2>
                <p className="text-violet-400 text-sm font-medium">AI Creative Strategist</p>
                <span className="inline-flex items-center gap-1.5 mt-2 text-xs text-green-400">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  En ligne
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-zinc-800/60 rounded-xl p-4">
                  <span className="text-2xl font-bold text-white">4</span>
                  <p className="text-xs text-zinc-400 mt-1">Services</p>
                </div>
                <div className="bg-zinc-800/60 rounded-xl p-4">
                  <span className="text-2xl font-bold text-white">13</span>
                  <p className="text-xs text-zinc-400 mt-1">Projets</p>
                </div>
                <div className="bg-zinc-800/60 rounded-xl p-4">
                  <span className="text-2xl font-bold text-violet-400">19%</span>
                  <p className="text-xs text-zinc-400 mt-1">CTR Meta</p>
                </div>
                <div className="bg-zinc-800/60 rounded-xl p-4">
                  <span className="text-2xl font-bold text-violet-400">IA</span>
                  <p className="text-xs text-zinc-400 mt-1">Powered</p>
                </div>
              </div>
              <a href="#contact" className="mt-6 block text-center font-semibold bg-violet-600 hover:bg-violet-700 text-white p-3 rounded-full transition-colors">
                Me contacter
              </a>
            </div>
          </div>
        </div>

        {/* ===== À PROPOS ===== */}
        <div
          ref={aboutRef}
          className="mt-15 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-violet-500/40 shadow-[0_0_30px_rgba(168,85,247,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6"
          id="about"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-0 px-8" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <div className="basis-full md:basis-7/12 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-violet-500/30">
              <div className="flex-1 text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                  À propos
                </h2>

                <BlurText
                  text="Je suis Paul-Emile, freelance AI Creative Strategist basé en France. Je combine créativité et intelligence artificielle pour aider les entreprises à croître : sites web qui convertissent, vidéos UGC hyper-réalistes générées par IA, automatisations qui éliminent les tâches répétitives, et produits SaaS propulsés par l'IA. Mon objectif : transformer vos idées en résultats concrets et mesurables."
                  delay={80}
                  animateBy="words"
                  direction="top"
                  className="text-base md:text-lg leading-relaxed mb-10 text-gray-300"
                />

                <div className="flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-y-8 sm:gap-y-0 mb-4 w-full">
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      {isVisible && <CountUp from={0} to={4} duration={1.5} />}
                      <span className="text-violet-500"> piliers</span>
                    </h1>
                    <p className="text-zinc-400">d'expertise</p>
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      {isVisible && <CountUp from={0} to={19} duration={1.5} />}
                      <span className="text-violet-500">%</span>
                    </h1>
                    <p className="text-zinc-400">CTR Meta Ads</p>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-once="true">
                    <h1 className="text-3xl md:text-4xl mb-1">
                      €{isVisible && <CountUp from={0} to={0.08} duration={1.5} />}
                    </h1>
                    <p className="text-zinc-400">CPC moyen</p>
                  </div>
                </div>

                <ShinyText text="L'innovation IA au service de votre croissance." disabled={false} speed={3} className="text-sm md:text-base text-violet-400" />
              </div>
            </div>

            {/* Colonne droite : services */}
            <div className="basis-full md:basis-5/12 pl-0 md:pl-8">
              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: "🌐", title: "Sites Web", desc: "Landing pages, vitrines, e-commerce" },
                  { icon: "🎬", title: "UGC Vidéo IA", desc: "Sora, Kling, Seedance, Veo 3, ElevenLabs" },
                  { icon: "⚡", title: "Automatisations", desc: "Agents IA vocaux, n8n, workflows" },
                  { icon: "🚀", title: "SaaS & Micro-SaaS", desc: "Produits IA sur mesure" },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg" data-aos="fade-up" data-aos-delay={i * 150} data-aos-once="true">
                    <span className="text-3xl">{s.icon}</span>
                    <div>
                      <ShinyText text={s.title} disabled={false} speed={3} className="text-lg font-semibold block" />
                      <p className="text-sm text-zinc-400">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ===== PROJETS ===== */}
        <div className="proyek mt-32 py-10" id="project"></div>
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Projets</h1>
        <p className="text-base/loose text-center opacity-50 mb-8" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
          Une sélection de projets qui reflètent mon expertise en IA appliquée au business.
        </p>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-3 mb-10" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-5 py-2 rounded-full border font-medium text-sm transition-all duration-300 cursor-pointer ${
                activeFilter === f.key
                  ? "bg-violet-600 border-violet-500 text-white shadow-lg shadow-violet-500/30"
                  : "bg-zinc-800/60 border-zinc-700 text-zinc-300 hover:border-violet-500/50 hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="proyek-box" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
          <div style={{ height: "auto", position: "relative" }}>
            <ChromaGrid
              items={filteredProjects}
              onItemClick={handleProjectClick}
              radius={500}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </div>

        {/* ===== CONTACT ===== */}
        <div className="kontak mt-32 sm:p-10 p-0" id="contact">
          <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            Contact
          </h1>
          <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
            Discutons de votre projet — je réponds sous 24h
          </p>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Infos de contact */}
            <div className="flex-1 bg-zinc-800/60 backdrop-blur-md p-8 rounded-2xl border border-violet-500/20" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">
              <h3 className="text-xl font-bold text-white mb-6">Parlons de votre projet</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <a href={`mailto:${socialLinks.email}`} className="text-violet-400 hover:text-violet-300 transition-colors">{socialLinks.email}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">💼</span>
                  <div>
                    <p className="font-semibold text-white">LinkedIn</p>
                    <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 transition-colors">Voir mon profil</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-semibold text-white">Localisation</p>
                    <p className="text-zinc-400">France — Remote worldwide</p>
                  </div>
                </div>
              </div>

              {/* Stat en bas */}
              <div className="mt-8 p-4 rounded-xl bg-violet-500/10 border border-violet-500/20">
                <p className="text-sm text-violet-300 font-semibold">📈 Dernière campagne Meta Ads : 19% CTR à €0.08 CPC</p>
              </div>
            </div>

            {/* Formulaire */}
            <div className="flex-1">
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="bg-zinc-800/60 backdrop-blur-md p-10 w-full rounded-2xl border border-zinc-700"
                autoComplete="off"
                data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true"
              >
                <input type="hidden" name="access_key" value="VOTRE_CLE_WEB3FORMS" />
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Nom</label>
                    <input type="text" name="Name" placeholder="Votre nom..." className="bg-zinc-900 border border-zinc-600 p-3 rounded-xl focus:border-violet-500 focus:outline-none transition-colors text-white" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Email</label>
                    <input type="email" name="Email" placeholder="votre@email.com" className="bg-zinc-900 border border-zinc-600 p-3 rounded-xl focus:border-violet-500 focus:outline-none transition-colors text-white" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-semibold">Message</label>
                    <textarea name="message" id="message" cols="45" rows="5" placeholder="Décrivez votre projet..." className="bg-zinc-900 border border-zinc-600 p-3 rounded-xl focus:border-violet-500 focus:outline-none transition-colors text-white resize-none" required></textarea>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="font-semibold bg-violet-600 hover:bg-violet-700 p-4 px-6 rounded-full w-full cursor-pointer transition-colors text-white">
                      <ShinyText text="Envoyer le message" disabled={false} speed={3} className="custom-class" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <Footer />
      </main>

      <ProjectModal isOpen={!!selectedProject} onClose={handleCloseModal} project={selectedProject} />
    </>
  );
}

export default App;
