import React from "react";

interface _props {
    onClick?: any;
    children?: React.ReactNode;
    disabled?: boolean;
}

const Button = (props: _props) => {
    const { children, disabled } = props;
    return (
        <button
            className="bg-black py-2 px-4 text-medium hover:bg-black/70 text-white mt-5"
            {...props}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
