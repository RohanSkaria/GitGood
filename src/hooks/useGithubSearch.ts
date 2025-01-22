// hooks/useGithubSearch.ts
import { useState, useEffect } from 'react';
import { Project } from '../types';
import { buildSearchQuery } from '../utils/searchQueryBuilder';

export const useGithubSearch = (selectedTags: string[]) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const searchProjects = async () => {
      setLoading(true);
      try {
        const query = buildSearchQuery(selectedTags);
        // TODO: Implement GitHub API call
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    searchProjects();
  }, [selectedTags]);

  return { projects, loading, error };
};