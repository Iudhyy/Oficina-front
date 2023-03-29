import React,{useState,useEffect} from "react";
import Head from "../../componentes/Head";
import Menu from "../../componentes/Menu";
import { useNavigate, useParams } from "react-router-dom";
import { setAppElement } from "react-modal";

export default function EditarFornecedor(){
    const {id} =useParams();
    const navigate = useNavigate();
    const [cnpj, setCnpj] = useState("");
    const [razao_social, setRazaoSocial] = useState("");
    const [telefone, setTelefone] = useState("");
    const [msg,setMsg] = useState("");

    
    const _data = {
        id,
        cnpj,
        razao_social,
        telefone  
    }


    useEffect(()=>{
        mostrardados();
    },[])
   async function mostrardados(){
        try {
            const response = await fetch(`http://10.1.2.106:5000/fornecedor/${id}`, {
              method: "GET",
              
              headers: {
                'Content-Type': 'application/json; charset=utf-8'
              }
            });
            if (response.ok) {
              const resposta = await response.json();
              setCnpj(resposta.fornecedor[0].cnpj);
              setRazaoSocial(resposta.fornecedor[0].razao_social);
              setTelefone(resposta.fornecedor[0].telefone);
             
            }
        
           
          } catch (error) {
            console.log(error);
          }
    
    }

    async function salvardados(e){

         e.preventDefault();
        let i=0;
        let errorMsg=[];

        if(i==0){
            
                try {
                  const response = await fetch(`http://10.1.2.106:5000/fornecedor`, {
                    method: "PATCH",
                    body: JSON.stringify(_data),
                    headers: {
                      'Content-Type': 'application/json; charset=utf-8'
                    }
                  });
                  if (response.ok) {
                    alert("dados salvos com sucesso!");
                
                    window.location.href="/listafornecedor"

                  } else {
                    console.log("E-mail ou senha inválidos")
                   
                  }
                } catch (error) {
                  console.log(error);
                }
                            
           
        }

         else{
             alert("Preencha todos os campos!!!")
            setMsg(errorMsg);
        }
        // 
    }
 return(
<div className="dashboard-container">
    <Menu />
    <div className="principal">
            <Head title="Editar Fornecedor" />

            <div class="login-box2">
 
 <form onSubmit={salvardados}>
   <div class="user-box2">
     <input type="text"
     value={cnpj}
     onChange={e=>setCnpj(e.target.value)}/>
     <label>CNPJ</label>
   </div>
   <div class="user-box2">
     <input  type="text"
       value={razao_social}
       onChange={e=>setRazaoSocial(e.target.value)}/>
     <label>Razão Social</label>
   </div>
   
   <div class="user-box2">
  <input  type="text"
  value={telefone}
  onChange={e=>setTelefone(e.target.value)}/>
  <label>Telefone</label>
 </div>

 <button className="button_save" type="submit">
      Salvar
  </button>    
    
  </form>
 </div>

    </div>
    
</div>

 )   
 }