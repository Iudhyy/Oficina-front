import React, {useState,useEffect} from "react";
import Head from "../../componentes/Head";
import Menu from "../../componentes/Menu";
import {FiEdit,FiDelete,FiFilePlus,FiTrash2} from "react-icons/fi";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useNavigate,Link} from "react-router-dom";
import api from "../../server/api";


export default function ListaSetor(){
  const navigate=useNavigate();
    const [dados,setDados]=useState([]);
    const [row,setRow] = useState(0);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10); // Definindo o valor padrão como 10
  

    useEffect(() => {
        mostrardados(page);
      }, [page, perPage]);

    function editar(id){
        navigate(`/editarsetor/${id}`)
        
    }
    
    function excluir(id,nome) {
       
        confirmAlert({
            title: 'Excluir setor',
            message: `Deseja realmente excluir o cadastro de ${nome}`,
            buttons: [
              {
                label: 'Sim',
                onClick: async () => {
                  try {
                    const response = await fetch(`http://10.1.2.106:5000/setor/${id}`, {
                      method: "DELETE",
                      
                      headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                      }
                    });
                    if (response.ok) {
                      const resposta = await response.json();
                      alert("DADOS DELETADOS COM SUCESSO");
                      mostrardados(page,perPage);                                           
                    }                                 
                  } catch (error) {
                    console.log(error);
                  }      
                   
                   
                   
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
          const response = await fetch(`http://10.1.2.106:5000/setor?page=${page}&perPage=${perPage}`, {
            headers: {
              'Content-Type': 'application/json; charset=utf-8'
            }
          });
          if (response.ok) {
            const data = await response.json();
            setDados(data.setor);
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
    <Head title="Lista de Setor" />
      <div className="button_new">
       <a href="/cadastrosetor">
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
               <th>Nome</th>
               <th></th>
               <th></th>
            </tr>
           
                {
                    dados.map((set)=>{
                        return(
                            <tr key={set.toString()}>
                               <td>{set.id_setor}</td>
                                <td>{set.nome_setor}</td>
                              

                                <td>
                                  
                                    <FiEdit
                                    color="blue"
                                    size={18}
                                    cursor="pointer"
                                    onClick={(e)=>editar(set.id_setor)}
                                    />
                                </td>
                                <td>
                                <FiTrash2
                                    color="red"
                                    size={18}
                                    cursor="pointer"
                                    onClick={(e)=>excluir(set.id_setor)}
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