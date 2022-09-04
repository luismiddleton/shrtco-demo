import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;
export default function Input({ ...rest }: Props) {
  return (
    <input
      className="rounded-md border-slate-300 focus:border-indigo-500 p-2 focus:ring-indigo-500 border-2 block"
      {...rest}
    />
  );
}
