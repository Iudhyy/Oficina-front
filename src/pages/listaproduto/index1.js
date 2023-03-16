import { useState, useEffect } from "react"
import Modal from "react-modal";
import Head from "../../componentes/Head";
import Menu from "../../componentes/Menu";
import api from "../../server/api";
import { FiEdit,FiTrash,FiDelete, FiFilePlus } from "react-icons/fi";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import { useNavigate,Link} from "react-router-dom";




export default function ListaProduto1(){
   const navigate=useNavigate();
   const [dados,setDados] = useState("");
   useEffect(()=>{
      listarproduto();
      
},[])
function editar(id){
navigate(`/editarproduto/${id}`)

}


   function editar(i){
      window.location.href=`/editarproduto/${i}`
     }

     function excluir(i,nome){
      confirmAlert({
          title: 'Excluir Usuário',
          message: `Deseja realmente excluir o cadastro de ${nome}`,
          buttons: [
            {
              label: 'Sim',
              onClick: () => {
                  // let dadosnovos = [];
                  // dadosnovos=dados.filter(item =>item.id!==i);
                  // setDados(dadosnovos);
                  // localStorage.setItem('cd-usuarios',JSON.stringify(dadosnovos));
                  api.delete(`/produto/${i}`)
                  .then(res => {});
                  listarproduto();
                  alert("Dados Deletados com Sucesso!");


              }
            },
            {
              label: 'Não',
              onClick: () => alert('Click No')
            }
          ]
        })
      }

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
      <div className="">
         <table>
            <tr>
               <th>ID</th>
               <th>nome</th>
               <th>Estoque Min.</th>
               <th>Unidade</th>
               <th>Categoria</th>
            </tr>
            <tr>
            {
                                dados.map((pro)=>{
                                    return(
                                    <tr key={pro.toString()}>
                                        <td>{pro.id_produto}</td>
                                        <td>{pro.nome_produto}</td>
                                        <td>{pro.qtd_minimo}</td>
                                        <td>{pro.unidade}</td>
                                        <td>{pro.categoria}</td>
                                        <td>
                                            <FiEdit
                                            color="blue"
                                            size={18}
                                            cursor="pointer"
                                            onClick={(e)=>editar(pro.id)}
                                            />
                                            
                                        </td>
                                        <td>
                                            <FiDelete
                                            color="red"
                                            size={18}
                                            onClick={(e)=>excluir(pro.id,pro.nome_produto)}
                                            cursor="pointer"
                                            />
                                            
                                            </td>
                                    </tr>
                                    )
                                })
                            }
            </tr>
            
         </table>
       
       
      </div>
 
 </div>
    </div>

 )   
}