import '../styles/admin-styles.css';
import { DashboardItem } from '../components/DashboardItem.tsx';
import { useEffect, useState } from 'react';
import {
    createPet,
    deletePet,
    getPets,
    Pet,
    updatePet
} from '../services/PetService.ts';
import { MdAdd, MdCancel } from 'react-icons/md';
import { DashboardManageItem } from '../components/DashboardManageItem.tsx';

export default function TemplateAdmin() {
    const [pets, setPets] = useState<Pet[]>([]);
    const [addingItem, setAddingItem] = useState<boolean>(false);
    const [indexEdit, setIndexEdit] = useState<number>(-1);

    useEffect(() => {
        getPets().then(setPets);
    }, []);

    const deleteItem = (index: number) => {
        deletePet(pets[index].id_pet).then(() => {
            const novo = [...pets];
            novo.splice(index, 1);
            setPets(novo);
        });
    };

    const addItem = (p: Pet) => {
        createPet(p).then(() => {
            const novo = [...pets, p];
            setPets(novo);
        });
    };

    const editItem = (index: number, p: Pet) => {
        updatePet(p.id_pet, p).then((n) => {
            const novo = [...pets];
            novo[index] = n;
            setPets(novo);
        });
    };

    return (
        <main id={'main-admin'}>
            <div id={'dashboard-title'} className={'card'}>
                <h2>Gerenciar pets</h2>
                <button
                    className={'btn add-btn transform'}
                    onClick={() => {
                        setAddingItem(indexEdit < 0 ? !addingItem : false);
                        setIndexEdit(-1);
                    }}
                >
                    {addingItem || indexEdit >= 0 ? <MdCancel /> : <MdAdd />}
                </button>
            </div>
            <div id={'dashboard-content'} className={'card'}>
                {(addingItem || indexEdit >= 0) && (
                    <DashboardManageItem
                        onAddSubmit={addItem}
                        onEditSubmit={editItem}
                        index={indexEdit}
                        petEditado={
                            indexEdit >= 0 ? pets[indexEdit] : undefined
                        }
                    />
                )}
                {pets.map((pet, i) => (
                    <DashboardItem
                        key={`pet-${i}`}
                        index={i}
                        pet={pet}
                        onEdit={setIndexEdit}
                        onDelete={deleteItem}
                    />
                ))}
                {pets.length === 0 && (
                    <div className={'dashboard-item'}>
                        Nenhum pet encontrado.
                    </div>
                )}
            </div>
        </main>
    );
}
