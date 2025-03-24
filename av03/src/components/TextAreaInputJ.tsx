import * as React from 'react';

interface TextAreaInputJProps {
    name: string;
    label?: string;
    placeholder?: string;
    theme?: 'light' | 'dark';
    required?: boolean;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
    rows?: number;
}

export default function TextAreaInputJ({
    name,
    label,
    placeholder,
    required,
    onChange,
    rows,
    theme = 'light'
}: TextAreaInputJProps) {
    return (
        <div className="text-input">
            {label && <label htmlFor={name}>{label}</label>}
            <textarea
                name={name}
                placeholder={placeholder}
                className={theme}
                required={required}
                onChange={onChange}
                rows={rows}
            />
        </div>
    );
}
