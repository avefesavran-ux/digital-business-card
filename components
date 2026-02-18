
import React from 'react';
import { Project } from '../types';

interface ProjectItemProps {
  project: Project;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  return (
    <a 
      href={project.url.startsWith('http') ? project.url : `https://${project.url}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-8 border border-[#1a2a44]/5 bg-white/40 hover:bg-[#ffffff] hover:border-[#1a2a44]/15 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_15px_30px_rgba(26,42,68,0.03)] transition-all duration-500 ease-out"
    >
      <div className="flex flex-col items-center justify-center space-y-3">
        <span className="font-montserrat text-[11px] tracking-[0.3em] uppercase text-[#1a2a44]/50 group-hover:text-[#1a2a44] transition-colors duration-500">
          {project.name}
        </span>
        <div className="w-4 h-[1px] bg-[#1a2a44]/5 group-hover:bg-[#1a2a44]/20 group-hover:w-8 transition-all duration-700"></div>
      </div>
    </a>
  );
};

export default ProjectItem;
