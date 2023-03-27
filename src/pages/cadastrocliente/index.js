import React,{useState,useEffect} from "react";
import Head from "../../componentes/Head";
import Menu from "../../componentes/Menu";
import { useNavigate } from "react-router-dom";

export default function CadastroCliente(){
    const navigate = useNavigate();
    const [nome,setNome] = useState("");
    const [cpf,setCpf] = useState("");
    const [email,setEmail] = useState("");
    const [contato,setContato] = useState("");
    const [veiculo,setVeiculo] = useState("");
    const [placa,setPlaca] = useState("");
    const [msg,setMsg] = useState("");
    const [dados,setDados]=useState([]);
    
    function validaremail(){
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
       
    
    }


    useEffect(()=>{
        mostrardados();
    },[])
    function mostrardados(){
    let lista =JSON.parse(localStorage.getItem("cad-cliente")||"[]");
    setDados(lista);
    }

    function verificarduplicidade(email){
        let dadosnovos = [];
        dadosnovos = dados.filter(item=>item.email==email);
        if(dadosnovos.length>0){
            return true
        }
            return false;
    }

    

  async  function salvardados(e){

        e.preventDefault();
           
   const cliente = {
    nome:nome,
    cpf:cpf,
    email:email,
    contato:contato,
    veiculo:veiculo,
    placa:placa
}
        let i=0;
        let errorMsg=[];
        if(nome.length<3){
            errorMsg.push("Campo nome tem menos de 3 caracteres\n");
            i++;
        }
        if(cpf.length<11){
            errorMsg.push("o CPF está incompleto\n");
            i++;
        }
        if(verificarduplicidade(email)==true){
            errorMsg.push("o email fornecido ja esta cadastrado\n");
            i++;
        }
        if(email.length==0){
            errorMsg.push("campo email esta vazio\n");
            i++;
        }

       else if(!validaremail()){
            errorMsg.push('Por favor coloque um email valido!\n'); 
            i++;   
       }
                            
        if(i==0){
            
           
                try {
                  const response = await fetch(`http://10.1.2.106:5000/cliente`, {
                    method: "POST",
                    body: JSON.stringify(cliente),
                    headers: {
                      'Content-Type': 'application/json; charset=utf-8'
                    }
                  });
                  if (response.ok) {
                    alert("dados salvos com sucesso!");
                
                    window.location.href="/listacliente"
                  } else {
                    console.log("dados inválidos!!!!")
                   
                  }
                } catch (error) {
                  console.log(error);
                }
                            
           
            }
         else{
             alert("Preencha todos os campos!!!")
            setMsg(errorMsg);
            setMsg("");
        }
        
    }
 return(
<div className="dashboard-container">
    <Menu />
    <div className="principal">
            <Head title="Cadastro de Cliente" />
            {/* <section className="form-cadastro">  */}
                {/* <form onSubmit={salvardados}> */}
                    {/* <label>Nome</label> */}
                    {/* <input placeholder="Nome" */}
                    {/* // value={nome} */}
                    {/* // onChange={e=>setNome(e.target.value)} */}
                    {/* // /> */}
                    {/* <label>Email</label> */}
                    {/* <input placeholder="e-mail@gmail.com" */}
                    {/* // type="text" */}
                    {/* // value={email} */}
                    {/* // onChange={e=>setEmail(e.target.value)} */}
                    {/* // /> */}
                    {/* <label>Senha</label> */}
                    {/* <input  */}
                    {/* // type="password" */}
                    {/* // value={senha} */}
                    {/* // onChange={e=>setSenha(e.target.value)} */}
                    {/* // /> */}
                    {/* <label>Confirmar Senha</label> */}
                    {/* <input  */}
                    {/* // type="password" */}
                    {/* // value={confirmar} */}
                    {/* // onChange={e=>setConfirmar(e.target.value)} */}
                    {/* // /> */}
                    {/* <button className="button_save" type="submit" > */}
                        {/* Salvar */}
                    {/* </button> */}
                    {/* <pre>{msg}</pre> */}
                {/* </form> */}
            {/* </section> */}

            <div class="login-box2">
 
 <form onSubmit={salvardados}>
   <div class="user-box2">
     <input type="text"
     value={nome}
     onChange={e=>setNome(e.target.value)}/>
     <label>nome</label>
   </div>
   <div class="user-box2">
<input  type="text"
 value={cpf}
 onChange={e=>setCpf(e.target.value)}/>
<label>CPF</label>
</div>
   <div class="user-box2">
     <input  type="text"
      value={email}
      onChange={e=>setEmail(e.target.value)}/>
     <label>email</label>
   </div>

   <div class="user-box2">
  <input  type="text"
  value={contato}
  onChange={e=>setContato(e.target.value)}/>
  <label>Contato</label>
 </div>
   <div class="user-box2">
 <input  type="text"
  value={veiculo}
  onChange={e=>setVeiculo(e.target.value)}/>
 <label>Veiculo</label>
 </div>
 <div class="user-box2">
 <input  type="text"
  value={placa}
  onChange={e=>setPlaca(e.target.value)}/>
 <label>Placa</label>
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