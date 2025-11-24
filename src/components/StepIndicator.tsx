// components/StepIndicator.tsx
import { FaCheck } from 'react-icons/fa';
import { useTheme } from '../hooks/useTheme';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator = ({ currentStep, totalSteps }: StepIndicatorProps) => {
  const theme = useTheme();
  const steps = [
    { number: 1, title: "Personal" },
    { number: 2, title: "Contact" },
    { number: 3, title: "Qualifications" },
    { number: 4, title: "Vehicle & Admin" }
  ];

  return (
    <div className="flex justify-between relative mb-6">
      <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-300 -z-10"></div>
      
      {steps.map((step, index) => {
        const isCompleted = step.number < currentStep;
        const isActive = step.number === currentStep;
        
        return (
          <div key={step.number} className="flex flex-col items-center relative z-10">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                isCompleted
                  ? 'text-white'
                  : isActive
                  ? 'text-white shadow-lg'
                  : 'bg-gray-300 text-gray-600'
              }`}
              style={{
                background: isCompleted 
                  ? theme.primary 
                  : isActive 
                  ? theme.gradientPrimary
                  : undefined,
                boxShadow: isActive ? theme.shadowPrimary : undefined
              }}
            >
              {isCompleted ? <FaCheck className="w-3 h-3" /> : step.number}
            </div>
            <span
              className={`text-xs font-medium mt-2 ${
                isActive ? 'theme-text-primary' : 'text-gray-500'
              }`}
            >
              {step.title}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default StepIndicator;