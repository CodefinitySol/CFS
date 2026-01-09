'use client';

import { HiPlus, HiMinus } from 'react-icons/hi2';

interface FAQItemProps {
    question: string;
    answer: React.ReactNode;
    isOpen: boolean;
    onClick: () => void;
    className?: string;
    questionClassName?: string;
    answerClassName?: string;
    buttonClassName?: string;
    iconContainerClassName?: string;
    borderClassName?: string;
    maxHeight?: string;
}

export default function FAQItem({
    question,
    answer,
    isOpen,
    onClick,
    className = '',
    questionClassName = 'text-lg sm:text-xl font-normal text-[#181A1D]',
    answerClassName = 'text-base sm:text-lg text-[#181A1D]/70',
    buttonClassName = 'py-8',
    iconContainerClassName = 'bg-[#506C83] text-white',
    borderClassName = 'border-gray-200',
    maxHeight = '500px'
}: FAQItemProps) {
    return (
        <div className={`border-b ${borderClassName} last:border-0 ${className}`}>
            <button
                onClick={onClick}
                className={`w-full flex items-center justify-between text-left group transition-all ${buttonClassName}`}
            >
                <span className={`font-aeonik transition-colors pr-8 ${questionClassName} group-hover:text-[#506C83]`}>
                    {question}
                </span>
                <div
                    className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${iconContainerClassName} ${isOpen ? '' : 'hover:scale-105'}`}
                >
                    {isOpen ? (
                        <HiMinus className="h-6 w-6" />
                    ) : (
                        <HiPlus className="h-6 w-6" />
                    )}
                </div>
            </button>

            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 mb-8' : 'max-h-0 opacity-0'
                    }`}
                style={{ maxHeight: isOpen ? maxHeight : '0' }}
            >
                <div className={`font-aeonik leading-relaxed pr-8 sm:pr-20 ${answerClassName}`}>
                    {answer}
                </div>
            </div>
        </div>
    );
}
