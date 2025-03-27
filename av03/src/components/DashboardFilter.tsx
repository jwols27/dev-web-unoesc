import TextInputJ from './TextInputJ.tsx';
import { MdCancel, MdSearch } from 'react-icons/md';
import { FormEvent, useMemo, useState } from 'react';

interface DashboardFilterProps {
    type: 'dashboard' | 'pets';
    filterItems: (f: string) => void;
}

export const DashboardFilter = ({
    type,
    filterItems
}: DashboardFilterProps) => {
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
        const jsFiltro = document.getElementById(
            'filtro-nome'
        ) as HTMLInputElement | null;
        if (jsFiltro) jsFiltro.value = '';
        filterItems('');
    };

    const tema = useMemo(() => (type === 'pets' ? 'dark' : 'light'), [type]);

    return (
        <form id={`${type}-filter`} onSubmit={onSubmit}>
            <div className={'filter-row flex-row'}>
                <TextInputJ
                    id={'filtro-nome'}
                    name={'filtro-nome'}
                    placeholder={'Nome'}
                    label={'Nome'}
                    style={{ flex: 1 }}
                    dark={type === 'pets'}
                />
                <button
                    type="submit"
                    className={`btn outlined flex-row align-center ${tema}`}
                >
                    <MdSearch />
                    Filtrar
                </button>
            </div>
            {filtro && (
                <div
                    className={`badge flex-row ${tema}`}
                    style={{ gap: '.2rem' }}
                >
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
