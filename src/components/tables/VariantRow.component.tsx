import { Pencil, Trash } from "lucide-react";
import type { IVariant } from "../../models/variant.interface";

interface IVariantRowProps {
  item: IVariant;
}

export default function VariantRow({ item }: IVariantRowProps) {
  function openVariantForm(id: string) {}

  function deleteVariant(id: string) {}

  return (
    <tr>
      <td className={"p-4 text-" + item.color}>{item.color}</td>
      <td className="p-4">{item.size}</td>
      <td className="p-4">{item.quantity}</td>
      <td className="p-4">
        <div className="flex items-center justify-end gap-2">
          <button type="button" onClick={() => openVariantForm(item.id)}>
            <Pencil
              size={20}
              className="my-icon text-slate-500 hover:text-teal-500"
            ></Pencil>
          </button>
          <button type="button" onClick={() => deleteVariant(item.id)}>
            <Trash
              size={20}
              className="my-icon text-slate-500 hover:text-red-500"
            ></Trash>
          </button>
        </div>
      </td>
    </tr>
  );
}
