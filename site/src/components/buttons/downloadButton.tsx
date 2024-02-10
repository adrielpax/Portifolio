import React from "react";
import icons from "../../utils/icons/icons";

interface DownloadButtonProps {
  fileUrl: string;
  fileName: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ fileUrl, fileName }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  };

  return (
    <button
      className="bg-white hover:bg-blue-500 hover:text-white hover:border-white text-blue-gray-500 font-bold py-2 px-4 rounded
      flex w-auto gap-2 shadow-lg border border-blue-gray-500"
      onClick={handleDownload}
    >
    {icons.download}
      Download CV
    </button>
  );
};

export default DownloadButton;
