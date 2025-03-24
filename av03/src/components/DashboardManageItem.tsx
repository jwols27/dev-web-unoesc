import TextInputJ from './TextInputJ.tsx';
import DropdownJ, { DropdownOption } from './DropdownJ.tsx';
import { FormEvent, useEffect, useState } from 'react';
import { Pet } from '../services/PetService.ts';

const opcoesSexo: DropdownOption[] = [
    { value: 'M', label: 'Masculino' },
    { value: 'F', label: 'Feminino' },
    { value: 'D', label: 'Desconhecido' }
];

const emptyPet: Pet = {
    id_pet: 0,
    nome: '',
    especie: '',
    raca: null,
    sexo: 'D',
    data_nascimento: null,
    imagem_url: null
};

interface DashboardManageItemProps {
    onAddSubmit: (p: Pet) => void;
    onEditSubmit: (i: number, p: Pet) => void;
    index: number;
    petEditado?: Pet;
}

export const DashboardManageItem = ({
    onAddSubmit,
    onEditSubmit,
    index,
    petEditado
}: DashboardManageItemProps) => {
    const [newPet, setNewPet] = useState<Pet>(petEditado ?? emptyPet);

    useEffect(() => {
        if (petEditado) setNewPet(petEditado);
        else setNewPet(emptyPet);
    }, [petEditado]);

    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (petEditado) {
            onEditSubmit(index, newPet);
        } else {
            onAddSubmit(newPet);
        }
    };

    return (
        <form id={'dashboard-add-item'} onSubmit={submitForm}>
            <div className={'flex-row'} style={{ gap: '1rem' }}>
                <TextInputJ
                    name={'nome'}
                    label={'Nome*'}
                    placeholder={'Nome'}
                    required
                    value={newPet.nome}
                    style={{ flex: 3 }}
                    onChange={(e) =>
                        setNewPet({
                            ...newPet,
                            nome: e.target.value
                        })
                    }
                />
                <DropdownJ
                    name={'sexo'}
                    label={'Sexo'}
                    options={opcoesSexo}
                    value={newPet.sexo}
                    style={{ flex: 1 }}
                    onChange={(e) => {
                        if (
                            e.target.value === 'M' ||
                            e.target.value === 'F' ||
                            e.target.value === 'D'
                        ) {
                            setNewPet({
                                ...newPet,
                                sexo: e.target.value
                            });
                        }
                    }}
                />
            </div>
            <div className={'flex-row'} style={{ gap: '1rem' }}>
                <TextInputJ
                    name={'especie'}
                    label={'Espécie*'}
                    placeholder={'Espécie'}
                    required
                    value={newPet.especie}
                    style={{ flex: 1 }}
                    onChange={(e) =>
                        setNewPet({
                            ...newPet,
                            especie: e.target.value
                        })
                    }
                />
                <TextInputJ
                    name={'raca'}
                    label={'Raça'}
                    placeholder={'Raça'}
                    value={newPet.raca}
                    style={{ flex: 1 }}
                    onChange={(e) =>
                        setNewPet({
                            ...newPet,
                            raca: e.target.value
                        })
                    }
                />
                <TextInputJ
                    name={'data_nascimento'}
                    label={'Data de Nascimento'}
                    type={'datetime-local'}
                    value={newPet.data_nascimento?.toString() ?? ''}
                    onChange={(e) =>
                        setNewPet({
                            ...newPet,
                            data_nascimento: e.target.value
                        })
                    }
                    style={{ flex: 1 }}
                />
            </div>
            <TextInputJ
                name={'imagem'}
                label={'Imagem'}
                value={newPet.imagem_url}
                placeholder={'URL'}
                onChange={(e) =>
                    setNewPet({
                        ...newPet,
                        imagem_url: e.target.value
                    })
                }
            />
            <button
                type={'submit'}
                style={{ marginTop: '.5rem' }}
                className={'btn outlined light'}
                onClick={() => {}}
            >
                {petEditado ? 'Atualizar' : 'Adicionar'}
            </button>
        </form>
    );
};
