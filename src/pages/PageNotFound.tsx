import { Pointer } from "lucide-react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="w-full h-screen px-6 flex flex-col gap-4 justify-center items-center">
      {/* <div className="text-red-500 flex flex-col gap-2 items-center bg-white rounded-lg p-10 shadow-md">
        <CircleXIcon size={50} />
        <h1 className="text-4xl font-medium">Page not found</h1>
      </div> */}
      <Link to={"/product/P001"} className="flex items-center gap-2 font-medium text-slate-700 hover:bg-teal-500 hover:text-white transition duration-150 ease-in-out rounded-lg px-6 py-4 bg-white shadow-md">
        <Pointer size={20} />
        Click here to view Product Demo
      </Link>
      <p className="text-sm text-slate-700">😆 I haven't completed all the features yet. Hope you don't mind! 😆</p>
    </div>
  );
}
