import { useSelector } from "react-redux";
import Image from "next/image";
import { useDispatch } from "react-redux";
import {
  addItemToCart,
  minItemToCart,
  removeItemFromCart,
  selectedCartItems,
  selectedTotalItems,
  selectedTotalPrice,
} from "@/features/cart/cartSlice";

const CartModal = ({ handleCloseModalCart }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectedCartItems);
  const totalItems = useSelector(selectedTotalItems);
  const totalPrice = useSelector(selectedTotalPrice);

  const handleAddQuantity = (item) => {
    dispatch(addItemToCart(item));
  };

  const handleMinQuantity = (item) => {
    dispatch(minItemToCart(item));
  };

  const handleClearCartItems = (item) => {
    dispatch(removeItemFromCart(item))
  }

  return (
    <div className="w-[500px] flex flex-col gap-4">
      <button onClick={handleCloseModalCart}>X</button>
      {cartItems.map((item) => {
        return (
          <div key={item.id} className="flex justify-between">
            <div className="flex">
              <Image src={item.image} alt={item.title} width={50} height={50} className="w-28 h-28 bg-cover"/>
              <div>
                <h3>{item.title}</h3>
                <h4>{item.category}</h4>
                <h3>${item.price} USD</h3>
              </div>
            </div>
            <div>
              <button onClick={() => handleClearCartItems(item)}>X</button>
              <div className="flex gap-x-4">
                <button onClick={() => handleMinQuantity(item)}>-</button>
                <p>{item.quantity}</p>
                <button onClick={() => handleAddQuantity(item)}>+</button>
              </div>
            </div>
          </div>
        );
      })}
      <h2>{totalPrice}</h2>
      <button className="w-full bg-green-500 rounded-lg py-2">Checkout</button>
    </div>
  );
};

export default CartModal;
