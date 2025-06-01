import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
export default function Footer() {
  return (
    <footer>
      <div className="mx-4 my-6 rounded-lg bg-white p-4 shadow md:flex md:items-center md:justify-between md:p-6 xl:p-8">
        <div className="flex space-x-6 justify-center">
          <a href="#" className="text-slate-500 hover:text-gray-900">
            <Mail size={20} />
          </a>
          <a href="#" className="text-slate-500 hover:text-gray-900">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-slate-500 hover:text-gray-900">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-slate-500 hover:text-gray-900">
            <Instagram size={20} />
          </a>
        </div>
      </div>
      <p className="my-10 text-center text-sm text-gray-500">
        &copy; 2025-2030{" "}
        <a href="#" className="hover:underline" target="_blank">
          SangDQ
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
}
