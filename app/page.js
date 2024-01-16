"use client";

import Header from "@/components/Header";
import Modal from "@/components/Modal";
import ProductList from "@/components/ProductList";
import { useState } from "react";
import CartModal from "@/components/CartModal";
import ButtonFilters from "@/components/ButtonFilters";
import FiltersModal from "@/components/FiltersModal";
import Category from "@/components/Category";

export default function Home() {
  const [cartModalIsOpen, setCartModalIsOpen] = useState(false);
  const [filtersModalIsOpen, setFilterModalIsOpen] = useState(false);

  const handleOpenModalCart = () => {
    setCartModalIsOpen(true);
  };

  const handleCloseModalCart = () => {
    setCartModalIsOpen(false);
  };

  const handleOpenModalFilters = () => {
    setFilterModalIsOpen(true);
  };

  const handleCloseModalFilters = () => {
    setFilterModalIsOpen(false);
  };

  return (
    <main className="bg-neutral-900">
      <Header handleOpenModalCart={handleOpenModalCart} />
      <div className="flex justify-between p-4">
        <Category/>
        <ButtonFilters handleOpenModalFilters={handleOpenModalFilters} />
      </div>
      <ProductList />

      {cartModalIsOpen ? (
        <Modal>
          <CartModal handleCloseModalCart={handleCloseModalCart} />
        </Modal>
      ) : null}

      {filtersModalIsOpen ? (
        <Modal>
          <FiltersModal handleCloseModalFilters={handleCloseModalFilters} />
        </Modal>
      ) : null}
    </main>
  );
}
