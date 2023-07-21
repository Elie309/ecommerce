import Cart from "./Cart";
import User from "./User";

export default class Order {
    private orderId: number;
    private user: User;
    private cart: Cart;
    private totalAmount: number;
  
    constructor(orderId: number, user: User, cart: Cart) {
      this.orderId = orderId;
      this.user = user;
      this.cart = cart;
      this.totalAmount = cart.getTotalPrice();
    }
  
    getOrderID(): number {
      return this.orderId;
    }
  
    getUser(): User {
      return this.user;
    }
  
    getCart(): Cart {
      return this.cart;
    }
  
    getTotalAmount(): number {
      return this.totalAmount;
    }
  }