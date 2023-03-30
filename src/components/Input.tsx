import Hidden from "@/icons/Hidden";
import Reveal from "@/icons/Reveal";
import React, { ChangeEventHandler } from "react";

interface _props {
    type?: string;
    name?: string;
    placeholder?: string;
    label?: string;
    value?: string;
    onChange?: ChangeEventHandler;
    secure?: boolean;
}

const Input = (props: _props) => {
    const { type, label, secure, value, onChange } = props;
    const [reveal, setReveal] = React.useState(false);

    function toggleShow() {
        setReveal(!reveal);
    }

    function typeCheck() {
        return secure ? (reveal ? "text" : "password") : type;
    }

    function eye() {
        return (
            secure &&
            (reveal ? (
                <span onClick={toggleShow} className="absolute right-2">
                    <Reveal />
                </span>
            ) : (
                <span onClick={toggleShow} className="absolute right-2">
                    <Hidden />
                </span>
            ))
        );
    }

    return (
        <div className="flex flex-col gap-y-1">
            <label className="text-medium">{label}</label>
            <div className="relative flex items-center">
                <input
                    type={typeCheck()}
                    className="focus:ring-black focus:border-black grow px-2"
                    value={value}
                    onChange={onChange}
                    {...props}
                />
                {eye()}
            </div>
        </div>
    );
};

export default Input;
