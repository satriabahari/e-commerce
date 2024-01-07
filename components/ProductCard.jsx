"use client";

import { addItemToCart } from "@/features/cart/cartSlice";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";

const ProductCard = ({
  product,
  image,
  title,
  category,
  description,
  price,
  rating,
}) => {
  const dispatch = useDispatch();
  const currentItem = useSelector((state) => state.cart.items);

  const handleClickBuy = (product) => {
    dispatch(addItemToCart(product));
  };

  return (
    <div className="border rounded-xl flex flex-col items-center text-center gap-y-4 p-4">
      <Image src={image} alt={title} width={75} height={75} />
      <div className="uppercase bg-gray-50 drop-shadow-lg p-4 rounded-md">
        <h5 className="text-xs text-gray-400">{category}</h5>
        <h1 className="text-sm text-gray-800">{title}</h1>
      </div>
      <h3 className="text-xs text-gray-500">{description}</h3>
      <h2 className=" font-semibold">${price}</h2>
      <h3 className="text-xs text-gray-500">
        {rating.rate} | {rating.count} reviews
      </h3>
      <button
        className="uppercase py-2 px-4 bg-blue-500 rounded-full text-gray-50 text-sm"
        onClick={() => handleClickBuy(product)}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
