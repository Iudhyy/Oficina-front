import React, {useState,useEffect} from "react";
import Head from "../../componentes/Head";
import Menu from "../../componentes/Menu";
import {FiEdit,FiDelete,FiFilePlus,FiTrash2} from "react-icons/fi";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useNavigate,Link} from "react-router-dom";
import api from "../../server/api";


export default function ListaUsuario(){
  const navigate=useNavigate();
    const [dados,setDados]=useState([]);
    const [row,setRow] = useState(0);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10); // Definindo o valor padrão como 10
  

    useEffect(() => {
        mostrardados(page);
      }, [page, perPage]);

    function editar(id){
        navigate(`/editarfuncionario/${id}`)
        
    }
    async function excluir(i, nome) {
    
      confirmAlert({
        title: 'Excluir usuário',
        message: `Deseja realmente excluir o cadastro de ${nome}?`,
        buttons: [
          {
            label: 'Sim',
            onClick: async () => {
              try {
                const response = await fetch(`http://10.1.2.106:5000/usuario`, {
                  method: "DELETE",
                  body: JSON.stringify({id: i}),
                  headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                  }
                });
    
                if (response.ok) {
                  alert("Dados deletados com sucesso!");
                  window.location.href = "/listafuncionario";
                } else {
                  const errorResponse = await response.json();
                  alert(`Erro ao excluir usuário: ${errorResponse.message}`);
                }
              } catch (error) {
                console.log(error);
                alert("Erro ao excluir usuário. Por favor, tente novamente mais tarde.");
              }
            }
          },
          {
            label: 'Não',
            onClick: () => alert('Clique em Não')
          }
        ]
      });
    }
    
      
      async function mostrardados(page) {
        try {
          const response = await fetch(`http://10.1.2.106:5000/usuario?page=${page}&perPage=${perPage}`, {
            headers: {
              'Content-Type': 'application/json; charset=utf-8'
            }
          });
          if (response.ok) {
            const data = await response.json();
            setDados(data.usuario);
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
    <Head title="Lista de Funcionários" />
      <div className="button_new">
       <a href="/cadastrofuncionario">
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
               <th>Login</th>
               <th>Nome</th>
               <th>email</th>
               <th>senha</th>
               <th></th>
               <th></th>
            </tr>
           
                {
                    dados.map((usu)=>{
                        return(
                            <tr key={usu.toString()}>
                               <td>{usu.id_usuario}</td>
                                <td>{usu.login}</td>
                                <td>{usu.nome}</td>
                                <td>{usu.email}</td>
                                <td>{usu.senha}</td>
                               
                               
                               
                              

                                <td>
                                  
                                    <FiEdit
                                    color="blue"
                                    size={18}
                                    cursor="pointer"
                                    onClick={(e)=>editar(usu.id_usuario)}
                                    />
                                </td>
                                <td>
                                <FiTrash2
                                    color="red"
                                    size={18}
                                    cursor="pointer"
                                    onClick={(e)=>excluir(usu.id_usuario,usu.nome)}
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