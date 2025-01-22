// components/ProjectList/ProjectCard.tsx
export const ProjectCard = ({ project, onClick }) => (
    <Card 
      className="cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onClick}
    >
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <GitBranch className="w-5 h-5" />
          {project.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-2">{project.description}</p>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {project.contributors} contributors
          </span>
        </div>
      </CardContent>
    </Card>
  );