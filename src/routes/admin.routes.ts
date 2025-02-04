import { Router } from "express";
import {
  addGrocery,
  getGroceries,
  updateGrocery,
  updateInventory,
  deleteGrocery,
} from "../controllers/admin.controller";

const router = Router();

router.post("/groceries", addGrocery);
router.get("/groceries", getGroceries);
router.put("/groceries/:id", updateGrocery);
router.put("/groceries/:id/inventory", updateInventory);
router.delete("/groceries/:id", deleteGrocery);

export default router;
