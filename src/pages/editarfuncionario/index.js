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
    const MIN_LOGIN_LENGTH = 3;
    const MIN_NAME_LENGTH = 3;
    const MIN_EMAIL_LENGTH = 6;
    const MIN_PASSWORD_LENGTH = 3;
    const _data = {

        id_usuario,
        login,
        nome,
        email,
        senha

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
    async function salvardados(e) {

      e.preventDefault();
      const usuario = {
        id: id,
        login: login,
        nome: nome,
        email: email,
        senha: senha,
        perfil: perfil,
        setor: setor,
        ativo: ativo
      }
      console.table(usuario)

      const errorMsg = [];
    
      if (usuario.login.length < MIN_LOGIN_LENGTH) {
        errorMsg.push("Campo login tem menos de 3 caracteres\n");
      }
    
      if (usuario.nome.length < MIN_NAME_LENGTH) {
        errorMsg.push("Campo nome tem menos de 3 caracteres\n");
      }
    
      if (usuario.email.length < MIN_EMAIL_LENGTH || !usuario.email.includes("@")) {
        errorMsg.push("Campo email inválido\n");
      }
    
      if (usuario.senha.length < MIN_PASSWORD_LENGTH) {
        errorMsg.push("Campo senha tem menos de 4 caracteres\n");
      }
    
      if (errorMsg.length > 0) {
        alert("Preencha todos os campos corretamente!");
        console.log(msg)
        setMsg(errorMsg);
        return;
      }
    
      try {
        const response = await fetch(`http://10.1.2.106:5000/usuario`, {
          method: "PATCH",
          body: JSON.stringify(usuario),
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          }
        });
    
        if (response.ok) {
          alert("Dados salvos com sucesso!");
          window.location.href = "/listafuncionario";
        } else {
          const errorResponse = await response.json();
          alert(`Erro ao salvar dados: ${errorResponse.message}`);
        }
      } catch (error) {
        console.log(error);
        alert("Erro ao salvar dados. Por favor, tente novamente mais tarde.");
      }
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