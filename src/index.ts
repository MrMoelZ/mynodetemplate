import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';

//
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

const PORT = process.env.PORT || 3003;

app.get('/', async (req: Request, res: Response) => {
    res.send(`Hello World ${__filename} ${__dirname}`);
})

app.get('/html', async (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})


app.get('/:entity', async (req, res) => {
    const entity = req.params.entity;
    res.send(`Greetings ${entity}`);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})