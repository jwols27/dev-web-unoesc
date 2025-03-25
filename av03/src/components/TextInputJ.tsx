import * as React from 'react';
import { CSSProperties } from 'react';

interface TextInputJProps {
    name: string;
    label?: string;
    type?: React.HTMLInputTypeAttribute;
    placeholder?: string;
    theme?: 'light' | 'dark';
    required?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    style?: CSSProperties;
    value?: string | number | readonly string[] | null;
}

export default function TextInputJ({
    name,
    label,
    type = 'text',
    placeholder,
    required,
    onChange,
    style,
    value,
    theme = 'light'
}: TextInputJProps) {
    return (
        <div className="text-input" style={style}>
            {label && <label htmlFor={name}>{label}</label>}
            <input
                value={value === null ? '' : value}
                name={name}
                type={type}
                placeholder={placeholder}
                className={theme}
                required={required}
                onChange={onChange}
            />
        </div>
    );
}
