import { ActionFunctionArgs, Form, redirect } from "react-router-dom";
import CenteredLayout from "../../Layout/CenteredLayout";
import fakeData from "./procdutFakeData";


export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  fakeData.push({
    id: fakeData.length + 1,
    name: formData.get("name") as string,
    price: Number(formData.get("price")),
    currency: formData.get("currency") as string,
    category: formData.get("category") as string,
    quantity: Number(formData.get("quantity")),
    image: formData.get("image") as string,
    description: formData.get("description") as string,
    reviews: "",
  });

  return redirect(`/products`);
}

export default function addProduct() {

  return (
    <CenteredLayout>
      <div className="h-full w-full md:w-3/4 md:h-5/6 overflow-y-auto overflow-x-hidden px-4 py-8 bg-white shadow-md rounded-md">

        <h1 className="w-full text-center text-3xl font-bold text-gray-900">New Product</h1>

        <Form method="POST" className="flex flex-col md:grid md:grid-cols-2 space gap-2 w-full mt-4">

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
            <textarea name="description" className="w-full px-4 py-2 mt-2 border rounded-md outline-none border-gray-300 focus:border-indigo-500" />
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


        </Form>

      </div >

    </CenteredLayout >
  )
}
