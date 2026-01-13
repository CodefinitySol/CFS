import { TextareaHTMLAttributes, forwardRef, ReactNode } from 'react';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: ReactNode;
    error?: string;
    helperText?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ label, error, helperText, className = '', ...props }, ref) => {
        const baseStyles = 'w-full resize-none rounded-xl border bg-[#f8f9fa] px-5 py-4 font-aeonik text-base text-gray-900 placeholder-gray-400 transition-all focus:outline-none focus:ring-2';
        const errorStyles = error
            ? 'border-red-500/50 focus:ring-red-500/50'
            : 'border-gray-200 focus:border-gray-300 focus:bg-white focus:ring-gray-100';

        return (
            <div className="w-full">
                {label && (
                    <label className="mb-3 block font-aeonik text-base font-normal text-[#475569]">
                        {label}
                    </label>
                )}
                <textarea
                    ref={ref}
                    className={`${baseStyles} ${errorStyles} ${className}`}
                    {...props}
                />
                {error && (
                    <p className="mt-1 ml-1 text-sm text-red-400">{error}</p>
                )}
                {helperText && !error && (
                    <p className="mt-1 ml-1 text-sm text-gray-500">{helperText}</p>
                )}
            </div>
        );
    }
);

Textarea.displayName = 'Textarea';

export default Textarea;
