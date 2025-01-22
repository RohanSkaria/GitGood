// components/ContributionGuide/ContributionGuide.tsx
export const ContributionGuide = ({ project }) => (
    <div className="border rounded-lg p-6 bg-white">
      <h2 className="text-xl font-bold mb-4">Contributing to {project.name}</h2>
      {Object.entries(contributionSteps).map(([stage, steps]) => (
        <div key={stage} className="mb-6">
          <h3 className="text-lg font-semibold mb-3 capitalize">{stage}</h3>
          {steps.map((step, index) => (
            <div key={index} className="mb-3 p-3 bg-gray-50 rounded-lg">
              <p className="font-medium mb-1">{step.action}</p>
              {step.command && (
                <code className="block text-sm mb-1 bg-gray-100 p-2 rounded">
                  {step.command}
                </code>
              )}
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );