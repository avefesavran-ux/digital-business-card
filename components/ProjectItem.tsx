
import React from 'react';
import { Project } from '../types';

interface ProjectItemProps {
  project: Project;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  // Logic to split the long title for Özuğur & Savran to keep the required part on one line
  const renderTitle = () => {
    if (project.name.includes('Hukuk ve Danışmanlık')) {
      const parts = project.name.split('Hukuk ve Danışmanlık');
      return (
        <span className="font-garamond text-lg md:text-xl italic text-[#1a2a44]/80 group-hover:text-[#1a2a44] transition-all duration-500 block leading-tight">
          {parts[0]} <span className="whitespace-nowrap">Hukuk ve Danışmanlık</span>
        </span>
      );
    }
    return (
      <span className="font-garamond text-xl md:text-2xl italic text-[#1a2a44]/80 group-hover:text-[#1a2a44] transition-all duration-500 block leading-tight">
        {project.name}
      </span>
    );
  };

  return (
    <a 
      href={project.url.startsWith('http') ? project.url : `https://${project.url}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block p-6 md:p-8 bg-[#fdfdfd] border border-[#1a2a44]/5 hover:border-[#1a2a44]/20 hover:-translate-y-1 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden min-h-[140px] flex flex-col items-center justify-center"
    >
      {/* Turkish Seljuk Star Motif - Extremely Subtle Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-700 pointer-events-none p-4">
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#1a2a44]" fill="none" stroke="currentColor" strokeWidth="0.5">
           <path d="M50 0 L61 39 L100 50 L61 61 L50 100 L39 61 L0 50 L39 39 Z" />
           <path d="M15 15 L85 85 M15 85 L85 15" strokeWidth="0.2" />
           <circle cx="50" cy="50" r="10" strokeWidth="0.2" />
           <path d="M50 20 L55 45 L80 50 L55 55 L50 80 L45 55 L20 50 L45 45 Z" strokeWidth="0.3" transform="rotate(45 50 50)"/>
        </svg>
      </div>

      {/* Soft Inner Highlight */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        {renderTitle()}
        
        {project.subtitle && (
          <span className="font-garamond text-[13px] md:text-sm italic text-[#1a2a44]/50 group-hover:text-[#1a2a44]/70 transition-all duration-500 mt-2 block tracking-wide leading-snug">
            {project.subtitle}
          </span>
        )}

        <div className="w-3 h-[0.5px] bg-[#1a2a44]/10 group-hover:bg-[#1a2a44]/30 group-hover:w-10 transition-all duration-700 mt-3"></div>
      </div>

      {/* Subtle Bottom Glow on Hover */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#1a2a44]/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-center"></div>
    </a>
  );
};

export default ProjectItem;
