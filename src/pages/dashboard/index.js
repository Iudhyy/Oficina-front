import { useState } from "react"
import Modal from "react-modal";
import Head from "../../componentes/Head";
import Menu from "../../componentes/Menu";

export default function Dashboard(){

    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

 return(
<div className="dashboard-container">
    <Menu />
    <div className="principal">
    <Head title="estou no Dashboard" />
    <h1>estou na Dashboard</h1>
    <div className="container">
     <button className="modal-btn" onClick={openModal}>openModal</button>
     <Modal
     isOpen={modalIsOpen}
     onRequestClose={closeModal}
     contentLabel="example Modal"
     overlayClassname="modal-overlay"
     className="modal-content"
     >
         <h2>hello modal</h2>
         <hr/>
         <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
         <button onClick={closeModal}>close</button>
     </Modal>
 </div>
    </div>
    
</div>

 )   
}