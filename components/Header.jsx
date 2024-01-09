"use client";

import Image from "next/image";
import CartIcon from "@/assets/cart.svg";
import { useSelector } from "react-redux";
import { selectedTotalItems } from "@/features/cart/cartSlice";

const Header = ({handleOpenModalCart}) => {
  const cartTotalItems = useSelector(selectedTotalItems)

  return (
    <header className="flex justify-between items-center px-16 py-4 bg-blue-500">
      <h3 className="text-gray-50">Satria Bahari</h3>
      <nav className="text-gray-50">
        <ul className="flex gap-x-4">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <button className="relative" onClick={handleOpenModalCart}>
        <Image src={CartIcon} alt="Cart Icon" height={25} width={25} />
        {cartTotalItems > 0 ? (
          <span className="w-5 h-5 bg-red-500 absolute rounded-full -top-2 -right-2 text-xs flex justify-center items-center text-gray-50">
            {cartTotalItems}
          </span>
        ) : null}
      </button>
    </header>
  );
};

export default Header;
