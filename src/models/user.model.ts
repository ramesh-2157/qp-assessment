import { pool } from "../config/db";

export const UserModel = {
  async getUsers() {
    const result = await pool.query("SELECT * FROM users");
    return result.rowCount ? result.rows : [];
  },
};
