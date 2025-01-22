// components/ProjectList/ProjectList.tsx
import React from 'react';
import { ProjectCard } from './ProjectCard';
import { Project } from '../../types';

interface ProjectListProps {
  projects: Project[];
  onProjectSelect: (project: Project) => void;
  loading?: boolean;
  error?: string | null;
}

export const ProjectList: React.FC<ProjectListProps> = ({
  projects,
  onProjectSelect,
  loading,
  error
}) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-500">
        Error loading projects: {error}
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No projects found matching your criteria
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {projects.map(project => (
        <ProjectCard
          key={project.id}
          project={project}
          onClick={() => onProjectSelect(project)}
        />
      ))}
    </div>
  );
};