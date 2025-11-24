// components/steps/PersonalStep.tsx
import FileUpload from '../FileUpload';
import { useTheme } from '../../hooks/useTheme';

interface PersonalData {
  fullName: string;
  nationalId: string;
  dateOfBirth: string;
  gender: string;
  photo: File | null;
}

interface PersonalStepProps {
  data: PersonalData;
  updateData: (field: keyof PersonalData, value: any) => void;
}

const PersonalStep = ({ data, updateData }: PersonalStepProps) => {
  const theme = useTheme();

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 
          className="text-xl font-semibold text-gray-900 mb-6 pb-4 border-b"
          style={{ borderBottomColor: theme.primary100 }}
        >
          Personal Details
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={data.fullName}
              onChange={(e) => updateData('fullName', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 transition-all theme-focus"
              placeholder="Enter your full name"
              required
              style={{
                '--tw-ring-color': 'rgba(211, 155, 83, 0.1)'
              } as React.CSSProperties}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              National ID Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={data.nationalId}
              onChange={(e) => updateData('nationalId', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 transition-all theme-focus"
              placeholder="Enter your national ID"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date of Birth <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              value={data.dateOfBirth}
              onChange={(e) => updateData('dateOfBirth', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 transition-all theme-focus"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Gender <span className="text-red-500">*</span>
            </label>
            <select
              value={data.gender}
              onChange={(e) => updateData('gender', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 transition-all theme-focus"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 
          className="text-xl font-semibold text-gray-900 mb-6 pb-4 border-b"
          style={{ borderBottomColor: theme.primary100 }}
        >
          Photo Upload
        </h3>
        
        <p className="text-gray-600 mb-4">
          Please upload a recent passport-style photograph.
        </p>

        <FileUpload
          onFileSelect={(file) => updateData('photo', file)}
          acceptedTypes="image/*"
          maxSize={5}
          label="Upload Passport Photo"
          hint="JPG or PNG, max 5MB"
        />
      </div>
    </div>
  );
};

export default PersonalStep;