import { addDoc, arrayUnion, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import Product from "./Product";
import { fireDB } from "../../firebase/firebase";
import IResponse from "../interface/IResponse";

class ItemCart {
  #id: string = "";
  #quantity: number = 0;

  constructor(id: string, quantity: number) {
    this.id = id;
    this.quantity = quantity;
  }

  // Get the item id
  get id(): string {
    return this.#id;
  }

  // Set the item id
  set id(value: string) {
    this.#id = value;
  }

  // Get the item quantity
  get quantity(): number {
    return this.#quantity;
  }

  // Set the item quantity
  set quantity(value: number) {
    this.#quantity = value;
  }
}

export default class Cart {

  #id: string = "";
  #items: Product[] = [];

  static CART_COLLECTION = "cart";

  constructor(cardId?: string) {
    this.id = cardId || "";
    this.items = [];
  }

  //#region Getters & setters

  // Get the cart id
  get id(): string {
    return this.#id;
  }

  // Set the cart id
  set id(value: string) {
    this.#id = value;
  }

  // Get the cart items
  get items(): Product[] {
    return this.#items;
  }

  // Set the cart items
  set items(value: Product[]) {
    this.#items = value;
  }

  //#endregion

  //#region Simpe Methods

  public isCartEmpty(): boolean {
    return this.items.length === 0;
  }

  //#endregion


  // #region CRUD Methods

  /**
   * Create a new cart in the database and return the cart object with the ID set
   * @returns Promise<Cart> a new cart object
   */
  static async createCart(): Promise<Cart> {

    try {

      const cart = new Cart();

      const cartRef = await addDoc(collection(fireDB, Cart.CART_COLLECTION), {
        items: []
      });

      cart.id = cartRef.id;
      return cart;

    } catch (error) {
      throw error;
    }
  }

  /**
   * 
   * @param productId String id of the product to add to the cart
   * @param quantity Quantity of the product to add to the cart
   * @returns 
   */
  public async addItem(productId: string, quantity: number): Promise<IResponse<string | null>> {

    try {

      const cartRef = doc(fireDB, Cart.CART_COLLECTION, this.id);

      //TODO: ADJUST QUANTITY
      const updateArrayCart = {
        items: arrayUnion({ id: productId, quantity })
      }

      await updateDoc(cartRef, updateArrayCart);

      //No need to update the cart items, they will be updated when the cart is fetched

      return {
        error: {
          code: "",
          message: ""
        },
        message: "Item added to cart",
        status: 200,
        success: true,
        data: "Success"
      };


    } catch (error: any) {
      return {
        error: {
          code: "",
          message: ""
        },
        message: "Item not added to cart",
        status: 500,
        success: false,
        data: null
      };
    }

  }

  /**
   * Get the items in the cart from the database & update the cart items
   * Carts quantity is updated from the database
   * The Carts items are set to the fetched products
   * @returns IResponse<Product[] | null> either a list of products or null (nothing found)
   */
  async getItems(): Promise<IResponse<Product[] | null>> {

    try {

      const cartRef = doc(fireDB, Cart.CART_COLLECTION, this.id);

      const cartSnap = await getDoc(cartRef);



      if (!cartSnap.exists()) {
        return {
          error: {
            code: "",
            message: ""
          },
          message: "Cart not found",
          status: 404,
          success: false,
          data: []
        };
      }

      const cartData = cartSnap.data();

      const fetchedProducts = await Product.getProductsByIds(cartData?.items.map((item: ItemCart) => item.id));

      if (fetchedProducts.success) {

        let data = fetchedProducts.data || [];

        if (data.length > 0) {
          data = data.map((product: Product) => {
            const item: ItemCart = cartData.items.find((item: ItemCart) => {
              return item.id === product.id;
            });
            product.quantity = item?.quantity || 0;
            return product;
          })
        }

        this.items = data || [];
      }

      return {
        error: {
          code: "",
          message: ""
        },
        message: "Cart items",
        status: 200,
        success: true,
        data: this.items
      };

    } catch (error: any) {

      return {
        error: {
          code: "",
          message: ""
        },
        message: "Cart items",
        status: 200,
        success: true,
        data: null
      };

    }

  }

  /**
   * Remove an item from the cart - both from the database and the cart items
   * @param productId String id of the product to remove from the cart
   * @returns 
   */
  public async removeItem(productId: string): Promise<IResponse<string | null>> {


    try {

      const cartRef = doc(fireDB, Cart.CART_COLLECTION, this.id);

      const cartSnap = await getDoc(cartRef);

      if (!cartSnap.exists()) {
        return {
          error: {
            code: "",
            message: ""
          },
          message: "Cart not found",
          status: 404,
          success: false,
          data: null
        };
      }

      const cartData = cartSnap.data();

      const updateArrayCart = {
        items: cartData?.items.filter((item: ItemCart) => item.id !== productId)
      }

      await updateDoc(cartRef, updateArrayCart);

      this.items = this.items.filter((item: Product) => item.id !== productId);

      return {
        error: {
          code: "",
          message: ""
        },
        message: "Item removed from cart",
        status: 200,
        success: true,
        data: "Success"
      };

    } catch (error: any) {
      return {
        error: {
          code: "",
          message: ""
        },
        message: "Item couldn't be removed from cart",
        status: 500,
        success: false,
        data: null,
      };
    }


  }

  // Update the quantity of an item in the cart
  updateQuantity(): void {
  }

  // Get the total number of items in the cart
  getTotalItems(): number {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  // Get the total price of all items in the cart
  getTotalPrice(): number {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  /**
   * Clear cart items from the database & update the cart items
   * @returns IResponse<string | null> either a success message or null (nothing found)
   */
  public async clearCart(): Promise<IResponse<string | null>> {

    try {

      const cartRef = doc(fireDB, Cart.CART_COLLECTION, this.id);

      await updateDoc(cartRef, {
        items: []
      });

      this.items = [];

      return {
        error: {
          code: "",
          message: ""
        },
        message: "Cart cleared",
        status: 200,
        success: true,
        data: "Success"
      };

    } catch (error: any) {
      return {
        error: {
          code: error.code,
          message: error.message,
        },
        message: "Cart couldn't be cleared",
        status: 500,
        success: false,
        data: null,
      };
    }
  }


  //#endregion

}
