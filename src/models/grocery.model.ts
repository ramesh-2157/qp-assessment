import { pool } from "../config/db";

export const GroceryModel = {
  async addGrocery(name: string, price: number, stock: number) {
    const result = await pool.query(
      "INSERT INTO groceries (name, price, stock) VALUES ($1, $2, $3) RETURNING *",
      [name, price, stock]
    );

    return result.rowCount ? result.rows : [];
  },

  async getAllGroceries() {
    const result = await pool.query("SELECT * FROM groceries");

    return result.rowCount ? result.rows : [];
  },

  async getGroceryById(id: number) {
    const result = await pool.query("SELECT * FROM groceries WHERE id = $1", [
      id,
    ]);

    return result.rowCount ? result.rows : [];
  },

  async updateGrocery(id: number, name: string, price: number) {
    const result = await pool.query(
      "UPDATE groceries SET name = $2, price = $3 WHERE id = $1 RETURNING *",
      [id, name, price]
    );

    return result.rowCount ? result.rows : [];
  },

  async updateInventory(id: number, stock: number) {
    const result = await pool.query(
      "UPDATE groceries SET stock = $1 WHERE id = $2 RETURNING *",
      [stock, id]
    );

    return result.rowCount ? result.rows : [];
  },

  async deleteGrocery(id: number) {
    const result = await pool.query("DELETE FROM groceries WHERE id = $1", [
      id,
    ]);

    return result.rowCount ? result.rows : [];
  },
};
