import { MdDelete, MdEditSquare } from 'react-icons/md';
import * as React from 'react';
import { useMemo } from 'react';
import { Pet } from '../services/PetService.ts';

interface DashboardItemProps {
    index: number;
    pet: Pet;
    onEdit: (index: number) => void;
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
                return '❓';
        }
    }, [pet]);

    const editItem = () => {
        onEdit(index);
    };

    const deleteItem = () => {
        onDelete(index);
    };

    const dataNascimento = useMemo(() => {
        return new Date(pet.data_nascimento?.toString() ?? '').toLocaleString();
    }, [pet]);

    return (
        <div className={'dashboard-item'}>
            <img
                src={pet.imagem_url == null ? undefined : pet.imagem_url}
                alt={'Imagem'}
            />
            <div className={'dashboard-item-info'}>
                <b>{pet.nome}</b>
                <p>
                    {pet.especie}{' '}
                    {(pet.raca ?? '').length > 0 ? `- ${pet.raca} ` : ''}
                    {sexo}
                </p>
                {pet.data_nascimento && <p>{dataNascimento}</p>}
            </div>
            <div className={'dashboard-item-crud'}>
                <button className={'btn edit-btn transform'} onClick={editItem}>
                    <MdEditSquare />
                </button>
                <button
                    className={'btn delete-btn transform'}
                    onClick={deleteItem}
                >
                    <MdDelete />
                </button>
            </div>
        </div>
    );
};
