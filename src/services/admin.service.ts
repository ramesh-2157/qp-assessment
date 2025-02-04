import { GroceryModel } from "../models/grocery.model";

export const AdminService = {
  async addGrocery(name: string, price: number, stock: number) {
    return await GroceryModel.addGrocery(name, price, stock);
  },

  async getAllGroceries() {
    return await GroceryModel.getAllGroceries();
  },

  async updateGrocery(id: number, name: string, price: number) {
    let result = null;
    try {
      result = await GroceryModel.updateGrocery(id, name, price);
    } catch (error) {
      console.log(error);
    }

    return result;
  },

  async updateInventory(id: number, stock: number) {
    return await GroceryModel.updateInventory(id, stock);
  },

  async deleteGrocery(id: number) {
    return await GroceryModel.deleteGrocery(id);
  },
};
