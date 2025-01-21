import { FileCardProps } from "../type";

const FileCard = ({
  fileName,
  fileType,
  filePreviewUrl,
  onClick,
}: FileCardProps) => {
  return (
    <div
      className="flex flex-col items-center bg-blue-50 rounded-lg shadow-md p-4 w-48 hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
      {/* File Preview */}
      {fileType === "image" ? (
        <img
          src={filePreviewUrl}
          alt={fileName}
          className="w-full h-24 object-cover rounded-md mb-2"
        />
      ) : (
        <div className="flex items-center justify-center w-full h-24 bg-gray-200 rounded-md mb-2">
          <span className="text-gray-500 text-lg">PDF</span>
        </div>
      )}
      {/* File Name */}
      <p className="text-sm font-semibold text-gray-800 truncate">{fileName}</p>
    </div>
  );
};

export default FileCard;
