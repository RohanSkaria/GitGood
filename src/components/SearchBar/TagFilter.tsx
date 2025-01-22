// components/SearchBar/TagFilter.tsx
export const TagFilter = ({ selectedTags, onTagSelect }) => (
    <div className="flex flex-wrap gap-2">
      {Object.entries(tagCategories).map(([category, tags]) => (
        <div key={category} className="flex gap-2">
          {Object.keys(tags).map(tag => (
            <button
              key={tag}
              onClick={() => onTagSelect(tag)}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedTags.includes(tag)
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      ))}
    </div>
  );