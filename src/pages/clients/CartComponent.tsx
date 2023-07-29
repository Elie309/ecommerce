import { useEffect, useState } from "react";
import { useAuthValue } from "../../components/AuthProvider";
import MainLayout from "../../components/Layout/MainLayout";
import Cart from "../../logic/Objects/Cart";

export default function CartComponent() {

  const authProvider = useAuthValue();

  const [cart, setCart] = useState<Cart | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

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



  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Carts</h1>

        {loading && <p>Loading...</p>}
        {!loading && cart && <CartRenderer cart={cart} />}

      </div>
    </MainLayout>
  )
}


const CartRenderer = (props: { cart: Cart}) => {

 return props.cart.items.map((item, index) => {

    return (
      <div key={index} className="flex items-center align-middle p-4 space-x-6 border-gray-300">
        <img src={item.image} alt={item.name} className="w-16 h-16 mr-4" />
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p>{item.description}</p>
        </div>
        <div className="text-lg mr-4">Qty: {item.quantity}</div>
      </div>
    )
  });
}
