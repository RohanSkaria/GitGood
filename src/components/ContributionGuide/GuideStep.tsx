// components/ContributionGuide/GuideStep.tsx
import { ContributionStep } from '../../types';

interface GuideStepProps {
  step: ContributionStep;
}

export const GuideStep: React.FC<GuideStepProps> = ({ step }) => {
  return (
    <div className="mb-3 p-3 bg-gray-50 rounded-lg">
      <p className="font-medium mb-1">{step.action}</p>
      {step.command && (
        <code className="block text-sm mb-1 bg-gray-100 p-2 rounded">
          {step.command}
        </code>
      )}
      <p className="text-sm text-gray-600">{step.description}</p>
    </div>
  );
};