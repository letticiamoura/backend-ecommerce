import { Router } from "express";

import UserController from "../controllers/UserController.js";
import ProductController from "../controllers/ProductController.js";

const router = Router();

//          USERS

//Método GET
router.get('/users', UserController.index);

//Pesquisando user por ID
router.get('/users/:id', UserController.show);

//Método POST
router.post('/users', UserController.store);

//Método PUT
router.put('/users/:id', UserController.update);

//Método DELETE
router.delete('/users/:id', UserController.delete);


//          PRODUCTS

//Método GET
router.get('/products', ProductController.index);

//Pesquisando user por ID
router.get('/products/:id', ProductController.show);

//Método POST
router.post('/products', ProductController.store);

//Método PUT
router.put('/products/:id', ProductController.update);

//Método DELETE
router.delete('/products/:id', ProductController.delete);

export default router;