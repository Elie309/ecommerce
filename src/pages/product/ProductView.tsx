import MainLayout from "../../Layout/MainLayout";
import IResponse from "../../logic/interface/IResponse";
import Product from "../../logic/Objects/Product";

import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";



export async function loader({ params }: LoaderFunctionArgs): Promise<IResponse> {
  try {

    const id = params.id as string;

    const response = await Product.getById(id);
    return response;

  } catch (error: any) {

    return {
      error: {
        message: error.message,
        code: error.name,
      },
      success: false,
      status: 500,
      data: [],
      message: "Error while fetching data"
    }

  }

}

//Create a display page for my product
export default function ProductView() {

  const response: IResponse = useLoaderData() as IResponse;


  const product = response.data as Product;

  return (

    <MainLayout className="bg-white">
      <div className="grid grid-cols-8 md:grid-cols-12">
        <div className="col-span-0 md:col-span-2">
        </div>

        <div className="col-span-8 px-10 md:px-2 py-10">

          <h2 className="text-2xl text-center mb-4 font-semibold mt-4">{product.name}</h2>

          <div className="flex justify-center">
            <img src={product.image} alt={product.name} className="w-48 h-48 object-contain" />
          </div>

          <p className="text-violet-600 mb-2 text-2xl">{product.price} {product.currency}</p>


          <p className="text-gray-700 mb-2">
            <strong>Category:</strong> {product.category}
          </p>

          <p className="text-gray-700 mb-4 text-justify">{product.description}</p>

          <p className="text-gray-700 mb-2">
            <strong>Reviews:</strong> {product.reviews}
          </p>

          {/* Button back shoping */}

          <div className="w-full grid md:grid-cols-2 place-items-center">
            <a
              className="w-full md:w-3/4 px-4 py-2 mt-4 text-sm font-medium
                            text-indigo-500 border-2 border-indigo-500 rounded-md
                              hover:bg-gray-100 text-center"
              href="/products"
            >Back to Shoping
            </a>
            <button className="w-full md:w-3/4 px-4 py-2 mt-4 
                    text-sm font-medium text-white bg-indigo-500 rounded-md
                  hover:bg-indigo-600">
              Add to Cart
            </button>
          </div>
        </div>

      </div>

      <div className="col-span-0 md:col-span-2"> </div>

    </MainLayout>

  )
}
