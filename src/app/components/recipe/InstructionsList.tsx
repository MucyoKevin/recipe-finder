import React from 'react';

interface Step {
  number: number;
  step: string;
}

interface Instruction {
  name: string;
  steps: Step[];
}

interface InstructionsListProps {
  instructions: Instruction[];
}

const InstructionsList: React.FC<InstructionsListProps> = ({ instructions }) => {
  if (!instructions || instructions.length === 0 || !instructions[0].steps.length) {
    return <div className="text-gray-500">No instructions found.</div>;
  }

  // Spoonacular usually has one instruction set, but we support multiple just in case
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold text-secondary mb-4">Instructions</h2>
      <ol className="list-decimal list-inside space-y-2">
        {instructions[0].steps.map((step) => (
          <li key={step.number} className="text-lg text-gray-800">
            {step.step}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default InstructionsList; 