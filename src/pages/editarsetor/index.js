import React,{useState,useEffect} from "react";
import Head from "../../componentes/Head";
import Menu from "../../componentes/Menu";
import { useNavigate, useParams } from "react-router-dom";
import { setAppElement } from "react-modal";

export default function EditarSetor(){
    const {id} =useParams();
    const navigate = useNavigate();
    const [nome_setor,setNome_Setor] = useState("");
    const [msg,setMsg] = useState("");
    // const [dados,setDados]=useState([]);
    // 


    const setor = {
        id,
        nome_setor      
    }


    useEffect(()=>{
        mostrardados();
    },[])
   async function mostrardados(){
        try {
            const response = await fetch(`http://10.1.2.106:5000/setor/${id}`, {
              method: "GET",
              headers: {
                'Content-Type': 'application/json; charset=utf-8'
              }
            });
            if (response.ok) {
              const resposta = await response.json();
              
              setNome_Setor(resposta.setor[0].nome_setor);
             
             
            }
        
           
          } catch (error) {
            console.log(error);
          }
    
    }

    // function verificarduplicidade(email){
        // let dadosnovos = [];
        // dadosnovos = dados.filter(item=>item.email==email);
        // if(dadosnovos.length>0){
            // return true
        // }
            // return false;
    // }

    

    async function salvardados(e){

         e.preventDefault();
        let i=0;
        let errorMsg=[];                    
        if(nome_setor.length<3){
            errorMsg.push("Campo nome tem menos de 3 caracteres\n");
            i++;
        }   
        if(i==0){
            
                try {
                  const response = await fetch(`http://10.1.2.106:5000/setor`, {
                    method: "PATCH",
                    body: JSON.stringify(setor),
                    headers: {
                      'Content-Type': 'application/json; charset=utf-8'
                    }
                  });
                  if (response.ok) {
                    alert("dados salvos com sucesso!");
                
                    window.location.href="/listasetor"

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
            <Head title="Editar Setor" />

            <div class="login-box2">
 
 <form onSubmit={salvardados}>
 <div class="user-box2">
         <input type="text"
         value={nome_setor}
         onChange={e=>setNome_Setor(e.target.value)}/>
         <label>Nome</label>
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