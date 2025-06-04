import { ChevronDown, XIcon } from "lucide-react";
import {
  preventInvalidValueForNumberInput,
} from "../../helper/numberInput.helper";
import type { IRange } from "../../models/range.interface";
import { useProductStore } from "../../store/product.store";

export default function VariantForm() {
  const currentVariantId = "";

  const quantityRange: IRange = { min: 0, max: 1000 };

  const isShowVariantForm = useProductStore((state) => state.isShowVariantForm);
  const toggleVariantForm = useProductStore((state) => state.toggleVariantForm);

  return (
    <>
      {isShowVariantForm && (
        <div className="fixed inset-0 z-[99]">
          <div className="relative w-full min-h-screen flex justify-center items-center">
            <div
              onClick={() => toggleVariantForm()}
              className="absolute z-10 top-0 left-0 bg-black opacity-50 w-full h-full"
            ></div>

            <form className="relative z-50 space-y-4 bg-white shadow-lg rounded-lg max-w-lg w-full p-6">
              <div className="flex justify-between items-center">
                <h3 className="text-slate-700 py-1 max-w-fit font-medium text-xl">
                  Variant detail
                </h3>
                <button type="button" onClick={() => toggleVariantForm()}>
                  <XIcon size={20} className="my-icon text-slate-500" />
                </button>
              </div>

              {/* --- Color --- */}
              <div className="flex flex-col gap-2">
                <label className="leading-loose text-slate-700 font-medium">
                  Color
                </label>

                <div className="flex items-center gap-4">
                  <input
                    type="color"
                    className="w-12 h-8 p-0 border border-gray-300 rounded-md shadow-sm cursor-pointer appearance-none transition duration-150 ease-in-out hover:scale-105 focus:outline-none "
                  />
                  <p className="text-slate-700">
                    Current color:
                    <span className="mx-2 text xs px-2 py-1 bg-slate-200 rounded-md">
                      #0000
                    </span>
                  </p>
                </div>
              </div>

              {/* --- Size --- */}
              <div className="flex flex-col gap-2">
                <label htmlFor="size" className="font-semibold">
                  Size
                </label>
                <div className="relative w-full">
                  <select
                    name="size"
                    id="size"
                    className="px-4 py-2 w-full appearance-none text-slate-700 focus:outline-none rounded-lg border border-gray-300 focus:border-2 focus:border-teal-500 focus:rounded-md transition duration-100 ease-in-out"
                  >
                    <option value="">Choose a size</option>
                    <option value="i">20</option>
                  </select>

                  <ChevronDown
                    size={20}
                    className="text-slate-500 absolute top-1/2 right-2 transform -translate-y-1/2 pointer-events-none"
                  />
                </div>
              </div>

              {/* --- Quantity --- */}
              <div className="flex flex-col gap-2">
                <label className="leading-loose text-slate-700 font-medium">
                  Quantity
                </label>
                <input
                  type="number"
                  min={quantityRange.min}
                  max={quantityRange.max}
                  step={10}
                  onKeyDown={preventInvalidValueForNumberInput}
                  className="pb-2 focus:outline-none border-b focus:border-b-2 border-gray-300 focus:border-teal-500 transition duration-100 ease-in-out"
                  placeholder="Type name"
                />
              </div>

              <div className="pt-6 flex justify-end items-center gap-4">
                <button
                  type="button"
                  onClick={() => toggleVariantForm()}
                  className="flex-1/2 text-md font-medium border border-slate-300 text-slate-700 hover:bg-slate-400 hover:text-white px-3.5 py-2 rounded-md"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="flex-1/2 text-md font-medium bg-teal-500 text-white px-3.5 py-2 rounded-md"
                >
                  {currentVariantId ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
