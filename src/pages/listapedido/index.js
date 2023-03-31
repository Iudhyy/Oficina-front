import React, {useState,useEffect} from "react";
import Head from "../../componentes/Head";
import Menu from "../../componentes/Menu";
import {FiEdit,FiDelete,FiFilePlus,FiTrash2} from "react-icons/fi";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useNavigate,Link} from "react-router-dom";
import api from "../../server/api";


export default function ListaPedido(){
  const navigate=useNavigate();
    const [dados,setDados]=useState([]);
    const [row,setRow] = useState(0);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10); // Definindo o valor padrão como 10;

    function formatarData(data) {
      // separar a string em duas partes
      const partes = data.split('/');
    
      // extrair a data do primeiro elemento
      const dataCompleta = partes[0];
      const dataFormatada = dataCompleta.substring(0, 10);
    
      // formatar a data no formato brasileiro
      const dia = dataFormatada.substring(8, 10);
      const mes = dataFormatada.substring(5, 7);
      const ano = dataFormatada.substring(0, 4);
    
      return `${dia}/${mes}/${ano}`;
    }
    
    
  

    useEffect(() => {
        mostrardados(page);
      }, [page, perPage]);

    function editar(id){
        navigate(`/editarpedido/${id}`)
        
    }
    
    function excluir(i,nome) {
       
        confirmAlert({
            title: 'Excluir pedido',
            message: `Deseja realmente excluir o cadastro de ${nome}`,
            buttons: [
              {
                label: 'Sim',
                onClick: () => {
                    api.delete(`/lista/${i}`)
                    .then(res => {});
                    mostrardados();
                    alert("Dados Deletados com Sucesso!");
                }
              },
              {
                label: 'Não',
                onClick: () => alert('Click No')
              }
            ]
          })
      };
      async function mostrardados(page) {
        try {
          const response = await fetch(`http://10.1.2.106:5000/lista?page=${page}&perPage=${perPage}`, {
            headers: {
              'Content-Type': 'application/json; charset=utf-8'
            }
          });
          if (response.ok) {
            const data = await response.json();
            setDados(data.lista);
            setRow(data.totalRows);
            console.log("Status" + response.status);
            console.log(data.mensagem);
          } else {
            console.log("houve um erro na requisição")
          }
        } catch (error) {
          console.log(error);
        }
      }
      function handlePageChange(newPage) {
        setPage(newPage);
      }

return(
<div className="dashboard-container">
    <Menu />

    <div className="principal">
    <Head title="Lista de Pedidos" />
      <div className="button_new">
       <a href="/cadastropedido">
       <FiFilePlus
          size={24}
          color="green"
          cursor="pointer"
        />
       </a>
      </div>
         <table>
            <tr>
               <th>ID</th>
               <th>Cliente</th>
               <th>Placa</th>
               <th>Entrada</th>              
               <th>os</th>
               <th>Marca</th>
               <th></th>
               <th></th>
            </tr>
           
                {
                    dados.map((ped)=>{
                        return(
                            <tr key={ped.toString()}>
                               <td>{ped.id}</td>
                                <td>{ped.id_cliente}</td>
                                <td>{ped.placa}</td>
                                <td>{formatarData(ped.entrada)}</td>
                                
                                <td>{ped.os}</td>
                                <td>{ped.marca}</td>
                                

                                <td>
                                  
                                    <FiEdit
                                    color="blue"
                                    size={18}
                                    cursor="pointer"
                                    onClick={(e)=>editar(ped.id)}
                                    />
                                </td>
                                <td>
                                <FiTrash2
                                    color="red"
                                    size={18}
                                    cursor="pointer"
                                    onClick={(e)=>excluir(ped.id)}
                                    />
                                </td>

                            </tr>
                        )
                    })
                }
                {/* <tr> */}
                {/* <button */}
                  {/* //  onClick={() => handlePageChange(page - 1)} */}
                    {/* //  disabled={page === 1} */}
                          {/* // > */}
                             {/* Anterior */}
                              {/* </button> */}
                    {/* <button */}
                      {/* // onClick={() => handlePageChange(page + 1)} */}
                      {/* // disabled={page === row} */}
                    {/* // > */}
                      {/* Próximo */}
                    {/* </button> */}
                                    {/* </tr> */}
                <tr>
                  <td colSpan={5} style={{textAlign:"right",fontWeight:"bold"}}>Total </td>
                  <td colSpan={2}> {row} </td>
                </tr>

            </table>

            <div className="botoes">
       
 <button
    onClick={() => handlePageChange(page - 1)}
      disabled={page === 1}
           >
              Anterior
               </button>
     <button
       onClick={() => handlePageChange(page + 1)}
       disabled={page === row}
     >
       Próximo
     </button>
              
            </div>
    </div>
    
</div>

 )   
            }