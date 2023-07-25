import MainLayout from "../Layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl text-gray-800 text-center mt-5">Best Sellers</h1>

        <a href="/products" className="text-center text-blue-500 text-xl">See all products</a>

      </div>

    </MainLayout>
  )
}
