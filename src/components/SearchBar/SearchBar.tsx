// components/SearchBar/SearchBar.tsx
export const SearchBar = ({ onSearch, selectedTags, onTagSelect }) => (
    <div className="space-y-4 mb-6">
      <div className="relative">
        <input
          type="text"
          placeholder="Search projects..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg"
          onChange={(e) => onSearch(e.target.value)}
        />
        <Search className="absolute left-3 top-3 text-gray-400" />
      </div>
      <TagFilter selectedTags={selectedTags} onTagSelect={onTagSelect} />
    </div>
  );