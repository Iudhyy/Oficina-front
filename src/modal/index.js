import { useState } from "react";
import Modal from "react-modal";
export default function Modal(){

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }


    return(
        <div className="Container">
            <button onClick={openModal}>openModal</button>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="example Modal"
            overlayClassname="modal-overlay"
            className="modal-content"


            >
                <h2>hello modal</h2>
                <button onClick={closeModal}>close</button>
            </Modal>

        </div>
    )

}
