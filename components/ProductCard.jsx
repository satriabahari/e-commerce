"use client";

import { addItemToCart } from "@/features/cart/cartSlice";
import Image from "next/image";
import { useDispatch } from "react-redux";

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

  const handleClickBuy = (product) => {
    dispatch(addItemToCart(product));
  };

  return (
    <div className="border rounded-xl flex flex-col justify-between items-center text-center gap-y-4 py-6 px-4 border-gray-400">
      <div className="bg-cover bg-center w-28 h-28">
        <Image
          src={image}
          alt={title}
          width={75}
          height={75}
          className="w-full h-full"
        />
      </div>
      <div className=" bg-gray-50 drop-shadow-lg p-4 rounded-md">
        <h5 className="text-xs text-gray-400 capitalize mb-2">{category}</h5>
        <h1 className="text-xs text-gray-800 uppercase">
          {title.length > 35 ? title.substring(0, 35) + "..." : title}
        </h1>
      </div>
      {/* <h3 className="text-xs text-gray-500">{description}</h3> */}
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
