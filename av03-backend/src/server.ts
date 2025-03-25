import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.post('/pets', async (req, res) => {
    try {
        console.log(req.body);
        const pet = await prisma.pet.create({
            data: req.body
        });
        res.json(pet);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Erro ao criar pet' });
    }
});

app.get('/pets', async (req, res) => {
    const { filtro } = req.query;
    try {
        const pets = await prisma.pet.findMany({
            where: { nome: { contains: filtro ? String(filtro) : undefined } },
            orderBy: { nome: 'asc' }
        });
        res.json(pets);
    } catch (error) {
        console.error('Erro ao buscar pets:', error);
        res.status(500).json({ error: 'Erro ao buscar pets' });
    }
});

app.get('/pets/:id', async (req, res) => {
    const { id } = req.params;
    const pet = await prisma.pet.findUnique({ where: { id_pet: Number(id) } });
    if (pet) {
        res.json(pet);
    } else {
        res.status(404).json({ error: 'Pet não encontrado' });
    }
});

app.put('/pets/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const pet = await prisma.pet.update({
            where: { id_pet: Number(id) },
            data: req.body
        });
        res.json(pet);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Erro ao atualizar pet' });
    }
});

app.delete('/pets/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.pet.delete({ where: { id_pet: Number(id) } });
        res.json({ message: 'Pet removido com sucesso' });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Erro ao remover pet' });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor ativo em http://localhost:${PORT}`);
});
