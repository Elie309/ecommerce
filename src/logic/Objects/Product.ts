//create class ProductClass with the following properties
// 1. id
// 2. name
// 3. price
// 4. description
// 5. image
// 6. category
// 7. quantity
// 8. isAvailable
// 9. reviews
// 10. rating
// 11. discount
// 12. color
// 13. size
// 14. isTodayOffer
// 15. todayOfferEndDate
// 16. isFeatured
// 17. isLatest
// 18. isNewArrival
// 19. isOnSale
// 20. views
// 21. dateAdded
// 22. dateModified
// 23. status
// 24. createdBy
// 25. modifiedBy
// 26. isDeleted
// 27. deletedBy
// 28. deletedDate
// 29. productVariants
// 30. productImages
// 31. productTags
// 32. productReviews
// 33. productRelated

import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { fireDB } from "../../firebase/firebase";
import IResponse from "../interface/IResponse";


const PRODUCT_COLLECTION = 'products';

export default class Product {

  #id: string = '';
  #name: string = '';
  #price: number = 0;
  #currency: string = '';
  #description: string = '';
  #features: { [key: string]: string; } = {}
  #image = '';
  #category: string = '';
  #quantity: number = 0;
  #isAvailable:boolean = true;
  #reviews: string = '';

  constructor(name: string, price: number, currency: string, description: string, image: string, category: string) {
    this.name = name;
    this.price = price;
    this.currency = currency;
    this.description = description;
    this.image = image;
    this.category = category;
  }

  //#region SETTERS AND GETTERS



  // Setter and getter for 'id'
  set id(value) {
    if (typeof value !== 'string') {
      throw new Error('Invalid id. Must be a string.');
    }
    this.#id = value;
  }
  get id() {
    return this.#id;
  }

  // Setter and getter for 'name'
  set name(value) {
    if (typeof value !== 'string') {
      throw new Error('Invalid name. Must be a string.');
    }
    if (value.length < 3 || value.length > 250) {
      throw new Error('Invalid name. Must be between 3 and 250 characters.');
    }

    this.#name = value;
  }
  get name() {
    return this.#name;
  }

  // Setter and getter for 'price'
  set price(value) {
    try{
      value = Number(value);
      if (typeof value !== 'number' || value < 0) {
        throw new Error('Invalid price. Must be a positive number.');
      }
    }catch(e){
      throw new Error('Invalid price. Must be a positive number.');
    }
    
    this.#price = value;
  }
  get price() {
    return this.#price;
  }

  // Setter and getter for 'currency'
  set currency(value) {
    if (typeof value !== 'string' || !/^[A-Z]{3}$/.test(value)) {
      throw new Error('Invalid currency. Must be a 3-letter uppercase code.');
    }
    this.#currency = value;
  }
  get currency() {
    return this.#currency;
  }

  // Setter and getter for 'description'
  set description(value) {
    if (typeof value !== 'string') {
      throw new Error('Invalid description. Must be a string.');
    }
    this.#description = value;
  }
  get description() {
    return this.#description;
  }

  // Setter and getter for 'image'
  set image(value) {
    if (typeof value !== 'string') {
      throw new Error('Invalid image. Must be a string.');
    }
    this.#image = value;
  }
  get image() {
    return this.#image;
  }

  // Setter and getters for 'features'
  set features(value: { [key: string]: string; }) {
    if (typeof value !== 'object') {
      throw new Error('Invalid features. Must be an object.');
    }
    this.#features = value;
  }

  get features() {
    return this.#features;
  }

  // Setter and getter for 'category'
  set category(value) {
    if (typeof value !== 'string') {
      throw new Error('Invalid category. Must be a string.');
    }
    this.#category = value;
  }
  get category() {
    return this.#category;
  }

  // Setter and getter for 'quantity'
  set quantity(value) {
    if (typeof value !== 'number' || value < 0) {
      throw new Error('Invalid quantity. Must be a non-negative number.');
    }
    this.#quantity = value;
  }
  get quantity() {
    return this.#quantity;
  }

  // Setter and getter for 'isAvailable'
  set isAvailable(value) {
    if (typeof value !== 'boolean') {
      throw new Error('Invalid isAvailable. Must be a boolean.');
    }
    this.#isAvailable = value;
  }
  get isAvailable() {
    return this.#isAvailable;
  }

  // Setter and getter for 'reviews'
  set reviews(value) {
    if (typeof value !== 'string') {
      throw new Error('Invalid reviews. Must be a string.');
    }
    this.#reviews = value;
  }

  get reviews() {
    return this.#reviews;
  }
  //#endregion


  //#region JSON Method

  //Method to create object of Product class using json object
  static fromJson(json: any): Product {
    return new Product(json.name, json.price, json.currency, json.description, json.image, json.category);
  }

  //Method to create json object from Product class object
  toJson(): any {
    return {
      id: this.id,
      name: this.name,
      price: this.price,
      description: this.description,
      currency: this.currency,
      features: this.features,
      image: this.image,
      category: this.category,
      quantity: this.quantity,
      isAvailable: this.isAvailable,
      reviews: this.reviews
    };
  }

  //#endregion

  //#region CRUD Methods

  //Method to addDoc the firebase
  async save(): Promise<IResponse<string | null>> {

    try {

      const docRef = await addDoc(collection(fireDB, PRODUCT_COLLECTION), this.toJson());

      if (docRef.id) {
        return {
          success: true,
          status: 201,
          message: "Product added successfully",
          data: docRef.id,
          error: {
            code: "",
            message: ""
          }
        }

      } else {
        return {
          success: false,
          status: 500,
          message: "Product not added",
          data: null,
          error: {
            code: "unknown",
            message: "Error while adding product to database"
          }
        }
      }

    } catch (error: any) {
      return {
        success: false,
        status: 500,
        message: "Product not added",
        data: null,
        error: {
          code: error.code,
          message: error.message
        }
      }
    }



  }

  //GetAll
  static async getAll(): Promise<IResponse<Product[] | null>> {

    try {

      const products: Product[] = [];
      const productsCollection = collection(fireDB, PRODUCT_COLLECTION);

      const productsSnapshot = await getDocs(productsCollection);




      productsSnapshot.forEach((doc: any) => {

        let product = new Product(doc.data().name, doc.data().price, doc.data().currency, doc.data().description, doc.data().image, doc.data().category);
        product.id = doc.id;
        product.quantity = doc.data().quantity;
        product.isAvailable = doc.data().isAvailable;
        product.reviews = doc.data().reviews;

        products.push(product);
      });


      return {
        success: true,
        status: 200,
        message: "Products fetched successfully",
        data: products,
        error: {
          code: "",
          message: ""
        }
      }

    } catch (error: any) {
      return {
        success: false,
        status: 500,
        message: "Products not fetched",
        data: null,
        error: {
          code: error.code,
          message: error.message
        }
      }
    }

  }

  //GetById
  static async getById(id: string): Promise<IResponse<Product | null>> {

    try {

      const docRef = doc(fireDB, PRODUCT_COLLECTION, id);


      const docSnap = await getDoc(docRef);


      if (!docSnap.exists() || docSnap.data() === undefined) {

        return {
          success: false,
          status: 404,
          message: "Product not found",
          data: null,
          error: {
            code: "not-found",
            message: "Product not found"
          }

        }

      }



      let product = new Product(docSnap.data().name, docSnap.data().price, docSnap.data().currency, docSnap.data().description, docSnap.data().image, docSnap.data().category);
      product.id = id;
      product.quantity = docSnap.data()!.quantity;
      product.isAvailable = docSnap.data().isAvailable;
      product.reviews = docSnap.data().reviews;





      return {
        success: true,
        status: 200,
        message: "Products fetched successfully",
        data: product,
        error: {
          code: "",
          message: ""
        }
      }

    } catch (error: any) {
      return {
        success: false,
        status: 500,
        message: "Product not fetched",
        data: null,
        error: {
          code: error.code,
          message: error.message
        }
      }
    }


  }

  static async getProductsByIds(ids: string[]): Promise<IResponse<Product[] | null>> {
    try{
        
        const products: Product[] = [];
        const productsCollection = collection(fireDB, PRODUCT_COLLECTION);
        const productsSnapshot = await getDocs(productsCollection);
        productsSnapshot.forEach((doc: any) => {
          if(ids.includes(doc.id)){
            let product = new Product(doc.data().name, doc.data().price, doc.data().currency, doc.data().description, doc.data().image, doc.data().category);
            product.id = doc.id;
            product.quantity = doc.data().quantity;
            product.isAvailable = doc.data().isAvailable;
            product.reviews = doc.data().reviews;
            products.push(product);
          }
        });
        return {
          success: true,
          status: 200,
          message: "Products fetched successfully",
          data: products,
          error: {
            code: "",
            message: ""
          }
        }
    }catch(e: any){
      return {
        success: false,
        status: 500,
        message: "Products not fetched",
        data: null,
        error: {
          code: e.code,
          message: e.message
        }
      }
    }

  }

  //Update
  //Delete



  //#endregion



}