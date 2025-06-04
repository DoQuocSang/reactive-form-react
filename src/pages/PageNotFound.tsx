import { CircleXIcon } from "lucide-react";

export default function PageNotFound() {
  return (
    <div className="w-full h-screen px-6 flex flex-col justify-center items-center">
      <div className="text-red-500 flex flex-col gap-2 items-center bg-white rounded-lg p-10 shadow-md">
        <CircleXIcon size={50} />
        <h1 className="text-4xl font-medium">Page not found</h1>
      </div>
    </div>
  );
}
