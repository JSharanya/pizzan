import Pizza from "../models/menu.model.js";

// Create a new Pizza
export const createPizza = async (req, res) => {
  const { name, description, price, imageUrl } = req.body;

  const newPizza = new Pizza({
    name,
    description,
    price,
    imageUrl,
  });

  try {
    const savedPizza = await newPizza.save();
    res.status(200).json(savedPizza);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all pizzas
export const getAllPizzas = async (req, res) => {
  try {
    const pizzas = await Pizza.find();
    res.status(200).json(pizzas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get pizza by ID
export const getPizzaById = async (req, res) => {
  const { id } = req.params;

  try {
    const pizza = await Pizza.findById(id);
    if (!pizza) {
      return res.status(404).json({ message: "Pizza not found" });
    }
    res.status(200).json(pizza);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a pizza by ID
export const updatePizzaById = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, imageUrl } = req.body;

  try {
    const updatedPizza = await Pizza.findByIdAndUpdate(
      id,
      { name, description, price, imageUrl },
      { new: true, runValidators: true }
    );
    if (!updatedPizza) {
      return res.status(404).json({ message: "Pizza not found" });
    }
    res.status(200).json(updatedPizza);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a pizza by ID
export const deletePizzaById = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPizza = await Pizza.findByIdAndDelete(id);
    if (!deletedPizza) {
      return res.status(404).json({ message: "Pizza not found" });
    }
    res.status(200).json({ message: "Pizza deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
