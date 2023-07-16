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




export default class ProductClass {

    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
    quantity: number;
    isAvailable: boolean;
    reviews: string;

    constructor(id: number, name: string, price: number, description: string, image: string, category: string, quantity: number, isAvailable: boolean, reviews: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
        this.category = category;
        this.quantity = quantity;
        this.isAvailable = isAvailable;
        this.reviews = reviews;
    }

    //method to get the product id
    getProductId(): number {
        return this.id;
    }

    //method to get the product name
    getProductName(): string {
        return this.name;
    }
    
    //method to get the product price
    getProductPrice(): number {
        return this.price;
    }

    //method to get the product description
    getProductDescription(): string {
        return this.description;
    }

    //method to get the product image
    getProductImage(): string {
        return this.image;
    }

    //method to get the product category
    getProductCategory(): string {
        return this.category;
    }

    //method to get the product quantity
    getProductQuantity(): number {
        return this.quantity;
    }

    //method to get the product availability
    getProductAvailability(): boolean {
        return this.isAvailable;
    }

    //method to get the product reviews
    getProductReviews(): string {
        return this.reviews;
    }

    //Method to create object of Product class using json object
    static fromJson(json: any): ProductClass {
        return new ProductClass(json.id, json.name, json.price, json.description, json.image, json.category, json.quantity, json.isAvailable, json.reviews);
    }

    //Method to create json object from Product class object
    toJson(): any {
        return {
            id: this.id,
            name: this.name,
            price: this.price,
            description: this.description,
            image: this.image,
            category: this.category,
            quantity: this.quantity,
            isAvailable: this.isAvailable,
            reviews: this.reviews
        };
    }



}