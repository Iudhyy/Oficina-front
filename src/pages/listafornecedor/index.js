import React, {useState,useEffect} from "react";
import Head from "../../componentes/Head";
import Menu from "../../componentes/Menu";
import {FiEdit,FiDelete,FiFilePlus,FiTrash2} from "react-icons/fi";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useNavigate,Link} from "react-router-dom";
import api from "../../server/api";


export default function ListaFornecedor(){
  const navigate=useNavigate();
    const [dados,setDados]=useState([]);
    const [row,setRow] = useState(0);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10); // Definindo o valor padrão como 10
  

    useEffect(() => {
        mostrardados(page);
      }, [page, perPage]);

    function editar(id){
        navigate(`/editarfornecedor/${id}`)
        
    }
    
    function excluir(i,nome) {
       
        confirmAlert({
            title: 'Excluir fornecedor',
            message: `Deseja realmente excluir o cadastro de ${nome}`,
            buttons: [
              {
                label: 'Sim',
                onClick: () => {
                    api.delete(`/empresa/${i}`)
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
          const response = await fetch(`http://10.1.2.106:5000/empresa?page=${page}&perPage=${perPage}`, {
            headers: {
              'Content-Type': 'application/json; charset=utf-8'
            }
          });
          if (response.ok) {
            const data = await response.json();
            setDados(data.empresa);
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
    <Head title="Lista de Fornecedor" />
      <div className="button_new">
       <a href="/cadastrofornecedor">
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
               <th>CNPJ</th>
               <th>Razão Social</th>
               <th>telefone</th>
               <th>ativo</th>
               <th></th>
               <th></th>
            </tr>
           
                {
                    dados.map((emp)=>{
                        return(
                            <tr key={emp.toString()}>
                               <td>{emp.id_fornecedor}</td>
                                <td>{emp.cnpj}</td>
                                <td>{emp.razao_social}</td>
                                <td>{emp.telefone}</td>
                                <td>{emp.ativo}</td>
                              

                                <td>
                                  
                                    <FiEdit
                                    color="blue"
                                    size={18}
                                    cursor="pointer"
                                    onClick={(e)=>editar(emp.id_fornecedor)}
                                    />
                                </td>
                                <td>
                                <FiTrash2
                                    color="red"
                                    size={18}
                                    cursor="pointer"
                                    onClick={(e)=>excluir(emp.id_fornecedor)}
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