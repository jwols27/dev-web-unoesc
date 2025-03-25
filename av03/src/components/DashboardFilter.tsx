import TextInputJ from './TextInputJ.tsx';
import { MdCancel, MdSearch } from 'react-icons/md';
import { FormEvent, useState } from 'react';

interface DashboardFilterProps {
    filterItems: (f: string) => void;
}

export const DashboardFilter = ({ filterItems }: DashboardFilterProps) => {
    const [filtro, setFiltro] = useState<string>('');

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const f = formData.get('filtro-nome') as string;
        setFiltro(f);
        filterItems(f);
    };

    const onReset = () => {
        setFiltro('');
        filterItems('');
    };

    return (
        <form id={'dashboard-filter'} onSubmit={onSubmit}>
            <div className={'filter-row flex-row'}>
                <TextInputJ
                    name={'filtro-nome'}
                    label={'Nome'}
                    style={{ flex: 1 }}
                />
                <button
                    type="submit"
                    className={'btn outlined light flex-row align-center'}
                >
                    <MdSearch />
                    Filtrar
                </button>
            </div>
            {filtro && (
                <div className={'badge flex-row'} style={{ gap: '.2rem' }}>
                    <b>Nome:</b> {filtro}
                    <a
                        className={'flex-row align-center'}
                        style={{ marginLeft: '.25rem' }}
                        onClick={onReset}
                    >
                        <MdCancel />
                    </a>
                </div>
            )}
        </form>
    );
};
