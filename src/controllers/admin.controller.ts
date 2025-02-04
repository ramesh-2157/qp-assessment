import { Request, Response } from "express";
import { AdminService } from "../services/admin.service";

export const addGrocery = async (req: Request, res: Response) => {
  try {
    const { name, price, stock } = req.body;
    const result = await AdminService.addGrocery(name, price, stock);
    res.status(201).json({ message: "Grocery item added", grocery: result });
  } catch (error) {
    res.status(500).json({ error: "Error adding grocery item" });
  }
};

export const getGroceries = async (req: Request, res: Response) => {
  try {
    const result = await AdminService.getAllGroceries();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Error fetching grocery items" });
  }
};

export const updateGrocery = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, price } = req.body;

    const result = await AdminService.updateGrocery(Number(id), name, price);
    res.status(200).json({ message: "Grocery item updated", grocery: result });
  } catch (error) {
    res.status(500).json({ error: "Error updating grocery item" });
  }
};

export const updateInventory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { stock } = req.body;
    const result = await AdminService.updateInventory(Number(id), stock);
    res.status(200).json({ message: "Inventory updated", grocery: result });
  } catch (error) {
    res.status(500).json({ error: "Error updating inventory" });
  }
};

export const deleteGrocery = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await AdminService.deleteGrocery(Number(id));
    res.status(200).json({ message: "Grocery item deleted" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting grocery item" });
  }
};
