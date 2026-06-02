import * as React from "react";

const inputBase =
  "min-w-0 w-full rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-[15px] text-gray-900 placeholder:text-gray-400 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:opacity-60";

const inputInvalid =
  "border-red-400 focus:border-red-500 focus:ring-red-500/20";

export function fieldInputClass(invalid?: boolean) {
  return `${inputBase} ${invalid ? inputInvalid : ""}`;
}

type FormFieldProps = {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
};

export const FormField = ({ id, label, error, children }: FormFieldProps) => (
  <div className="flex min-w-0 flex-col gap-1.5">
    <label htmlFor={id} className="text-sm font-medium text-gray-700">
      {label}
    </label>
    {children}
    {error ? (
      <span className="text-sm text-red-600" role="alert">
        {error}
      </span>
    ) : null}
  </div>
);
