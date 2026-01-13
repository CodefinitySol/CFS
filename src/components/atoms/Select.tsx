'use client';

import { useState, useRef, useEffect, ReactNode } from 'react';
import { FiCheck, FiChevronDown } from 'react-icons/fi';

export interface SelectOption {
    label: string;
    value: string;
}

export interface SelectProps {
    options: SelectOption[];
    value: string;
    onChange: (value: string) => void;
    label?: ReactNode;
    placeholder?: string;
    error?: string;
    helperText?: string;
    className?: string;
    required?: boolean;
    name?: string;
}

const Select = ({
    options,
    value,
    onChange,
    label,
    placeholder = 'Select one',
    error,
    helperText,
    className = '',
    required = false,
    name
}: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const handleSelect = (optionValue: string) => {
        onChange(optionValue);
        setIsOpen(false);
    };

    const selectedOption = options.find(o => o.value === value);

    return (
        <div className={`w-full ${className}`} ref={dropdownRef}>
            {label && (
                <label className="mb-3 block font-aeonik text-base font-normal text-[#475569]">
                    {label}
                </label>
            )}

            <div className="relative">
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className={`flex w-full items-center justify-between rounded-xl border px-5 py-4 font-aeonik text-base transition-all duration-200 outline-none ring-offset-0 focus:ring-2 ${isOpen
                            ? 'border-gray-300 bg-white ring-gray-100'
                            : error
                                ? 'border-red-500/50 bg-[#f8f9fa] ring-red-500/50'
                                : 'border-gray-200 bg-[#f8f9fa] ring-gray-100 hover:border-gray-300 hover:bg-[#f3f4f6]'
                        }`}
                >
                    <span className={value ? 'text-gray-900' : 'text-gray-400'}>
                        {selectedOption?.label || placeholder}
                    </span>
                    <FiChevronDown
                        className={`h-5 w-5 text-[#475569] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                </button>

                {/* Hidden native select for form accessibility/validation */}
                <select
                    name={name}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    required={required}
                    className="sr-only"
                    aria-hidden="true"
                    tabIndex={1}
                >
                    <option value="">{placeholder}</option>
                    {options.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                </select>

                {/* Custom Dropdown Menu */}
                {isOpen && (
                    <div className="absolute left-0 top-full z-[100] mt-2 w-full origin-top animate-dropdown-enter">
                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white/95 shadow-[0_10px_40px_rgba(0,0,0,0.1)] backdrop-blur-xl">
                            <div className="py-1">
                                {options.map((option) => {
                                    const isSelected = value === option.value;
                                    return (
                                        <button
                                            key={option.value}
                                            type="button"
                                            onClick={() => handleSelect(option.value)}
                                            className={`flex w-full items-center justify-between px-5 py-3.5 text-left font-aeonik text-base transition-all duration-200 ${isSelected
                                                    ? 'bg-gray-50 text-gray-900 font-medium'
                                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                                }`}
                                        >
                                            <span>{option.label}</span>
                                            {isSelected && <FiCheck className="h-4 w-4 text-[#475569]" />}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {error && (
                <p className="mt-1 ml-1 text-sm text-red-500">{error}</p>
            )}
            {helperText && !error && (
                <p className="mt-1 ml-1 text-sm text-gray-500">{helperText}</p>
            )}
        </div>
    );
};

export default Select;
