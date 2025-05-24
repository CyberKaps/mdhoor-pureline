import React from 'react';



const Button = ({
    children,
    onClick,
    type = 'button',
    disabled = false,
    className = '',
    ...props
}) => (
    <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`btn ${className}`}
        {...props}
    >
        {children}
    </button>
);

export default Button;