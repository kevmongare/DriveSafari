// components/ProgressBar.tsx
import { useTheme } from '../hooks/useTheme';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar = ({ currentStep, totalSteps }: ProgressBarProps) => {
  const theme = useTheme();
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
      <div 
        className="h-2 rounded-full transition-all duration-500 ease-in-out"
        style={{
          width: `${progress}%`,
          background: theme.gradientPrimary
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;