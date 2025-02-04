import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export const placeOrder = async (req: Request, res: Response) => {
  try {
    const { userId, items } = req.body; // Array of { groceryId, quantity }

    const result = await UserService.createOrder(userId, items);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: "Error placing order" });
  }
};

export const getUserOrders = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await UserService.getUserOrders(+userId);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Error fetching user orders" });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getUser();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Error fetching user orders" });
  }
};
