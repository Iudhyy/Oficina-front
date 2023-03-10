import { useState } from "react"
import Modal from "react-modal";
import Head from "../../componentes/Head";
import Menu from "../../componentes/Menu";

export default function ListaProduto(){
        

 return(
<div className="dashboard-container">
    <Menu />
    <div className="principal">
    <Head title="estou na lista de produtos" />
    <h1>estou na Dashboard</h1>
 
 
 </div>
    </div>

 )   
}