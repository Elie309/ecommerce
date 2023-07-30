import { useEffect, useState } from "react";
import Cart from "../../logic/Objects/Cart";
import Product from "../../logic/Objects/Product";

export default function CartItemRenderer(props: { cart: Cart | null, setCart: Function }) {

  const [loading, setLoading] = useState<boolean>(false);

  //Cart is handled in the parent component (if null, it will render a message)
  // const [cart, setCart] = useState<Cart | null>(null);
  const cart = props.cart;
  const setCart = props.setCart;

  useEffect(() => {
    setCart(props.cart);
  }, [cart])

  if (!cart || cart.items.length === 0) return <h1 className="text-2xl font-bold">Your cart is empty</h1>;

  const handleRemoveButton = async (item: Product) => {

    try {
      setLoading(true);
      const response = await cart.removeItem(item.id);

      if (response.success) {
        setCart(cart);
        props.setCart(cart);
      } else {
        alert(response.message);
      }

    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }

  }


  return cart.items.map((item, index) => {

    return (
      <div key={index} className="grid place-items-center grid-cols-5 align-middle gap-2 p-4 border-gray-300">
        <img src={item.image} alt={item.name} className="w-16 h-16 mr-4" />
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p>{item.description}</p>
        </div>
        <div className="text-lg mr-4">Qty: {item.quantity}</div>
        <div className="text-lg mr-4">Price: {item.price}</div>

        <button className={`px-4 py-2 text-white border-2 border-red-500
            bg-red-500 rounded-md hover:bg-transparent hover:text-red-500
            transition duration-300 ease-in-out
            ${loading ? "disabled:bg-opacity-50 disabled:hover:cursor-wait" : ""}`}
          onClick={() => handleRemoveButton(item)}
          disabled={loading}
        >
          Remove
        </button>
      </div>
    )
  });
}