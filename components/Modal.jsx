'use client'

import { useState } from "react";
import Modal from "react-modal";

const CartModal = ({handleOpenModalCart}) => {
  const [modalIsOpen, setIsOpen] = useState(true);
  const handleCloseModal = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
      >
        <div>
          Hello World
          <button onClick={handleCloseModal}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default CartModal;
