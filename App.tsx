
import React, { useEffect, useState } from 'react';
import { Project } from './types';
import ProjectItem from './components/ProjectItem';
import { fetchEfeSavranInfo } from './services/geminiService';

const PROJECTS: Project[] = [
  { 
    name: 'Özuğur & Savran Hukuk ve Danışmanlık', 
    url: 'ozugursavran.com' 
  },
  { 
    name: 'Satır Arası', 
    url: 'satirarasi.pro', 
    subtitle: 'Sözleşme Analiz Uzmanı' 
  },
  { 
    name: 'Briefly AI', 
    url: 'briefly.ai',
    subtitle: 'Less Explaining. More Lawyering.'
  },
  { 
    name: 'Dava Pusulası', 
    url: 'davapusulasi.com', 
    subtitle: 'Yapay Zeka Hukuk Asistanı' 
  }
];

const INITIAL_BIO = "Hayri Efe Savran, geleneksel hukuk formasyonunu modern analitik disiplinlerle birleştiren, dijital dönüşüm ve LegalTech alanında yenilikçi projeler yürüten bir avukattır. Özuğur & Savran bünyesindeki pratiğini yapay zeka ve teknoloji odaklı girişimlerle harmanlayarak hukuk dünyasında sürdürülebilir çözümler inşa etmeyi amaçlar.";

const TurkishMotif = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="0.3">
    <path d="M50,10 C60,30 90,40 50,90 C10,40 40,30 50,10 Z" />
    <path d="M50,25 C55,35 70,40 50,65 C30,40 45,35 50,25 Z" opacity="0.5" />
    <circle cx="50" cy="50" r="2" fill="currentColor" opacity="0.3" />
  </svg>
);

const App: React.FC = () => {
  const [bio, setBio] = useState<string>(INITIAL_BIO);
  const [loading, setLoading] = useState(true);
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Sancak,+549.+Sok.+32+Çankaya/ANKARA";

  useEffect(() => {
    const loadBio = async () => {
      try {
        const dynamicBio = await fetchEfeSavranInfo();
        if (dynamicBio) setBio(dynamicBio);
      } catch (err) {
        console.error("Dynamic fetch failed", err);
      } finally {
        setLoading(false);
      }
    };
    loadBio();
  }, []);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-start md:justify-center bg-[#f2f2f2] p-4 sm:p-8 md:p-12 overflow-x-hidden selection:bg-[#1a2a44]/10">
      
      {/* Background Textures - Managed via React for stacking control */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}></div>
      <div className="fixed inset-0 pointer-events-none opacity-[0.08] z-0" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/felt-paper.png")' }}></div>

      {/* Decorative Turkish Motifs - Background Watermarks */}
      <TurkishMotif className="absolute top-10 left-10 w-64 h-64 text-[#1a2a44] opacity-[0.02] -rotate-12 pointer-events-none z-0" />
      <TurkishMotif className="absolute bottom-10 right-10 w-80 h-80 text-[#1a2a44] opacity-[0.015] rotate-12 pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#1a2a44]/[0.02] rounded-full pointer-events-none z-0"></div>

      {/* Main Container - Textured Paper Look */}
      <main className="relative z-10 w-full max-w-[1400px] bg-[#fcfcfc] shadow-[0_30px_80px_rgba(0,0,0,0.02),inset_0_0_100px_rgba(255,255,255,0.5)] border border-white/80 p-8 sm:p-12 md:p-20 flex flex-col items-center text-center my-4 md:my-0">
        
        {/* Top Motif Accent */}
        <TurkishMotif className="w-12 h-12 text-[#1a2a44] opacity-[0.05] mb-8" />

        {/* Locations at the top */}
        <div className="mb-10 md:mb-14">
           <span className="font-montserrat text-[11px] md:text-[13px] tracking-[0.7em] uppercase text-[#1a2a44]/40 font-semibold">
              İstanbul &mdash; Ankara &mdash; Antalya
          </span>
        </div>

        <div className="w-20 h-[0.5px] bg-[#1a2a44]/10 mb-10 md:mb-14"></div>

        {/* Name Header */}
        <section className="mb-10 md:mb-14 relative">
          <h1 className="font-cinzel text-3xl sm:text-4xl md:text-6xl letterpress tracking-[0.2em] mb-2 font-medium">
            HAYRİ EFE SAVRAN
          </h1>
          <h2 className="font-garamond italic text-lg sm:text-xl md:text-3xl text-[#1a2a44] tracking-[0.35em] font-light">
            Avukat
          </h2>
        </section>

        {/* Bio Text */}
        <section className="w-full mb-16 md:mb-20 px-0 max-w-4xl min-h-[140px] flex items-center justify-center">
          <p className={`font-garamond text-lg sm:text-xl md:text-2xl leading-relaxed text-[#1a2a44] italic text-justify md:text-center hyphens-auto w-full transition-opacity duration-1000 ${loading ? 'opacity-30' : 'opacity-90'}`}>
            {bio}
          </p>
        </section>

        {/* Projects Grid - Narrowed container */}
        <section className="w-full mb-16 md:mb-20 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {PROJECTS.map((project, idx) => (
              <ProjectItem key={idx} project={project} />
            ))}
          </div>
        </section>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16 md:gap-24 mb-12 md:mb-16">
          <a 
            href="https://www.linkedin.com/in/efesavran" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-garamond text-xl md:text-2xl italic text-[#1a2a44]/80 hover:text-[#1a2a44] transition-all border-b border-[#1a2a44]/10 pb-1"
          >
            LinkedIn
          </a>
          <a 
            href="https://x.com/avefesavran" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-garamond text-xl md:text-2xl italic text-[#1a2a44]/80 hover:text-[#1a2a44] transition-all border-b border-[#1a2a44]/10 pb-1"
          >
            X Hesabı
          </a>
        </div>

        {/* Decorative Divider with Motif */}
        <div className="flex items-center justify-center mb-8 md:mb-10">
          <TurkishMotif className="w-6 h-6 text-[#1a2a44] opacity-[0.08]" />
        </div>

        {/* Footer */}
        <footer className="flex flex-col items-center">
            <a 
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center hover:opacity-100 transition-all duration-300"
            >
              <span className="font-garamond text-lg sm:text-xl md:text-2xl italic text-[#1a2a44]/80 text-center px-4">
                  Sancak, 549. Sok. 32 Çankaya/ANKARA
              </span>
              <span className="font-montserrat text-[9px] tracking-[0.3em] uppercase text-[#1a2a44]/20 group-hover:text-[#1a2a44]/40 mt-2 transition-colors">
                Haritada Görüntüle
              </span>
            </a>
        </footer>
      </main>

      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-[40rem] md:w-[60rem] h-[40rem] md:h-[60rem] bg-[#1a2a44]/[0.005] rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-[50rem] md:w-[70rem] h-[50rem] md:h-[70rem] bg-[#1a2a44]/[0.005] rounded-full blur-[140px] pointer-events-none z-0"></div>
    </div>
  );
};

export default App;
