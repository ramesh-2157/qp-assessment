import { Router } from "express";
import {
  placeOrder,
  getUserOrders,
  getUser,
} from "../controllers/user.controller";

const router = Router();

router.post("/orders", placeOrder);

router.get("/orders/:userId", getUserOrders);

router.get("/users", getUser);

export default router;
