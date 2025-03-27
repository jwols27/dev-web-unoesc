import { useEffect, useMemo, useState } from 'react';
import { getPets, getQuantidadePets, Pet } from '../services/PetService.ts';
import { MoonLoader } from 'react-spinners';
import '../styles/pets-styles.css';
import { PetGridItem } from '../components/PetGridItem.tsx';
import { toast, ToastContainer } from 'react-toastify';
import { DashboardFilter } from '../components/DashboardFilter.tsx';

export const TemplatePets = () => {
    const [pets, setPets] = useState<Pet[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getPets().then((lista) => {
            setTimeout(() => {
                setPets(lista);
                setLoading(false);
            }, 1000);
        });
    }, []);

    const qtdPets = useMemo(() => {
        return getQuantidadePets(pets);
    }, [pets]);

    const filterItems = (filtro: string) => {
        setLoading(true);
        getPets(filtro).then((lista) => {
            setTimeout(() => {
                setPets(lista);
                setLoading(false);
                if (!filtro) return;
                toast(getQuantidadePets(lista));
            }, 1000);
        });
    };

    return (
        <main id={'main-pets'}>
            <div id={'pets-toolbar'}>
                <h1 style={{ margin: '0 0 1rem' }}>Pets</h1>
                {/*<TextInputJ name={'nome'} placeholder={'Nome'} dark />*/}
                <DashboardFilter filterItems={filterItems} type={'pets'} />
            </div>
            <div id={'pets-content'}>
                {!loading && (
                    <div id={'pet-grid'}>
                        {pets.map((pet, i) => (
                            <PetGridItem key={i} pet={pet} />
                        ))}
                    </div>
                )}
                {loading && (
                    <div className={'flex-row align-center'}>
                        <MoonLoader
                            color={'#8839ef'}
                            loading={loading}
                            size={50}
                        />
                    </div>
                )}
                {!loading && pets.length === 0 && (
                    <div className={'flex-row align-center'}>
                        Nenhum pet encontrado.
                    </div>
                )}
                {!loading && <p>{qtdPets}</p>}
            </div>
            <ToastContainer position="bottom-center" hideProgressBar />
        </main>
    );
};
