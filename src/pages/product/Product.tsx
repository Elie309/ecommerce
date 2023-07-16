//Create a page with the IProduct interface\
// import IProduct from "../../Objects/IProduct"

import MainLayout from "../../Layout/MainLayout";
import fakeData from "./procdutFakeData";

import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";


interface subElements {
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

export async function loader({ params }: LoaderFunctionArgs) {
  try {

    //transform the id from string to number
    if (params.id === undefined || params.id === null || params.id === "" || params.id === "0") {
      return {
        id: 0,
        name: "Error",
        price: 0,
        description: "Error",
        currency: "Error",
        image: "Error",
        category: "Error",
        quantity: 0,
        reviews: "Error",
      };
    }

    let ID = parseInt(params.id) - 1;

    const product: subElements = await fakeData[ID];
    return product;

  } catch (error) {

    return {
      id: 0,
      name: "Error",
      price: 0,
      description: "Error",
      currency: "Error",
      image: "Error",
      category: "Error",
      quantity: 0,
      reviews: "Error",
    };


  }

}

//Create a display page for my product
export default function Product() {

  const product = useLoaderData();

  const { name, price, description, currency, image, category, reviews } = product as subElements;

  return (

    <MainLayout>

      <div className="w-full bg-white rounded-lg shadow-md p-6">

        <h2 className="text-2xl text-center mb-4 font-semibold mt-4">{name}</h2>

        <div className="flex justify-center">
          <img src={image} alt={name} className="w-48 h-48 object-contain" />
        </div>

        <p className="text-violet-600 mb-2 text-2xl">{price} {currency}</p>

        
        <p className="text-gray-700 mb-2">
          <strong>Category:</strong> {category}
        </p>

        <p className="text-gray-700 mb-4">{description}</p>

        <p className="text-gray-700 mb-2">
          <strong>Reviews:</strong> {reviews}
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


    </MainLayout>

  )
}
