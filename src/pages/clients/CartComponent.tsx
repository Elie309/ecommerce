import { useEffect, useState } from "react";
import { useAuthValue } from "../../components/AuthProvider";
import MainLayout from "../../components/Layout/MainLayout";
import Cart from "../../logic/Objects/Cart";
import Loading from "../../components/Loading";
import CartItemRenderer from "./CartItemRenderer";

export default function CartComponent() {

  const authProvider = useAuthValue();

  const [cart, setCart] = useState<Cart | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [cartIsEmpty, setCartIsEmpty] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);

    const getCart = async () => {
      try {

        //TODO: REMOVE ALERT
        if (!authProvider.cardId) return alert("Please login to check your cart");

        const cart = new Cart(authProvider.cardId);
        const response = await cart.getItems();

        if (response.success) {
          setCart(cart);
          setCartIsEmpty(cart.isCartEmpty());
        } else {
          alert(response.message);
        }

      } catch (error: any) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    }

    getCart();


  }, [])


  const clearCart = async () => {
    setLoading(true);
    try {

      if (!cart) return alert("Cart is empty");

      const response = await cart.clearCart();

      if (response.success) {
        setCart(cart);
        setCartIsEmpty(true);
      } else {
        alert(response.message);
      }

    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }

  }

  if (loading) {

    return (
      <MainLayout>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold">Carts</h1>
          <Loading />
        </div>
      </MainLayout>
    )
  }



  return (
    <MainLayout>
      <div className="h-full w-full flex flex-col justify-between">



        <div className="w-full my-6 flex flex-row justify-around">


          <button className="w-5/12 md:w-4/12 mx-2 px-4 py-2 bg-transparent border-2
                       border-red-500 text-red-500 rounded-md
                        disabled:cursor-not-allowed
                        hover:bg-red-500 hover:text-white
                        transition duration-150 ease-in-out
                        disabled:hover:bg-transparent disabled:hover:text-red-500
                        disabled:hover:text-opacity-50
                        disabled:text-opacity-50 
                        disabled:border-opacity-50"
            disabled={cartIsEmpty}
            onClick={clearCart}
          >
            Clear Cart
          </button>





          <button className="w-5/12 md:w-4/12 mx-2 px-4 py-2 bg-transparent 
                      border-2 border-blue-500 text-blue-500 rounded-md
                      transition duration-150 ease-in-out
                      hover:bg-blue-500 hover:text-white
                      "
            onClick={() => window.location.href = "/products"}
          >
            Continue Shopping
          </button>
        </div>

        <div className="overflow-x-hidden text-center">

          <CartItemRenderer cart={cart} setCart={(cart: Cart) => {
            setCart(cart);
            setCartIsEmpty(cart.isCartEmpty());
          }} />

        </div>


        <div className="w-full my-6 flex flex-row justify-around">



          <button className="w-5/12 md:w-4/12 mx-2 px-4 py-2 mt-auto text-white 
                        bg-yellow-500 border-2 border-yellow-500
                        rounded-md hover:bg-transparent hover:text-yellow-500
                        transition duration-150 ease-in-out
                        disabled:hover:bg-yellow-500 disabled:hover:text-white
                        disabled:hover:bg-opacity-50
                        disabled:border-opacity-50
                        disabled:cursor-not-allowed
                        disabled:bg-opacity-50"
            disabled={cartIsEmpty}
          >
            Request Offer
          </button>


          <button className="w-5/12 md:w-4/12 mx-2 px-4 py-2 text-white 
                  bg-indigo-500 rounded-md 
                  border-2 border-indigo-500 disabled:border-opacity-50
                  disabled:bg-opacity-50 disabled:cursor-not-allowed
                  transition duration-150 ease-in-out
                  hover:bg-indigo-700 hover:border-indigo-700
                  disabled:hover:bg-indigo-500 disabled:hover:border-indigo-500
                  disabled:hover:bg-opacity-50 disabled:hover:border-opacity-50
                  "
            disabled={cartIsEmpty}
          >
            Checkout
          </button>

        </div>

      </div>
    </MainLayout>
  )
}


