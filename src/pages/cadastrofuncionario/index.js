import React,{useState,useEffect} from "react";
import Head from "../../componentes/Head";
import Menu from "../../componentes/Menu";
import { useNavigate } from "react-router-dom";
import { GoArrowSmallRight } from "react-icons/go";
    
export default function Cadastrofuncionario(){
    const navigate = useNavigate();
    const [login,setLogin] = useState("");
    const [perfil,setPerfil] = useState(0);
    const [setor,setSetor] = useState("");
    const [ativo,setAtivo] = useState("S");
    const [nome,setNome] = useState("");
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");
    const [confirmar,setConfirmar] = useState("");
    const [msg,setMsg] = useState("");

    
    

    function validarEmail(){
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
       
    
    }

                      


    

   async function salvardados(e){
     
        e.preventDefault();

        let i = 0;
        let errorMsg = [];
        if(nome.length < 3){
            errorMsg.push("Campo nome tem menos de 3 caracteres\n");
            i++;
        }
        if(email.length === 0){
            errorMsg.push("Campo email está vazio\n");
            i++;
        } else if(!validarEmail(email)){
            errorMsg.push('Por favor coloque um email válido!\n'); 
            i++;   
        }
        if(senha.length < 3){
            errorMsg.push("Campo senha tem menos de 3 caracteres\n");
            i++;
        } else if(senha !== confirmar){
            errorMsg.push("Senha e confirmação não conferem\n");
            i++;
        }
        if(login.length < 3){
            errorMsg.push("Campo login tem menos de 3 caracteres\n");
            i++;
        }
        if(perfil < 0 || perfil > 10){
            errorMsg.push("Perfil deve ser um valor entre 0 e 10\n");
            i++;
        }
        if(setor.length === 0){
            errorMsg.push("Campo setor está vazio\n");
            i++;
        }
        if(ativo !== "S" && ativo !== "N"){
            errorMsg.push("Campo ativo deve ser 'S' ou 'N'\n");
            i++;
        }

   
        if(i==0){
           
            const usuario = {
                login:login,
                nome:nome,
                email:email,
                senha:senha,
                perfil:perfil,
                setor:setor,
                ativo:ativo
            }
     
            try {
              const response = await fetch(`http://10.1.2.106:5000/usuario`, {
                method: "POST",
                body: JSON.stringify(usuario),
                headers: {
                  'Content-Type': 'application/json; charset=utf-8'
                }
              });
              if (response.ok) {
                alert("dados salvos com sucesso!");
            
                window.location.href="/listafuncionario"
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
            <Head title="Cadastro de Funcionário" />
            

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
     <label>email</label>
   </div>
   
         <div class="user-box2">
        <input  type="password"
        value={senha}
        onChange={e=>setSenha(e.target.value)}/>
        <label>senha</label>
          </div>

               <div class="user-box2">
         <input  type="password"
         value={confirmar}
         onChange={e=>setConfirmar(e.target.value)}/>
         <label> confimar senha</label>
             </div>
         
    <div class="user-box2">
        <input  type="text"
         value={perfil}
         onChange={e=>setPerfil(e.target.value)}/>
        <label> perfil </label>
        </div>

            <div class="user-box2">
      <input type="text"
      value={setor}
      onChange={e=>setSetor(e.target.value)}/>
      <label>setor</label>
        </div>

        <div class="user-box2">
     <input type="text"
     value={ativo}
     onChange={e=>setAtivo(e.target.value)}/>
     <label>Ativo</label>
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