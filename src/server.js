import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';

const port = process.env.PORT;

app.listen( port, () => {
    console.log(`Servidor rodando no endereço http://localhost:${port}`);
})