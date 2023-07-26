import IResponse from "../interface/IResponse";
import Product from "./Product";

export default class Cart {

  private _items: Product[] = [];
  private _userId: string = "";
  private _totalPrice: number = 0;
  private _totalItems: number = 0;
  private _totalDiscount: number = 0;
  private _totalTax: number = 0;


  constructor(items: Product[]) {
    this.items = items;
  }

  get items(): Product[] {
    return this._items;
  }

  set items(value: Product[]) {

    //TODO: Validation of the products
    this._items = value;
  }

  get userId(): string {
    return this._userId;
  }

  set userId(value: string) {
    this._userId = value;
  }

  get totalPrice(): number {
    return this._totalPrice;
  }

  set totalPrice(value: number) {
    this._totalPrice = value;
  }

  get totalItems(): number {
    return this._totalItems;
  }

  set totalItems(value: number) {
    this._totalItems = value;
  }

  get totalDiscount(): number {
    return this._totalDiscount;
  }

  set totalDiscount(value: number) {
    this._totalDiscount = value;
  }

  get totalTax(): number {
    return this._totalTax;
  }

  set totalTax(value: number) {
    this._totalTax = value;
  }


  static async addItemToCart(product: Product, quantity: number): Promise<IResponse<Product | null>> {
      
      try {

        const response = {
          error: {
            code: "",
            message: ""
          },
          success: true,
          status: 200,
          message: "Product added to cart",
          data: product
        }

        return response;
        
      } catch (error) {

        const response = {
          error: {
            code: "",
            message: ""
          },
          success: false,
          status: 500,
          message: "Error adding product to cart",
          data: null
        }

        return response;
        
      }



  }


  static async removeItemFromCart(product: Product, quantity: number): Promise<IResponse<Product | null>> {
        
      try {
  
        const response = {
          error: {
            code: "",
            message: ""
          },
          success: true,
          status: 200,
          message: "Product removed from cart",
          data: product
        }
  
        return response;
        
      } catch (error) {
  
        const response = {
          error: {
            code: "",
            message: ""
          },
          success: false,
          status: 500,
          message: "Error removing product from cart",
          data: null
        }
  
        return response;
        
      }

    }

    static async getCart(userId: string): Promise<IResponse<Cart | null>> {

      try {

        const response = {
          error: {
            code: "",
            message: ""
          },
          success: true,
          status: 200,
          message: "Cart retrieved",
          data: null
        }

        return response;
        
      } catch (error) {

        const response = {
          error: {
            code: "",
            message: ""
          },
          success: false,
          status: 500,
          message: "Error retrieving cart",
          data: null
        }

        return response;
        
      }

    }

    static async updateCart(cart: Cart): Promise<IResponse<Cart | null>> {
        
        try {
  
          const response = {
            error: {
              code: "",
              message: ""
            },
            success: true,
            status: 200,
            message: "Cart updated",
            data: null
          }
  
          return response;
          
        } catch (error) {
  
          const response = {
            error: {
              code: "",
              message: ""
            },
            success: false,
            status: 500,
            message: "Error updating cart",
            data: null
          }
  
          return response;
          
        }
  
      }

      
      static async deleteCart(userId: string): Promise<IResponse<Cart | null>> {
        
        try {
  
          const response = {
            error: {
              code: "",
              message: ""
            },
            success: true,
            status: 200,
            message: "Cart deleted",
            data: null
          }
  
          return response;
          
        } catch (error) {
  
          const response = {
            error: {
              code: "",
              message: ""
            },
            success: false,
            status: 500,
            message: "Error deleting cart",
            data: null
          }
  
          return response;
          
        }
  
      }

      


}
