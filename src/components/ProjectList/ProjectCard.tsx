// components/ProjectCard/ProjectCard.tsx
import React from 'react';
import { GitBranch, Users } from 'lucide-react';

export const ProjectCard = ({ project, onClick }) => (
  <div 
    className="border rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow"
    onClick={onClick}
  >
    <div className="flex items-center gap-2 font-bold mb-2">
      <GitBranch className="w-5 h-5" />
      {project.name}
    </div>
    <p className="mb-2 text-gray-600">{project.description}</p>
    <div className="flex items-center gap-4 text-sm text-gray-600">
      <span className="flex items-center gap-1">
        <Users className="w-4 h-4" />
        {project.contributors} contributors
      </span>
    </div>
  </div>
);