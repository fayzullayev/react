import {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  forwardRef,
  Ref,
} from 'react';

type InputProps = {
  textarea?: boolean;
  label: string;
} & (
  | InputHTMLAttributes<HTMLInputElement>
  | TextareaHTMLAttributes<HTMLTextAreaElement>
);

export default forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  function Input({ textarea = false, label, ...props }, ref) {
    return (
      <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">
          {label}
        </label>
        {textarea ? (
          <textarea
            ref={ref as Ref<HTMLTextAreaElement>}
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            ref={ref as Ref<HTMLInputElement>}
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            {...(props as InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
      </p>
    );
  },
);
