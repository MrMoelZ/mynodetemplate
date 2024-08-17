import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

const PORT = process.env.PORT || 3003;

app.get('/', async (req, res) => {
    res.send('Hello World');
})

app.get('/:entity', async (req, res) => {
    const entity = req.params.entity;
    res.send(`Hello ${entity}`);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})