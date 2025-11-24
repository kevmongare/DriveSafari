// components/FormHeader.tsx
import ProgressBar from './ProgressBar';
import StepIndicator from './StepIndicator';
import { useTheme } from '../hooks/useTheme';

interface FormHeaderProps {
  currentStep: number;
  totalSteps: number;
}

const FormHeader = ({ currentStep, totalSteps }: FormHeaderProps) => {
  const theme = useTheme();
  
  const stepTitles = [
    "Personal Information",
    "Contact Details", 
    "Qualifications & Skills",
    "Vehicle & Admin"
  ];

  const stepDescriptions = [
    "Please provide your basic personal details and identification information.",
    "Provide your contact details and emergency contact information.",
    "Provide details of your professional qualifications and language skills.",
    "Provide vehicle information and complete your administrative profile."
  ];

  const alerts = [
    "All information provided will be kept secure and confidential.",
    "We will use this information to contact you regarding bookings and important updates.",
    "All certifications will be verified before your profile is activated.",
    "Vehicle information is required only if you will be driving guests."
  ];

  return (
    <div className="border-b border-gray-200 bg-white p-6 sticky top-0 z-10">
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
      
      <div className="mt-6">
        <h2 className="text-2xl font-bold text-gray-900">
          {stepTitles[currentStep - 1]}
        </h2>
        <p className="text-gray-600 mt-2">
          {stepDescriptions[currentStep - 1]}
        </p>
      </div>

      <div 
        className="mt-4 p-4 rounded border-l-4"
        style={{
          backgroundColor: theme.primary50,
          borderLeftColor: theme.primary
        }}
      >
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <svg 
              className="h-5 w-5" 
              viewBox="0 0 20 20" 
              fill="currentColor"
              style={{ color: theme.primary }}
            >
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p 
              className="text-sm"
              style={{ color: theme.primaryDark }}
            >
              {alerts[currentStep - 1]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormHeader;