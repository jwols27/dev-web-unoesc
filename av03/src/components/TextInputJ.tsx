import * as React from 'react';
import { CSSProperties } from 'react';

interface TextInputJProps {
    id?: string;
    name: string;
    label?: string;
    type?: React.HTMLInputTypeAttribute;
    placeholder?: string;
    dark?: boolean;
    required?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    style?: CSSProperties;
    value?: string | number | readonly string[] | null;
}

export default function TextInputJ({
    id,
    name,
    label,
    type = 'text',
    placeholder,
    required,
    onChange,
    style,
    value,
    dark = false
}: TextInputJProps) {
    return (
        <div className="text-input" style={style}>
            {label && <label htmlFor={name}>{label}</label>}
            <input
                id={id}
                value={value === null ? '' : value}
                name={name}
                type={type}
                placeholder={placeholder}
                className={dark ? 'dark' : 'light'}
                required={required}
                onChange={onChange}
            />
        </div>
    );
}
