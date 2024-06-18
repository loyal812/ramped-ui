import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string; // Optional error message
    direction?: 'column' | 'row';
}

const Input: React.FC<InputProps> = ({ label, error, direction = 'column', className, ...props }) => {
    const baseInputClass = "w-full border p-2 focus:outline-none focus:ring-2 transition ease-in-out duration-150 text-text-basic sm:text-sm rounded-lg";
    const normalStateClass = "border-gray-300 focus:ring-blue-500 focus:border-blue-500";
    const errorStateClass = "border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500";
    const disabledStateClass = "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed";

    const containerClass = direction === 'row' ? "flex items-center space-x-2" : "flex flex-col space-y-2";
    const labelClass = direction === 'row' ? "min-w-[4rem]" : "";

    const inputClasses = `${baseInputClass} ${error ? errorStateClass : normalStateClass} ${props.disabled ? disabledStateClass : ''} ${className || ''}`;

    return (
        <div className={containerClass}>
            {label && <label className={`block mb-2 text-sm font-medium text-text-basic dark:text-white ${labelClass}`}>{label}</label>}
            <div className="flex-1">
                <input
                    {...props}
                    className={inputClasses}
                />
                {error && <span className="text-sm text-red-500">{error}</span>} {/* Display error message if error exists */}
            </div>
        </div>
    );
};

export default Input;

{/* <Input
    label="Email"
    type="email"
    placeholder="example@example.com"
    direction="row" // Layout the label and input in a row
    />
<Input
    label="Password"
    type="password"
    placeholder="Enter your password"
    className="mt-4" // Add margin top for spacing between inputs
    // direction="column" // This is the default behavior, can be omitted
/> */}