import { useState } from "react";
import { useAuthValue } from "../../components/AuthProvider";
import Cart from "../../logic/Objects/Cart";

interface subElements {
    product: {
        id: string;
        name: string;
        price: number;
        currency: string;
        description: string;
        image: string;
        category: string;
        quantity: number;
        reviews: string;

    }
}

export default function ProductElement(props: subElements) {

    const product = props.product;
    const authProvider = useAuthValue();

    const [loading, setLoading] = useState<boolean>(false);


    const addToCart = async () => {
        setLoading(true);
        try {

            if(!authProvider.cardId) return alert("Please login to add items to cart");


            const cart = new Cart(authProvider.cardId);
            const response = await cart.addItem(product.id, 1);

            if (response.success) {
                alert("Item added to cart");
            } else {
                alert(response.message);
            }

        } catch (error: any) {
            alert(error.message);
        }finally{
            setLoading(false);
        }

    }

    return (
        <div className="bg-white rounded-lg shadow-md p-6">

            {/* Image */}
            <div className="flex justify-center">
                <img src={product.image} alt={product.name} className="w-48 h-48 object-contain" />
            </div>

            {/* Name */}
            <h2 className="text-xl font-semibold mt-4">{product.name}</h2>

            <p className="text-violet-500 text-2xl mb-2">
                {product.currency} {product.price}
            </p>

            {/* Description */}
            <p className="text-gray-700 mb-4 truncate ">{product.description}</p>

            {/* Category */}
            <p className="text-gray-700 mb-2">
                <strong>Category:</strong> {product.category}
            </p>

            {/* Reviews */}
            <p className="text-gray-700 mb-2">
                <strong>Reviews:</strong> {product.reviews}
            </p>


            <div className="grid grid-cols-2 gap-2">
                {/* More details */}
                <button
                    className="w-full px-4 py-2 mt-4 text-sm font-medium 
                          text-indigo-500 border-2 border-indigo-500 rounded-md
                          disabled:opacity-50 disabled:hover:cursor-wait
                            hover:bg-gray-100 text-center"
                    onClick={() => {
                        window.location.href = `/product/${product.id}`
                    }}
                    disabled={loading}
                >More Details</button>
                {/* Add to cart */}
                <button
                    className="w-full px-4 py-2 mt-4 text-sm font-medium 
                        text-white 
                        disabled:opacity-50 disabled:hover:cursor-wait
                        
                        bg-indigo-500 rounded-md hover:bg-indigo-600"
                    onClick={addToCart}
                    disabled={loading}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

