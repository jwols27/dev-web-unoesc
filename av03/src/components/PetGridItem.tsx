import { Pet } from '../services/PetService.ts';
import * as React from 'react';
import { useMemo } from 'react';

interface PetGridItemProps {
    pet: Pet;
}

export const PetGridItem = ({ pet }: PetGridItemProps) => {
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

    const dataNascimento = useMemo(() => {
        const nasc = new Date(pet.data_nascimento?.toString() ?? '');
        return isFinite(+nasc)
            ? nasc.toLocaleString()
            : 'Data de nascimento desconhecida';
    }, [pet]);

    return (
        <div className={'pet-card card'}>
            <img
                className={'flex-row align-center'}
                src={pet.imagem_url ?? undefined}
                alt={'Sem imagem'}
                title={pet.nome}
            />
            <div className={'pet-card-info'}>
                <b>{pet.nome}</b>
                <p>
                    {pet.especie}{' '}
                    {(pet.raca ?? '').length > 0 ? `- ${pet.raca} ` : ''}
                    {sexo}
                    <br />
                    {dataNascimento}&nbsp;
                </p>
            </div>
        </div>
    );
};
