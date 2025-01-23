import { files } from "../constant";
import FileCard from "./FileCard";

const FileList = () => {
  const handleFileClick = (fileName: string) => {
    alert(`File clicked: ${fileName}`);
    // Logic to open or download the file
  };

  return (
    <div className="p-4 mt-5">
      <h1 className="text-xl font-bold mb-4">Attachments</h1>
      <div className="flex gap-4 ">
        {files.map((file, index) => (
          <FileCard
            key={index}
            fileName={file.fileName}
            fileType={file.fileType}
            filePreviewUrl={file.filePreviewUrl}
            onClick={() => handleFileClick(file.fileName)}
          />
        ))}
      </div>
    </div>
  );
};

export default FileList;
