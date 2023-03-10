import React,{useState,useEffect} from "react";
import Head from "../../componentes/Head";
import Menu from "../../componentes/Menu";
import { useNavigate, useParams } from "react-router-dom";


export default function EditarCliente(){
    const navigate = useNavigate();
    // const {id} = useParams();
    const {id} = useParams();       
    const [nome,setNome] = useState("");
    const [cpf,setCpf] = useState("");
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");
    const [confirmar,setConfirmar] = useState("");
    const [contato,setContato] = useState("");
    const [veiculo,setVeiculo] = useState("");
    const [placa,setPlaca] = useState("");
    const [msg,setMsg] = useState("");
    const [dados,setDados]=useState([]);
    
    

    // function validaremail(){
    //     var re = /\S+@\S+\.\S+/;
    //     return re.test(email);
       
    
    // }

    useEffect(()=>{
        mostrardados();
    },[])
    function mostrardados(){
    let lista =JSON.parse(localStorage.getItem("cad-cliente")||"[]");
    setDados(lista);
    let usu = lista.filter(item=>item.id=id);
        setNome(usu[0].nome);
        setCpf(usu[0].cpf);
        setEmail(usu[0].email);
        setSenha(usu[0].senha);
        setConfirmar(usu[0].confirmar)
        setContato(usu[0].contato);
        setVeiculo(usu[0].veiculo);
        setPlaca(usu[0].placa);
        
    }

    // function verificarduplicidade(email){
    //     let dadosnovos = [];
    //     dadosnovos = dados.filter(item=>item.email==email);
    //     if(dadosnovos.length>0){
    //         return true
    //     }
    //         return false;
    // }

    

    function salvardados(e){

        e.preventDefault();
        let i=0;
        let errorMsg=[];
        if(nome.length<3){
            errorMsg.push("Campo nome tem menos de 3 caracteres\n");
            i++;
        }
       

    //    else if(!validaremail()){
    //         errorMsg.push('Por favor coloque um email valido!\n'); 
    //         i++;   
    //     }

        if(contato.length<3){
            errorMsg.push("Campo senha tem menos de 3 caracteres\n");
            i++;
        }
        // else if(senha!==confirmar){
        //     errorMsg.push("Senha e confirmação não conferem\n");
        //     i++;
        // }

        if(i==0){
            
            setMsg("");
            let dadosnovos=[];
            let lista = JSON.parse(localStorage.getItem("cad-cliente")||"[]");
           dadosnovos=lista.map((function(item){
                if(item.id==id){
                    return {
                        id:id,
                        nome:nome,
                        cpf:cpf,
                        email:email,
                        senha:senha,
                        contato:contato,
                        veiculo:veiculo,
                        placa:placa
                        
                    }
                }else{
                    return{
                    id:item.id,
                    nome:item.nome,
                    cpf:item.cpf,
                    email:item.email,
                    senha:item.senha,
                    contato:item.contato,
                    veiculo:item.veiculo,
                    placa:item.placa
                    }
                }
           }));
            localStorage.setItem("cad-cliente",JSON.stringify(dadosnovos));
            alert("dados salvos com sucesso!");
            navigate("/listacliente");
        }

         else{
            setMsg(errorMsg);
        }
        
    }
 return(
<div className="dashboard-container">
    <Menu />
    <div className="principal">
            <Head title="Editar Cliente" />
            {/* <section className="form-cadastro">  */}
                {/* <form onSubmit={salvardados}> */}
{/*                     */}
                    {/* <label>nome</label> */}
                    {/* <input placeholder="nome" */}
                    {/* // type="text" */}
                    {/* // value={nome} */}
                    {/* // onChange={e=>setNome(e.target.value)} */}
                    {/* // /> */}
                    {/* <label>responsavel</label> */}
                    {/* <input placeholder="responsavel" */}
                    {/* // type="text" */}
                    {/* // value={responsavel} */}
                    {/* // onChange={e=>setResponsavel(e.target.value)} */}
                    {/* // /> */}
                    {/* <label>Contato</label> */}
                    {/* <input placeholder="contato" */}
                    {/* // type="text" */}
                    {/* // value={contato} */}
                    {/* // onChange={e=>setContato(e.target.value)} */}
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
 <input  type="password"
 value={senha}
 onChange={e=>setSenha(e.target.value)}/>
 <label>senha</label>
</div>
  
<div class="user-box2">
<input  type="password"
 value={confirmar}
 onChange={e=>setConfirmar(e.target.value)}/>
<label>confirmar senha </label>
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