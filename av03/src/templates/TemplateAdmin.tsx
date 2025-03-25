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
import { MdAdd, MdCancel, MdFilterAlt, MdFilterAltOff } from 'react-icons/md';
import { DashboardManageItem } from '../components/DashboardManageItem.tsx';
import { toast, ToastContainer } from 'react-toastify';
import { DashboardFilter } from '../components/DashboardFilter.tsx';
import { MoonLoader } from 'react-spinners';

export default function TemplateAdmin() {
    const [pets, setPets] = useState<Pet[]>([]);
    const [addingItem, setAddingItem] = useState<boolean>(false);
    const [indexEdit, setIndexEdit] = useState<number>(-1);
    const [filtering, setFiltering] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        getPets().then((lista) => {
            setTimeout(() => {
                setPets(lista);
                setLoading(false);
            }, 1000);
        });
    }, []);

    const deleteItem = (index: number) => {
        deletePet(pets[index].id_pet).then(() => {
            const novo = [...pets];
            novo.splice(index, 1);
            setPets(novo);
            toast('Pet removido com sucesso!');
        });
    };

    const addItem = (p: Pet) => {
        createPet(p).then(() => {
            const novo = [...pets, p];
            setPets(novo);
            toast('Pet adicionado com sucesso!');
        });
    };

    const editItem = (index: number, p: Pet) => {
        updatePet(p.id_pet, p).then((n) => {
            const novo = [...pets];
            novo[index] = n;
            setPets(novo);
            toast('Pet atualizado com sucesso!');
        });
    };

    const filterItems = (filtro: string) => {
        setLoading(true);
        getPets(filtro).then((lista) => {
            setTimeout(() => {
                setPets(lista);
                setLoading(false);
                if (!filtro) return;
                if (lista.length === 0) return toast(`Nenhum pet encontrado.`);
                if (lista.length === 1) return toast(`1 pet encontrado.`);
                toast(`${lista.length} pets encontrados.`);
            }, 1000);
        });
        // setFiltrado(true);
    };

    return (
        <main id={'main-admin'}>
            <div id={'dashboard-title'} className={'card'}>
                <h2>Gerenciar pets</h2>
                <button
                    className={'btn add-btn transform'}
                    onClick={() => setFiltering(!filtering)}
                >
                    {filtering ? <MdFilterAltOff /> : <MdFilterAlt />}
                </button>
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
                {filtering && <DashboardFilter filterItems={filterItems} />}
                {loading && (
                    <div className={'dashboard-item flex-row align-center'}>
                        <MoonLoader
                            color={'#8839ef'}
                            loading={loading}
                            size={50}
                        />
                    </div>
                )}
                {!loading &&
                    pets.map((pet, i) => (
                        <DashboardItem
                            key={`pet-${i}`}
                            index={i}
                            pet={pet}
                            onEdit={setIndexEdit}
                            onDelete={deleteItem}
                        />
                    ))}
                {!loading && pets.length === 0 && (
                    <div className={'dashboard-item'}>
                        Nenhum pet encontrado.
                    </div>
                )}
            </div>
            <ToastContainer position="bottom-center" hideProgressBar />
        </main>
    );
}
