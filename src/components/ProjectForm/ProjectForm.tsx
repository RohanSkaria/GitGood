// components/ProjectForm/ProjectForm.tsx
export const ProjectForm = ({ onSubmit }) => (
    <div className="border rounded-lg p-6 mb-6 bg-white">
      <h2 className="text-xl font-bold mb-4">Post Your Project</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Repository URL"
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Project description..."
          className="w-full p-2 border rounded h-32"
        />
        <button 
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Post Project
        </button>
      </form>
    </div>
  );
  