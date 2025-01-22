// utils/searchQueryBuilder.ts
import { tagCategories } from '../constants/tags';

export const buildSearchQuery = (selectedTags: string[]) => {
  const labels = selectedTags.flatMap(tag => 
    tagCategories.difficulty[tag] || tagCategories.languages[tag] || []
  );
  return `is:issue is:open ${labels.map(label => `label:"${label}"`).join(' ')}`;
};