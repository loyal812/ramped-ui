import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary"; // This might be less used if color is provided
    color?: string;
    disabled?: boolean;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    type = "button",
    variant = "primary",
    color, // Destructure color prop
    disabled = false,
    className = '',
}) => {
    const baseStyle = "font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline px-[20px]";
    const primaryStyle = "bg-blue-600 hover:bg-blue-700 text-white";
    const secondaryStyle = "bg-gray-500 hover:bg-gray-700 text-white";
    const disabledStyle = "bg-gray-400 text-gray-700 cursor-not-allowed";

    const getButtonClasses = () => {
        // Apply custom color classes if `color` prop is provided
        if (color) {
            return `${baseStyle} ${color} ${className}`;
        }
        if (disabled) {
            return `${baseStyle} ${disabledStyle} ${className}`;
        }
        switch (variant) {
            case "primary":
                return `${baseStyle} ${primaryStyle} ${className}`;
            case "secondary":
                return `${baseStyle} ${secondaryStyle} ${className}`;
            default:
                return `${baseStyle} ${className}`;
        }
    };

    return (
        <button
            type={type}
            onClick={disabled ? undefined : onClick}
            className={getButtonClasses()}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;

{/* <Button color="bg-green-500 hover:bg-green-700 text-white" onClick={() => console.log('Green Button clicked!')}>
    Custom Green Button
</Button> */}