import { XIcon } from "lucide-react";
import { useProductStore } from "../../store/product.store";

export default function FormDataPopUp() {
  const formData = useProductStore((state) => state.formData);
  const togglePopup = useProductStore((state) => state.togglePopup);
  return (
    <div className="fixed z-50 top-0 left-0 right-0 h-screen w-full flex justify-center items-center bg-black/75">
      <div className="max-h-[80vh] overflow-y-scroll gap-2 bg-slate-900 rounded-lg shadow-md">
        <div className="flex flex-col px-6 pb-6 justify-center-center">
          <div className="sticky top-0 py-6 bg-slate-900 flex justify-between items-center text-slate-500">
            <p className="text-xl">Form Data Result</p>
            <button>
              <XIcon onClick={() => togglePopup()} size={30} />
            </button>
          </div>
          <pre className="text-white text-xs">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
