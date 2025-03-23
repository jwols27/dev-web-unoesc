import '../styles/admin-styles.css';
import { DashboardItem, Pet } from '../components/DashboardItem.tsx';
import { useState } from 'react';

// const exemplo: Pet = {
//     nome: 'Mel',
//     especie: 'Gato',
//     raca: 'Sphynx',
//     sexo: 'F',
//     data_nascimento: '27/01/2023',
//     imagem: 'http://localhost:5173/src/assets/mel.png'
// };

export default function TemplateAdmin() {
    const [pets, setPets] = useState<Pet[]>([]);

    const editItem = (index: number, pet: Pet | undefined) => {
        console.log(index, pet);
    };

    const deleteItem = (index: number) => {
        const novo = [...pets];
        novo.splice(index, 1);
        setPets(novo);
    };

    return (
        <main id={'main-admin'}>
            <h2 id={'dashboard-title'} className={'card'}>
                Gerenciar pets
            </h2>
            <div id={'dashboard-content'} className={'card'}>
                {pets.map((pet, i) => (
                    <DashboardItem
                        key={`pet-${i}`}
                        index={i}
                        pet={pet}
                        onEdit={editItem}
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
