import { Router } from "express";

import UserController from "../controllers/UserController.js";

const router = Router();

//Método GET - USER
router.get('/users', UserController.index);

//Pesquisando user por ID - USER
router.get('/users/:id', UserController.show);

//Método POST - USER
router.post('/users', UserController.store);

//Método PUT - USER
router.put('/users/:id', UserController.update);

//Método DELETE - USER
router.delete('/users/:id', UserController.delete);

export default router;