import { MdDelete, MdEditSquare } from 'react-icons/md';
import * as React from 'react';

export interface Pet {
    nome: string;
    especie: string;
    raca: string | undefined;
    sexo: 'M' | 'F' | undefined;
    data_nascimento: string;
    imagem: string | undefined;
}

interface DashboardItemProps {
    index: number;
    pet: Pet;
    onEdit: (index: number, pet: Pet) => void;
    onDelete: (index: number) => void;
}

export const DashboardItem: React.FC<DashboardItemProps> = ({
    index,
    pet,
    onEdit,
    onDelete
}: DashboardItemProps) => {
    const sexo = React.useMemo(() => {
        switch (pet.sexo) {
            case 'M':
                return '♂️';
            case 'F':
                return '♀️';
            default:
                return '❔';
        }
    }, [pet]);

    const editItem = () => {
        onEdit(index, pet);
    };

    const deleteItem = () => {
        onDelete(index);
    };

    return (
        <div className={'dashboard-item'}>
            <img src={pet.imagem} alt={'Exemplo'} />
            <div className={'dashboard-item-info'}>
                <b>{pet.nome}</b>
                <p>
                    {pet.especie} - {pet.raca ?? '\\'} {sexo}
                </p>
                {pet.data_nascimento && <p>{pet.data_nascimento}</p>}
            </div>
            <div className={'dashboard-item-crud'}>
                <button className={'edit-btn'} onClick={editItem}>
                    <MdEditSquare />
                </button>
                <button className={'delete-btn'} onClick={deleteItem}>
                    <MdDelete />
                </button>
            </div>
        </div>
    );
};
