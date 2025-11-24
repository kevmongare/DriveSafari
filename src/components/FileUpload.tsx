// components/FileUpload.tsx
import { useState, useRef } from 'react';
import { FaCamera, FaTimes } from 'react-icons/fa';
import { useTheme } from '../hooks/useTheme';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  acceptedTypes: string;
  maxSize: number;
  label: string;
  hint: string;
}

const FileUpload = ({ onFileSelect, acceptedTypes, maxSize, label, hint }: FileUploadProps) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const theme = useTheme();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > maxSize * 1024 * 1024) {
        alert(`File size must be less than ${maxSize}MB`);
        return;
      }
      
      setFileName(file.name);
      onFileSelect(file);
      
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => setPreviewUrl(e.target?.result as string);
        reader.readAsDataURL(file);
      }
    }
  };

  const handleRemoveFile = () => {
    setPreviewUrl(null);
    setFileName(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div>
      <div
        onClick={() => fileInputRef.current?.click()}
        className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer transition-all duration-300 theme-focus"
        style={{
          borderColor: previewUrl ? theme.primary : undefined,
          backgroundColor: previewUrl ? theme.primary50 : undefined
        }}
      >
        <div 
          className="text-3xl mb-4"
          style={{ color: theme.primary }}
        >
          <FaCamera />
        </div>
        <div className="font-semibold text-gray-700 mb-2">{label}</div>
        <div className="text-sm text-gray-500">{hint}</div>
        <input
          ref={fileInputRef}
          type="file"
          accept={acceptedTypes}
          onChange={handleFileSelect}
          className="hidden"
        />
      </div>

      {previewUrl && (
        <div 
          className="mt-4 flex items-center justify-between rounded-lg p-4"
          style={{ backgroundColor: theme.primary50 }}
        >
          <div className="flex items-center">
            <img
              src={previewUrl}
              alt="Preview"
              className="w-16 h-16 rounded-lg object-cover mr-4"
            />
            <span className="text-sm font-medium text-gray-700">{fileName}</span>
          </div>
          <button
            onClick={handleRemoveFile}
            className="text-red-500 hover:text-red-700 transition-colors"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default FileUpload;