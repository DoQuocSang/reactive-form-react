import type { IVariant } from "../../models/variant.interface";
import VariantForm from "../forms/VariantForm.component";
import { useVariant } from "../../hooks/useVariant";
import { useProductStore } from "../../store/product.store";
import VariantRow from "./VariantRow.component";

interface IVariantTableProps {
  productId: string;
}

export default function VariantTable({ productId }: IVariantTableProps) {
  const { getVariantsByProductId } = useVariant();
  const variants = getVariantsByProductId(productId);

  const toogleVariantForm = useProductStore((state) => state.toogleVariantForm);

  function deleteAllVariants() {}
  return (
    <>
      <div className="">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium">Variant</h3>
          <div className="flex items-center gap-2">
            <button
              onClick={() => toogleVariantForm()}
              type="button"
              className="font-medium bg-teal-500 text-white text-xs px-3.5 py-2 rounded-md"
            >
              Add
            </button>
            <button
              onClick={deleteAllVariants}
              type="button"
              className="font-medium border border-slate-300 text-slate-700 hover:bg-red-500 hover:text-white text-xs px-3.5 py-2 rounded-md"
            >
              Clear
            </button>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden border-x border-slate-200">
          {variants.length > 0 ? (
            <table className="w-full text-sm text-left text-slate-500 table-auto min-w-max">
              <thead className="bg-slate-50 border-y border-slate-200">
                <tr>
                  <th className="p-4 font-medium">Color</th>
                  <th className="p-4 font-medium">Size</th>
                  <th className="p-4 font-medium">Quantity</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {getVariantsByProductId(productId).map((variant: IVariant) => (
                  <VariantRow key={variant.id} item={variant} />
                ))}
              </tbody>
            </table>
          ) : (
            <div className="w-full text-center border-b border-slate-200 py-2 text-slate-500">
              This product has no variant
            </div>
          )}
        </div>
        <VariantForm />
      </div>
    </>
  );
}
