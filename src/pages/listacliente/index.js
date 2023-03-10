import React, {useState,useEffect} from "react";
import Head from "../../componentes/Head";
import Menu from "../../componentes/Menu";
import {FiEdit,FiDelete,FiFilePlus,FiTrash2} from "react-icons/fi";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useNavigate,Link} from "react-router-dom";

export default function Listacliente(){
    const navigate=useNavigate();
      const [dados,setDados]=useState([]);
      const [row,setRow] = useState(0);
      useEffect(()=>{
                  mostrardados();
      },[])
  
      function editar(id){
          navigate(`/editarcliente/${id}`)
          
      }
      
      function excluir(id) {
          confirmAlert({
            title: 'Atenção',
            message: 'Desejar realmente excluir cadastro?',
            buttons: [
              {
                label: 'Não',
                onClick: () => alert('Click Não')
              },
              {
                label: 'Sim',
                onClick: () => {
                  let dadosnovos = [];
                  dadosnovos = dados.filter(item=>item.id!=id);
                  setDados(dadosnovos);
                  localStorage.setItem('cad-cliente',JSON.stringify(dadosnovos));
                  setRow(dadosnovos.length);
                }
              }
            ]
          });
        };
  
  
      function mostrardados(){
          let lista =JSON.parse(localStorage.getItem("cad-cliente")||"[]");
          setDados(lista);
          setRow(lista.length);
      }
  
   return(
  <div className="dashboard-container">
      <Menu />
  
      <div className="principal">
      <Head title="Lista de Clientes" />
        <div className="button_new">
         <a href="/cadastrocliente">
         <FiFilePlus
            size={24}
            color="green"
            cursor="pointer"
          />
         </a>
        </div>
              <table>
                  <tr>
                      <th>Id</th>
                      <th>Nome</th>
                      <th>CPF</th>
                      <th>Email</th>
                      <th>Contato</th>
                      <th>Veiculo</th>
                      <th>Placa</th>
                      <th></th>
                  </tr>
                  {
                      dados.map((usu)=>{
                          return(
                              <tr key={usu.toString()}>
                                  <td>{usu.id}</td>
                                  <td>{usu.nome}</td>
                                  <td>{usu.cpf}</td>
                                  <td>{usu.email}</td>
                                  <td>{usu.contato}</td>
                                  <td>{usu.veiculo}</td>
                                  <td>{usu.placa}</td>

                                  <td>
                                    
                                      <FiEdit
                                      color="blue"
                                      size={18}
                                      cursor="pointer"
                                      onClick={(e)=>editar(usu.id)}
                                      />
                                  </td>
                                  <td>
                                  <FiTrash2
                                      color="red"
                                      size={18}
                                      cursor="pointer"
                                      onClick={(e)=>excluir(usu.id)}
                                      />
                                  </td>
  
                              </tr>
                          )
                      })
                  }
                  <tr>
                    <td colSpan={7} style={{textAlign:"right",fontWeight:"bold"}}>Total</td>
                    <td colSpan={5}> {row} </td>
                  </tr>
  
              </table>
      </div>
      
  </div>
  
   )   
              }



