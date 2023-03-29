import React,{useState,useEffect} from "react";
import Head from "../../componentes/Head";
import Menu from "../../componentes/Menu";
import { useNavigate } from "react-router-dom";
import { GoArrowSmallRight } from "react-icons/go";
    
export default function CadastroSetor(){
    const navigate = useNavigate();
    
    const [nome_setor,setNome_Setor] = useState("");
    const [msg,setMsg] = useState("");
                       
   async function salvardados(e){
     
        e.preventDefault();

        let i = 0;
        let errorMsg = [];
        if(nome_setor.length === 0){
            errorMsg.push("Campo setor está vazio\n");
            i++;
        }

   
        if(i==0){
           
            const setor = {
               nome_setor:nome_setor
            }
     
            try {
              const response = await fetch(`http://10.1.2.106:5000/setor`, {
                method: "POST",
                body: JSON.stringify(setor),
                headers: {
                  'Content-Type': 'application/json; charset=utf-8'
                }
              });
              if (response.ok) {
                alert("dados salvos com sucesso!");
            
                window.location.href="/listasetor"
              } else {
                console.log("dados inválidos!!!!")
               
              }
            } catch (error) {
              console.log(error);
            }
                        
       
        }
          

         else{
             setMsg(errorMsg);
             console.log(msg)
        }
        
    }
 return(
<div className="dashboard-container">
    <Menu />
    <div className="principal">
            <Head title="Cadastro de Setor" />
            

            <div class="login-box2">
 
 <form onSubmit={salvardados}>
     <div class="user-box2">
             <input type="text"
             value={nome_setor}
             onChange={e=>setNome_Setor(e.target.value)}/>
             <label>Nome</label>
        </div>

<button className="button_save" type="submit" >
      Salvar
  </button>    
    
  </form>
</div>
         
    </div>
    
</div>

 )   
 }