import { addDoc, arrayUnion, collection, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import Product from "./Product";
import { fireDB } from "../../firebase/firebase";
import IResponse from "../interface/IResponse";
import firebaseErrorHandler from "../Helpers/FirebaseErrorHandler";

class Item {
  #id: number = 0;
  #quantity: number = 0;

  constructor(id: number, quantity: number) {
    this.id = id;
    this.quantity = quantity;
  }

  // Get the item id
  get id(): number {
    return this.#id;
  }

  // Set the item id
  set id(value: number) {
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


  // #region Methods




  static async createCart(): Promise<Cart> {

    try {

      const cart = new Cart();

      const cartRef = await addDoc(collection(fireDB, Cart.CART_COLLECTION), {
        itmes: []
      });

      cart.id = cartRef.id;
      return cart;

    } catch (error) {
      throw error;
    }
  }

  // Add an item to the cart
  public async addItem(productId: string, quantity: number): Promise<IResponse<string | null>> {

    try {

      const cartRef = doc(fireDB, Cart.CART_COLLECTION, this.id);

      //TODO: ADJUST QUANTITY
      const updateArrayCompany = {
        items: arrayUnion({ id: productId, quantity })
      }

      await updateDoc(cartRef, updateArrayCompany);

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
      return firebaseErrorHandler(error);
    }

  }

  // Get cart items
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


      const fetchedProducts = await Product.getProductsByIds(cartData?.items.map((item: any) => item.id));


      let Temp = fetchedProducts?.data?.map((product: Product) => {
        let pro = product;
        const item = cartData?.items.find((item: any) => item.id === product.id);
        pro.quantity = item?.quantity;
        return pro;

      });

      console.log(fetchedProducts?.data);

      this.items = fetchedProducts.data || [];


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

  // Remove an item from the cart
  removeItem(): void {

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

  // Clear the cart
  clearCart(): void {
    this.items = [];
  }


  //#endregion

}
