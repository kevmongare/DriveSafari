// components/NavigationButtons.tsx
import { FaArrowLeft, FaArrowRight, FaCheck } from 'react-icons/fa';
import { useTheme } from '../hooks/useTheme';

interface NavigationButtonsProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrev: () => void;
  onSubmit: () => void;
}

const NavigationButtons = ({
  currentStep,
  totalSteps,
  onNext,
  onPrev,
  onSubmit
}: NavigationButtonsProps) => {
  const theme = useTheme();

  return (
    <div className="border-t border-gray-200 bg-white p-6 sticky bottom-0">
      <div className="flex justify-between">
        <button
          onClick={onPrev}
          disabled={currentStep === 1}
          className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all ${
            currentStep === 1
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-gray-600 text-white hover:bg-gray-700'
          }`}
        >
          <FaArrowLeft className="mr-2" />
          Previous
        </button>

        {currentStep < totalSteps ? (
          <button
            onClick={onNext}
            className="flex items-center px-6 py-3 text-white rounded-lg font-semibold transition-all theme-hover"
            style={{ background: theme.gradientPrimary }}
          >
            Next
            <FaArrowRight className="ml-2" />
          </button>
        ) : (
          <button
            onClick={onSubmit}
            className="flex items-center px-6 py-3 text-white rounded-lg font-semibold transition-all theme-hover"
            style={{ background: theme.gradientPrimary }}
          >
            <FaCheck className="mr-2" />
            Submit Registration
          </button>
        )}
      </div>
    </div>
  );
};

export default NavigationButtons;