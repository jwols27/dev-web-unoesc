import axios from 'axios';

const API_URL = 'http://localhost:5000';

export interface Pet {
    id_pet: number;
    nome: string;
    especie: string;
    raca: string | null;
    sexo: 'M' | 'F' | 'D';
    data_nascimento: string | Date | null;
    imagem_url: string | null;
}

export const getQuantidadePets = (lista: Pet[]) => {
    if (lista.length === 0) return `Nenhum pet encontrado.`;
    if (lista.length === 1) return `1 pet encontrado.`;
    return `${lista.length} pets encontrados.`;
};

const converterPet = (pet: Pet): Pet => {
    if (!pet.imagem_url) {
        pet.imagem_url = null;
    }

    if (pet.data_nascimento) {
        pet.data_nascimento = new Date(pet.data_nascimento);
    } else if (typeof pet.data_nascimento === 'string') {
        pet.data_nascimento = null;
    }

    return pet;
};

export const getPets = async (filtro: string = ''): Promise<Pet[]> => {
    try {
        const res = await axios.get(`${API_URL}/pets`, {
            params: { filtro: filtro.trim() }
        });
        return res.data;
    } catch (error) {
        console.error('Erro ao procurar pets:', error);
        throw error;
    }
};

export const getPetById = async (id: number): Promise<Pet> => {
    try {
        const res = await axios.get(`${API_URL}/pets/${id}`);
        return res.data;
    } catch (error) {
        console.error(`Erro ao procurar o pet com ID ${id}:`, error);
        throw error;
    }
};

export const createPet = async (pet: Pet): Promise<Pet> => {
    try {
        const { id_pet, ...novo } = converterPet(pet); // manda o pet sem o id

        const res = await axios.post(`${API_URL}/pets`, novo);
        return res.data;
    } catch (error) {
        console.error('Erro ao criar pet:', error);
        throw error;
    }
};

export const updatePet = async (id: number, pet: Pet): Promise<Pet> => {
    try {
        if (pet.data_nascimento) {
            pet.data_nascimento = new Date(pet.data_nascimento);
        }
        const res = await axios.put(`${API_URL}/pets/${id}`, pet);
        return res.data;
    } catch (error) {
        console.error(`Erro ao atualizar pet com ID ${id}:`, error);
        throw error;
    }
};

export const deletePet = async (id: number): Promise<Pet> => {
    try {
        const res = await axios.delete(`${API_URL}/pets/${id}`);
        return res.data;
    } catch (error) {
        console.error(`Erro ao remover pet com ID ${id}:`, error);
        throw error;
    }
};
