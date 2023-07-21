import Product from "./Product";

export default class Cart {
    
    private items: Product[];
  
    constructor() {
      this.items = [];
    }
  
    static addItemToCart(product: Product, userId: string): void {
      
    }
  
    removeItem(productId: string): void {
      this.items = this.items.filter(item => item.id !== productId);
    }
  
    getItems(): Product[] {
      return this.items;
    }
  
    getTotalPrice(): number {
      return this.items.reduce((total, item) => total + item.price, 0);
    }
  }
  