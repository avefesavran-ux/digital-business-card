
import React from 'react';
import { Project } from './types';
import ProjectItem from './components/ProjectItem';

const PROJECTS: Project[] = [
  { name: 'ozugursavran.com', url: 'ozugursavran.com' },
  { name: 'satirarasi.pro', url: 'satirarasi.pro' },
  { name: 'briefly.ai', url: 'briefly.ai' },
  { name: 'davapusulasi.com', url: 'davapusulasi.com' }
];

const FIXED_BIO = "Efe Savran, geleneksel hukuk formasyonunu modern analitik disiplinlerle birleştiren bir hukukçudur. Özuğur & Savran bünyesindeki avukatlık pratiğini, Satır Arası AI, Briefly, Dava Pusulası AI gibi girişimlerle LegalTech alanına taşıyarak dijital dönüşüm süreçlerinde aktif rol almaktadır. Sorunlara yaklaşımında sadece uyuşmazlık çözmeyi değil, teknolojinin gücüyle sürdürülebilir ve güvenilir sistemler inşa etmeyi hedefler. Klasik detaylara ve estetiğe duyduğu ilgi, analitik bakış açısını çok yönlü bir vizyonla harmanlamasını sağlar. Karmaşık süreçleri yalın ve nitelikli çözümlere dönüştürme yetisi, onun çalışma prensibinin temel taşını oluşturur.";

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#f5f5f5] p-4 md:p-12 overflow-x-hidden select-none">
      {/* Texture Layer */}
      <div className="paper-texture"></div>

      {/* Main Container - Desktop focused but mobile responsive */}
      <main className="relative z-10 w-full max-w-6xl bg-[#fdfdfd] shadow-[0_30px_80px_rgba(0,0,0,0.04)] border border-white/60 p-8 md:p-24 flex flex-col items-center text-center transition-all duration-1000 transform hover:scale-[1.002]">
        
        {/* Cities at the very top */}
        <div className="mb-12">
           <span className="font-montserrat text-[10px] md:text-[11px] tracking-[0.6em] uppercase text-[#1a2a44]/40">
              İstanbul &mdash; Ankara &mdash; Antalya
          </span>
        </div>

        <div className="w-16 h-[1px] bg-[#1a2a44]/10 mb-12"></div>

        {/* Name Header - Title closer to name */}
        <section className="mb-12">
          <h1 className="font-cinzel text-3xl md:text-5xl letterpress tracking-[0.25em] mb-1">
            HAYRİ EFE SAVRAN
          </h1>
          <h2 className="font-garamond italic text-lg md:text-2xl text-[#1a2a44]/60 tracking-[0.3em] font-light">
            Avukat
          </h2>
        </section>

        {/* Updated Bio Text */}
        <section className="w-full max-w-3xl mb-16 px-2 md:px-0">
          <p className="font-garamond text-base md:text-xl leading-relaxed text-[#1a2a44]/70 italic text-justify md:text-center hyphens-auto">
            {FIXED_BIO}
          </p>
        </section>

        {/* Projects Grid - Redesigned for desktop & mobile */}
        <section className="w-full mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROJECTS.map((project, idx) => (
              <ProjectItem key={idx} project={project} />
            ))}
          </div>
        </section>

        {/* Social Links side by side */}
        <div className="flex items-center space-x-12 mb-12">
          <a 
            href="https://www.linkedin.com/in/efesavran" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-montserrat text-[10px] tracking-[0.4em] uppercase text-[#1a2a44]/50 hover:text-[#1a2a44] transition-all border-b border-transparent hover:border-[#1a2a44]/20 pb-1"
          >
            LinkedIn
          </a>
          <a 
            href="https://x.com/efesavran" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-montserrat text-[10px] tracking-[0.4em] uppercase text-[#1a2a44]/50 hover:text-[#1a2a44] transition-all border-b border-transparent hover:border-[#1a2a44]/20 pb-1"
          >
            X Account
          </a>
        </div>

        {/* Decorative Line (Bottom) */}
        <div className="w-16 h-[1px] bg-[#1a2a44]/10 mb-10"></div>

        {/* Footer info - Address */}
        <footer className="flex flex-col items-center">
            <span className="font-montserrat text-[10px] tracking-[0.15em] text-[#1a2a44]/30 font-light">
                Sancak, 549. Sok. 32 Çankaya/ANKARA
            </span>
        </footer>
      </main>

      {/* Background Decorative Blurs */}
      <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-[#1a2a44]/[0.02] rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[60rem] h-[60rem] bg-[#1a2a44]/[0.02] rounded-full blur-[180px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
    </div>
  );
};

export default App;
