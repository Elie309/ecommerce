import { ActionFunctionArgs, Form, useActionData } from "react-router-dom";
import CenteredLayout from "../../Layout/CenteredLayout";
import Product from "../../Objects/Product";
import IResponse from "../../Objects/IResponse";


export async function action({ request }: ActionFunctionArgs): Promise<IResponse> {
  const formData = await request.formData();


  try {

    let price = parseInt(formData.get("price") as string);


    let product = new Product(
      formData.get("name") as string,
      price,
      formData.get("currency") as string,
      formData.get("description") as string,
      formData.get("image") as string,
      formData.get("category") as string,
    )

    

    const response = await product.save()

    if (response.status !== 201) return response;


    return response;


  } catch (error: any) {

    return {
      status: 500,
      data: error.message,
      success: false,
      message: error.message,
      error: {
        message: error.message,
        code: error.code,
      }
    }


  }
}

export default function addProduct() {

  const actionData = useActionData();

  let data: IResponse | null = null
  if (actionData) {
    data = actionData as IResponse;

    if (data.status === 200) {
      //REset all fields
      document.querySelectorAll("input").forEach(input => input.value = "");
      const descrption = document.querySelector("#description") as HTMLTextAreaElement;
      if(descrption){
        descrption.value = "";
      }
      
      const selectCurrency = document.querySelector('#currency') as HTMLSelectElement;
      if(selectCurrency){
        selectCurrency.value = selectCurrency.options[0].value;
      }
      const selectCategory = document.querySelector('#category') as HTMLSelectElement;
      if(selectCategory){
        selectCategory.value = selectCategory.options[0].value;
      }
    }
  }


  return (
    <CenteredLayout>
      <div className="h-full w-full md:w-3/4 overflow-y-auto overflow-x-hidden px-4 py-8 bg-white shadow-md rounded-md">

        <h1 className="w-full text-center text-3xl font-bold text-gray-900">New Product</h1>

        <Form method="POST" className="flex flex-col md:grid md:grid-cols-2 gap-2 w-full mt-4">

          {/* NAME */}
          <div>
            <label className="text-sm font-semibold text-gray-500">Name</label>
            <input name="name"
              className="w-full px-4 py-2 mt-2 border rounded-md 
                              outline-none border-gray-300 focus:border-indigo-500"
              type="text"
            />
          </div>

          {/* PRICE & CURRENCY */}
          <div className="md:grid-cols-2 flex flex-row">
            <div className="mr-2">
              <label className="mt-4 text-sm font-semibold text-gray-500">Price</label>
              <input name="price" className="w-full px-4 py-2 mt-2 border rounded-md outline-none border-gray-300 focus:border-indigo-500" type="number" />
            </div>
            <div>
              <label className="mt-4 text-sm font-semibold text-gray-500">Currency</label>
              <select
                className="w-full px-4 py-2 mt-2 border rounded-md outline-none
                border-gray-300 focus:border-indigo-500
                text-gray-600"
                name="currency" id="currency">

                <option value="USB" defaultChecked>USD</option>
                <option value="EUR">EUR</option>
                <option value="LBP">LBP</option>
              </select>
            </div>

          </div>


          {/* CATEGORY */}
          <div>
            <label className="mt-4 text-sm font-semibold text-gray-500">Category</label>
            <select
              className="w-full px-4 py-2 mt-2 border rounded-md outline-none 
                border-gray-300 focus:border-indigo-500
                text-gray-600"
              name="category" id="category">
              <option value="Category 1">Category 1</option>
              <option value="Category 1">Category 2</option>
              <option value="Category 1">Category 3</option>
            </select>
          </div>

          <div>
            {/* QUANTITY */}
            <label className="mt-4 text-sm font-semibold text-gray-500">Quantity</label>
            <input name="quantity" className="w-full px-4 py-2 mt-2 border rounded-md outline-none border-gray-300 focus:border-indigo-500" type="number" />
          </div>

          {/* IMAGE */}
          <div className="my-2 ml-2">
            <label className="mt-4 text-sm font-semibold text-gray-500">Image</label>
            <input className="w-full py-2 mt-2" name="image" type="file" />
          </div>

          {/* DESCRIPTION */}
          <div className="col-span-2">
            <label className="mt-4 text-sm font-semibold text-gray-500">Description</label>
            <textarea id="description" name="description" className="w-full px-4 py-2 mt-2 border rounded-md outline-none border-gray-300 focus:border-indigo-500" />
          </div>

          {/* SUBMIT */}


          <div className="col-span-2 w-full flex flex-row justify-around">

            <a
              className="w-2/6 px-4 py-2 mt-4 ml-2 text-center text-indigo-500 
                border-2 border-indigo-500 rounded-md 
                hover:bg-gray-200 text-sm font-medium"
              href="/products"
            >
              Cancel
            </a>

            <button
              className="w-2/6 px-4 mr-2
                          cursor-pointer
                          py-2 mt-4 text-sm font-medium 
                          border-2 border-indigo-500 hover:border-indigo-600
                          text-white bg-indigo-500 rounded-md hover:bg-indigo-600"
              type="submit"

            >
              Add Product
            </button>

          </div>

          {data && <div className="col-span-2 w-full flex flex-row justify-center">
            <p className="text-red-500 text-xl">{data.message}</p>
          </div>}


        </Form>

      </div >

    </CenteredLayout >
  )
}
