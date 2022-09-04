import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;
export default function Button({ children, ...rest }: Props) {
  return (
    <button
      className="border-2 border-slate-700 px-2 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 focus:bg-slate-600 hover:border-slate-700 text-white"
      {...rest}
    >
      {children}
    </button>
  );
}
