import { Trash } from "lucide-react";
import type { IUploadFile } from "../../models/upload-file.interface";
import { covertToMB, formatFileName } from "../../helper/file.helper";

interface UploadFilePreviewProps {
  file: IUploadFile;
}

export default function UploadFilePreview({ file }: UploadFilePreviewProps) {
  function handleDeleteImage(id: string) {
    console.log(id)
  }
  return (
    <div
      className="relative z-0 w-full pb-[100%] overflow-hidden rounded-md shadow-md"
    >
      <button
        onClick={() => handleDeleteImage(file.id)}
        type="button"
        className="absolute z-[3] top-0 right-0 p-1.5 rounded-bl-md bg-white/75 hover:bg-opacity-100"
      >
        <Trash size={20} className="text-red-500" />
      </button>
      <img
        src={file.url}
        alt="File upload"
        className="absolute z-0 w-full h-full object-cover object-center"
      />
      <div className="absolute z-[3] flex flex-col justify-center items-center bottom-0 left-0 text-xs bg-white/75 text-slate-700 w-full px-6 py-2 leading-none">
        <p className="text-sm font-medium">{formatFileName(file.name)}</p>
        <p className="text-xs font-medium">{covertToMB(file.size)} MB</p>
      </div>
    </div>
  );
}
