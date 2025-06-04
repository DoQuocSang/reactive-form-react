import { XIcon } from "lucide-react";
import { useProductStore } from "../../store/product.store";
import hljs from "highlight.js/lib/core";
import json from "highlight.js/lib/languages/json";
import "highlight.js/styles/github-dark.css"; // hoặc style bạn thích
import { useEffect, useRef } from "react";

hljs.registerLanguage("json", json);

export default function FormDataPopUp() {
  const formData = useProductStore((state) => state.formData);
  const togglePopup = useProductStore((state) => state.togglePopup);

  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [formData]);

  return (
    <div className="fixed z-50 top-0 left-0 right-0 h-screen w-full flex justify-center items-center">
      <div
        onClick={() => togglePopup()}
        className="absolute z-0 bg-black/75 h-screen w-full"
      ></div>
      <div className="relative max-h-[80vh] min-w-1/2 overflow-y-scroll gap-2 bg-slate-900 rounded-lg shadow-md">
        <div className="flex flex-col px-6 pb-6 justify-center-center">
          <div className="sticky top-0 py-6 bg-slate-900 flex justify-between items-center text-slate-500">
            <p className="text-xl">Form Data Result</p>
            <button>
              <XIcon onClick={() => togglePopup()} size={30} />
            </button>
          </div>
          <pre className="rounded-lg overflow-hidden">
            <code ref={codeRef} className="json text-xs">
              {JSON.stringify(formData, null, 2)}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
