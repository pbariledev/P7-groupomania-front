import React, { useState } from "react";
import Modal from "react-modal";
import ButtonsUpdate from "./ButtonsUpdate" ;

Modal.setAppElement("#root");

export default function ButtonModify() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="load_container">
      <button onClick={toggleModal}>modifier mon profil</button>

      <Modal isOpen={isOpen} onRequestClose={toggleModal} contentLabel="My dialog">
        <div>
          <ButtonsUpdate/>
        </div>
        <br />
        <button onClick={toggleModal}>Fermer</button>
      </Modal>
      
    </div>      
  );
}