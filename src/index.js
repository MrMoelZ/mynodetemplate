var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
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
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(`Hello World ${__filename} ${__dirname}`);
}));
app.get('/html', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
}));
app.get('/:entity', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const entity = req.params.entity;
    res.send(`Greetings ${entity}`);
}));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
