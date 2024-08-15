import express from 'express'; 
import routes from './app/routes/index.js';

const app = express();

//Indicando para o express ler o body com json
app.use(express.json());

//Usando o Router
app.use(routes);

export default app;