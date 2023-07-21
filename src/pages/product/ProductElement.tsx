
interface subElements {
    product: {
        id: number;
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
                <a
                    className="w-full px-4 py-2 mt-4 text-sm font-medium 
                          text-indigo-500 border-2 border-indigo-500 rounded-md
                            hover:bg-gray-100 text-center"
                    href={`/products/${product.id}`}

                >More Details</a>
                {/* Add to cart */}
                <button className="w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600">Add to Cart</button>
            </div>
        </div>
    )
}

