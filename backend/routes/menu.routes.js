import express from 'express';
import { createPizza, getAllPizzas, getPizzaById, updatePizzaById, deletePizzaById } from '../controllers/menu.controller.js';

const router = express.Router();

// GET /menu – Retrieve the list of pizzas
router.get('/all-menu', getAllPizzas);

router.get('/all-menu/:id', getPizzaById);

// POST /menu – Add a new pizza (admin only)
router.post('/upload-menu', createPizza); 

// PUT /menu/:id – Edit a pizza (admin only)
router.put('/update-menu/:id', updatePizzaById);

// DELETE /menu/:id – Delete a pizza (admin only)
router.delete('/delete-menu/:id', deletePizzaById);

export default router;
