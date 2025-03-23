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
        console.log(error);
        res.status(400).json({ error: 'Error creating pet' });
    }
});

app.get('/pets', async (req, res) => {
    const pets = await prisma.pet.findMany();
    res.json(pets);
});

app.get('/pets/:id', async (req, res) => {
    const { id } = req.params;
    const pet = await prisma.pet.findUnique({ where: { id_pet: Number(id) } });
    if (pet) {
        res.json(pet);
    } else {
        res.status(404).json({ error: 'Pet not found' });
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
        res.status(400).json({ error: 'Error updating pet' });
    }
});

app.delete('/pets/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.pet.delete({ where: { id_pet: Number(id) } });
        res.json({ message: 'Pet deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: 'Error deleting pet' });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
