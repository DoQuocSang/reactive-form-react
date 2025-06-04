// import { useState } from "react";
// import { useFieldArray, type Control } from "react-hook-form";
// import { v4 as uuidv4 } from "uuid";

// interface CustomArrayInputProps<T> {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   control: Control<any>;
//   name: string;
//   placeholder?: string;
//   fieldLabel?: string;
//   itemKey: keyof T;
// }

// export function CustomArrayInput<T>({
//   control,
//   name,
//   placeholder = "Nhập và nhấn Enter",
//   itemKey,
// }: CustomArrayInputProps<T>) {
//   const { fields, append, remove } = useFieldArray({ control, name });
//   const [inputValue, setInputValue] = useState("");

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       const value = inputValue.trim();
//       if (value) {
//         append({
//           id: uuidv4(),
//           [itemKey]: value,
//         } as T);
//         setInputValue("");
//       }
//     }
//   };

//   return (
//     <div>
//         {T is }
//       <div className="flex gap-2 flex-wrap">
//         {fields.map((item, index) => (
//           <div
//             key={item.id}
//             className="px-2 py-1 bg-slate-200 rounded flex items-center text-xs"
//           >
//             {item.name}
//             <button
//               type="button"
//               onClick={() => remove(index)}
//               className="ml-1"
//             >
//               ✕
//             </button>
//           </div>
//         ))}
//       </div>
//       <input
//         type="text"
//         value={inputValue}
//         placeholder={placeholder}
//         onChange={(e) => setInputValue(e.target.value)}
//         onKeyDown={handleKeyDown}
//         className="border px-2 py-1 rounded mt-2 w-full"
//       />
//     </div>
//   );
// }
