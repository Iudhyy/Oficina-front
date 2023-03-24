import React,{useState,useEffect} from "react";
import Head from "../../componentes/Head";
import Menu from "../../componentes/Menu";
import { useNavigate, useParams } from "react-router-dom";
import { setAppElement } from "react-modal";

export default function EditarFuncionario(){
    const {id} =useParams();
    const navigate = useNavigate();
    const [id_usuario,setId_Usuario] = useState("");
    const [login,setLogin] = useState("");
    const [nome,setNome] = useState("");
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");
    const [perfil,setPerfil] = useState(1);
    const [setor,setSetor] = useState(3);
    const [ativo,setAtivo] = useState("S")
    const [msg,setMsg] = useState("");
    // const [dados,setDados]=useState([]);
    // 
    
    const _data = {

        id_usuario,
        login,
        nome,
        email,
        senha

    }

    const usuario = {
        id:id,
        login:login,
        nome:nome,
        email:email,
        senha:senha,
        perfil:perfil,
        setor:setor,
        ativo:ativo
    }


    useEffect(()=>{
        mostrardados();
    },[])
   async function mostrardados(){
        try {
            const response = await fetch(`http://10.1.2.106:5000/usuario/${id}`, {
              method: "GET",
              headers: {
                'Content-Type': 'application/json; charset=utf-8'
              }
            });
            if (response.ok) {
              const resposta = await response.json();
              setLogin(resposta.usuario[0].login);
              setNome(resposta.usuario[0].nome);
              setEmail(resposta.usuario[0].email);
              setSenha(resposta.usuario[0].senha);
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
        if(login.length<3){
            errorMsg.push("Campo login tem menos de 3 caracteres\n");
            i++;
        }
       
       
       
       
        if(nome.length<3){
            errorMsg.push("Campo nome tem menos de 3 caracteres\n");
            i++;
        }
        if(senha.length<4){
            errorMsg.push("Campo email tem menos de 4 caracteres\n");
            i++;
        }

        if(i==0){
            
                try {
                  const response = await fetch(`http://10.1.2.106:5000/usuario`, {
                    method: "PATCH",
                    body: JSON.stringify(usuario),
                    headers: {
                      'Content-Type': 'application/json; charset=utf-8'
                    }
                  });
                  if (response.ok) {
                    alert("dados salvos com sucesso!");
                
                    window.location.href="/listafuncionario"

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
            <Head title="Cadastro de Produto" />

            <div class="login-box2">
 
 <form onSubmit={salvardados}>

 <div class="user-box2">
   <input type="text"
   value={login}
   onChange={e=>setLogin(e.target.value)}/>
   <label>Login</label>
 </div>

   <div class="user-box2">
     <input type="text"
     value={nome}
     onChange={e=>setNome(e.target.value)}/>
     <label>Nome</label>
   </div>
   <div class="user-box2">
     <input  type="text"
       value={email}
       onChange={e=>setEmail(e.target.value)}/>
     <label>Email</label>
   </div>
   
   <div class="user-box2">
  <input  type="password"
  value={senha}
  onChange={e=>setSenha(e.target.value)}/>
  <label>Senha</label>
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