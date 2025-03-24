import { ChangeEventHandler, CSSProperties } from 'react';

export type DropdownOption = {
    value: any;
    label: string;
};

interface DropdownJProps {
    name: string;
    label?: string;
    options: DropdownOption[];
    required?: boolean;
    theme?: 'light' | 'dark';
    onChange?: ChangeEventHandler<HTMLSelectElement>;
    value?: string | number | readonly string[];
    style?: CSSProperties;
}

export default function DropdownJ({
    name,
    label,
    options,
    required,
    onChange,
    value,
    style,
    theme = 'light'
}: DropdownJProps) {
    return (
        <div className="dropdown" style={style}>
            {label && <label htmlFor={name}>{label}</label>}
            <select
                name={name}
                id={`dropdown-${name}`}
                required={required}
                className={theme}
                onChange={onChange}
                value={value}
            >
                {options.map((o, i) => (
                    <option key={`opcao-${i}`} value={o.value}>
                        {o.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
