import express from 'express';
import cors from 'cors';
import router from './Routes/processos.js';

const app = express();

app.use(cors({
    origin: 'http://localhost:3000', // Define a origem permitida
    methods: ['GET', 'POST', 'DELETE','PUT'], // Métodos permitidos
    allowedHeaders: ['Content-Type'], // Cabeçalhos permitidos
})); // Permite requisições de qualquer origem
app.use(express.json()); // Para entender o JSON no corpo da requisição

app.use("/", router); 

const PORT = 8800;
app.listen(PORT, () => {
    console.log("Server is running on port ${PORT}");
});