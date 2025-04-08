import React, { ChangeEvent, DragEvent, useState } from 'react';
import { Button } from '../../components/button';
import { UserIcon } from 'lucide-react';



const ProfileImageUpload = ({image, setImage}: any) => {
  
  const [dragActive, setDragActive] = useState<boolean>(false);
  // Create a ref for the file input
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  // Handle drag events
  const handleDrag = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  // Handle drop event
  const handleDrop = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  // Handle file input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  // Process the file
  const handleFile = (file: File): void => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target && typeof e.target.result === 'string') {
          setImage({
            src: e.target.result,
            name: file.name,
            size: file.size,
            file: file // Store the file for later upload
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Calculate file size for display
  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

   // Handle button click to trigger file input
   const handleButtonClick = (): void => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full">

      {/* Hidden file input */}
      <input
        type="file"
        accept="image/*"
        className="hidden"
        ref={fileInputRef}
        onChange={handleChange}
      />
      {/* Current Profile Image Display */}
      {image ? (
        <div className="mb-6">
          <div className="relative mx-auto">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-100 shadow-lg mx-auto">
              <img
                src={image.src}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-sm font-medium text-gray-700">{image.name}</p>
            <p className="text-xs text-gray-500">{formatFileSize(image.size)}</p>
          </div>
        </div>
      ) : (
        <div 
          className={`border-2 border-dashed rounded-lg p-8 mb-6 text-center flex flex-col items-center justify-center ${
            dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
          }`}
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
        >
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-4">
            <UserIcon className="w-12 h-12 text-gray-400" />
          </div>
          <p className="text-lg mb-2">
            Drag and drop your profile photo, or{" "}
            <span 
              className="text-blue-500 cursor-pointer" 
              onClick={handleButtonClick}
            >
              browse
            </span>
          </p>
          <p className="text-sm text-gray-500">Supports JPG, PNG files (max 5MB)</p>
        </div>
      )}
      
       {/* Upload Button (always visible) */}
       <div className="flex justify-center">
        <Button 
          variant={image ? "outline" : "default"} 
          className={`w-full ${image ? "border-blue-700 text-blue-700 hover:text-blue-900 hover:border-blue-900": "bg-blue-700 hover:bg-blue-900 text-white"} `}
          onClick={handleButtonClick}
        >
          {image ? "Change image" : "Upload image"}
        </Button>
      </div>
    </div>
  );
};

export default ProfileImageUpload;