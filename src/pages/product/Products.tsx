import MainLayout from "../../Layout/MainLayout";
import fakeData from "./procdutFakeData";


/*
Below to make the main product page, where all products are listed and search available
*/
export default function Products() {

  const products = fakeData;

  return (
    <MainLayout>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-4">Product List</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-6">

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
          ))}
        </div>
      </div>

    </MainLayout>
  )
}
