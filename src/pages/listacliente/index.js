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
      const [page, setPage] = useState(1);
      const [perPage, setPerPage] = useState(10); // Definindo o valor padrão como 10
          useEffect(() => {
                                   mostrardados(page);
                           }, [page, perPage]);
  
      function editar(id){
          navigate(`/editarcliente/${id}`)
          
      }
      
      async function excluir(i, nome) {
    
        confirmAlert({
          title: 'Excluir cliente',
          message: `Deseja realmente excluir o cadastro de ${nome}?`,
          buttons: [
            {

              label: 'Sim',
              onClick: async () => {
                try {
                  const response = await fetch(`http://10.1.2.106:5000/cliente`, {
                    method: "DELETE",
                    body: JSON.stringify({id: i}),
                    headers: {
                      'Content-Type': 'application/json; charset=utf-8'
                    }
                  });
          
                  if (response.ok) {
                    alert("Dados deletados com sucesso!");
                    window.location.href = "/listacliente";
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
            const response = await fetch(`http://10.1.2.106:5000/cliente?page=${page}&perPage=${perPage}`, {
              headers: {
                'Content-Type': 'application/json; charset=utf-8'
              }
            });
            if (response.ok) {

              const data = await response.json();
              setDados(data.cliente);
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
                      dados.map((cli)=>{
                          return(
                              <tr key={cli.toString()}>
                                  <td>{cli.id_cliente}</td>
                                  <td>{cli.nome}</td>
                                  <td>{cli.cpf}</td>
                                  <td>{cli.email}</td>
                                  <td>{cli.contato}</td>
                                  <td>{cli.veiculo}</td>
                                  <td>{cli.placa}</td>

                                  <td>
                                    
                                      <FiEdit
                                      color="blue"
                                      size={18}
                                      cursor="pointer"
                                      onClick={(e)=>editar(cli.id_cliente)}
                                      />
                                  </td>
                                  <td>
                                  <FiTrash2
                                      color="red"
                                      size={18}
                                      cursor="pointer"
                                      onClick={(e)=>excluir(cli.id_cliente)}
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



