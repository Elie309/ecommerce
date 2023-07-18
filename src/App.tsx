import MainLayout from "./Layout/MainLayout"
// import ProductElement from "./pages/product/ProductElement";


function App() {

  return (
    <MainLayout>
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl text-gray-800 text-center mt-5">Best Sellers</h1>

        <a href="/products" className="text-center text-blue-500 text-xl">See all products</a>

      </div>


{/*       <div className="m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductElement key={product.id} {...product} />
        ))} 
      </div>*/}

    </MainLayout>
  )
}

export default App
