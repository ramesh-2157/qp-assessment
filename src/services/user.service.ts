import { OrderModel } from "../models/order.model";
import { UserModel } from "../models/user.model";

export const UserService = {
  async createOrder(
    userId: number,
    items: { groceryId: number; quantity: number }[]
  ) {
    const order = await OrderModel.createOrder(userId);
    const orderId = order[0].id;

    for (const item of items) {
      await OrderModel.addOrderItems(orderId, item.groceryId, item.quantity);
    }

    return { orderId, message: "Order placed successfully" };
  },

  async getUserOrders(userId: number) {
    return await OrderModel.getUserOrders(userId);
  },

  async getUser() {
    let result = null;
    try {
      result = await UserModel.getUsers();
    } catch (error) {
      console.log(error);
    }

    return result;
  },
};
