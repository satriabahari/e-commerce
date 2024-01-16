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
    <div className="border-2 rounded-xl flex flex-col justify-between items-center text-center gap-y-4 py-6 px-4 border-neutral-700">
      <div className="bg-cover bg-center w-28 h-28 bg-neutral-50">
        <Image
          src={image}
          alt={title}
          width={75}
          height={75}
          className="w-full h-full"
        />
      </div>
      <div className=" bg-neutral-700 drop-shadow-lg p-4 rounded-md">
        <h5 className="text-xs text-gray-300 capitalize mb-2">{category}</h5>
        <h1 className="text-xs text-gray-50 uppercase">
          {title.length > 35 ? title.substring(0, 35) + "..." : title}
        </h1>
      </div>
      {/* <h3 className="text-xs text-gray-500">{description}</h3> */}
      <h2 className=" font-semibold text-gray-100">${price}</h2>
      <h3 className="text-xs text-gray-300">
        {rating.rate} | {rating.count} reviews
      </h3>
      <button
        className="uppercase py-2 px-4 bg-neutral-300 rounded-full text-gray-900 text-sm"
        onClick={() => handleClickBuy(product)}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
