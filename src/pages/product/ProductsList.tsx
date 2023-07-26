import MainLayout from "../../components/Layout/MainLayout";
import IResponse from "../../logic/interface/IResponse";
import Product from "../../logic/Objects/Product";
import ProductElement from "./ProductElement";
import { useLoaderData } from "react-router-dom";


export async function loader(): Promise<IResponse>{

  try{

    const response = await Product.getAll();
    return response;

  }catch(error: any) {
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

/*
Below to make the main product page, where all products are listed and search available
*/
export default function ProductsList() {

  let response: IResponse = useLoaderData() as IResponse;

  if(response.status !== 200){

    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-semibold mb-4">Product List</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <h1 className="text-2xl font-semibold text-red-700 mb-4">{response.error.message}</h1>
          </div>
        </div>
      </MainLayout>
    )

  }

  const products = response.data as Product[];


  return (
    <MainLayout>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-4">Product List</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product: Product) => (
            <ProductElement key={product.id} product={product.toJson()} />
          ))}
        </div>
      </div>

    </MainLayout>
  )
}
