import { pool } from "../config/db";

export const OrderModel = {
  async createOrder(userId: number) {
    const result = await pool.query(
      "INSERT INTO orders (user_id) VALUES ($1) RETURNING *",
      [userId]
    );

    return result.rowCount ? result.rows : [];
  },

  async addOrderItems(orderId: number, groceryId: number, quantity: number) {
    const result = await pool.query(
      "INSERT INTO order_items (order_id, grocery_id, quantity) VALUES ($1, $2, $3) RETURNING *",
      [orderId, groceryId, quantity]
    );

    return result.rowCount ? result.rows : [];
  },

  async getUserOrders(userId: number) {
    const result = await pool.query(
      `SELECT o.id, o.created_at, oi.grocery_id, g.name, oi.quantity
       FROM orders o
       JOIN order_items oi ON o.id = oi.order_id
       JOIN groceries g ON oi.grocery_id = g.id
       WHERE o.user_id = $1`,
      [userId]
    );
    return result.rowCount ? result.rows : [];
  },
};
