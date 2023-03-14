import { useState } from "react"
import Modal from "react-modal";
import Head from "../../componentes/Head";
import Menu from "../../componentes/Menu";
import api from "../../server/api";

export default function ListaProduto(){

   const [ dados, setDados] = useState("");
        function listarproduto(){
         api.get('/produto')
         .then(res => {
           if(res.status==200){
               setDados(res.data.produto);
               console.log("Status"+res.status);
               console.log(res.data.mensagem);
           }else{
               console.log("houve um erro na requisição")
           }

         })  
         .catch(function (error) {
           console.log(error);
         });
        }

 return(
<div className="dashboard-container">
    <Menu />
    <div className="principal">
    <Head title="estou na lista de produtos" />
    <h1>lista de produtos</h1>
      <div className="div-produtos">
         <table>
            <tr>
               <th>ID</th>
               <th>nome</th>
               <th>Estoque Min.</th>
               <th>Unidade</th>
               <th>Categoria</th>
            </tr>
            <tr>
               <td></td>
            </tr>
            
         </table>
       
       
      </div>
 
 </div>
    </div>

 )   
}