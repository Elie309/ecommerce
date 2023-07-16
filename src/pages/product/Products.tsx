import MainLayout from "../../Layout/MainLayout";
import ProductElement from "./ProductElement";
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
            <ProductElement key={product.id} {...product} />
          ))}
        </div>
      </div>

    </MainLayout>
  )
}
