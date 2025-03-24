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

export const getPets = async (): Promise<Pet[]> => {
    try {
        const response = await axios.get(`${API_URL}/pets`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching pets:', error);
        throw error;
    }
};

export const getPetById = async (id: number): Promise<Pet> => {
    try {
        const response = await axios.get(`${API_URL}/pets/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching pet with id ${id}:`, error);
        throw error;
    }
};

export const createPet = async (pet: Pet): Promise<Pet> => {
    try {
        pet = converterPet(pet);

        const novo: Omit<Pet, 'id_pet'> = {
            nome: pet.nome,
            especie: pet.especie,
            raca: pet.raca,
            sexo: pet.sexo,
            data_nascimento: pet.data_nascimento,
            imagem_url: pet.imagem_url
        };

        console.log(novo);
        const response = await axios.post(`${API_URL}/pets`, novo);
        return response.data;
    } catch (error) {
        console.error('Error creating pet:', error);
        throw error;
    }
};

export const updatePet = async (id: number, pet: Pet): Promise<Pet> => {
    try {
        if (pet.data_nascimento) {
            pet.data_nascimento = new Date(pet.data_nascimento);
        }
        const response = await axios.put(`${API_URL}/pets/${id}`, pet);
        return response.data;
    } catch (error) {
        console.error(`Error updating pet with id ${id}:`, error);
        throw error;
    }
};

export const deletePet = async (id: number): Promise<Pet> => {
    try {
        const response = await axios.delete(`${API_URL}/pets/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting pet with id ${id}:`, error);
        throw error;
    }
};
