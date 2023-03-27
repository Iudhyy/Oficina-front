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

    async function mostrardados(){
        try {
            const response = await fetch(`http://10.1.2.106:5000/cliente/${id}`, {
              method: "GET",
              headers: {
                'Content-Type': 'application/json; charset=utf-8'
              }
            });
            if (response.ok) {

              const resposta = await response.json();
              setNome(resposta.cliente[0].nome);
              setCpf(resposta.cliente[0].cpf);
              setEmail(resposta.cliente[0].email);
              setContato(resposta.cliente[0].contato);
              setVeiculo(resposta.cliente[0].veiculo);
              setPlaca(resposta.cliente[0].placa);
              //setSenha(resposta.cliente[0].senha);

            }
        
           
          } catch (error) {
            console.log(error);
          }

        }

    // function verificarduplicidade(email){
    //     let dadosnovos = [];
    //     dadosnovos = dados.filter(item=>item.email==email);
    //     if(dadosnovos.length>0){
    //         return true
    //     }
    //         return false;
    // }
                                  
    async function salvardados(e){

        // Verificação 1: Verificar se todas as variáveis usadas na função estão declaradas e inicializadas.
        if (!id || !nome || !cpf || !email ||  !contato || !veiculo || !placa) {
          alert("Alguns campos não foram preenchidos corretamente.");
          return;
        }
        
        const _cliente = {
          id:id,
          nome:nome,
          cpf:cpf,
          email:email,
          contato:contato,
          veiculo:veiculo,
          placa:placa
        }      
      
              e.preventDefault();
      
        try {
          // Verificação 4: Verificar se o método de envio da requisição "fetch()" é do tipo PATCH.
          const response = await fetch(`http://10.1.2.106:5000/cliente`, {
            method: "PATCH",
            // Verificação 6: Verificar se o corpo da requisição está sendo enviado corretamente em formato JSON.
            body: JSON.stringify(_cliente),
            // Verificação 7: Verificar se o cabeçalho da requisição está sendo definido corretamente com o tipo MIME "application/json; charset=utf-8".
            headers: {
              'Content-Type': 'application/json; charset=utf-8'
            }
          });
      
          if (response.ok) {
            // Verificação 9: Verificar se a função está redirecionando corretamente o usuário para a página "/listacliente" após o salvamento dos dados.
            alert("Dados salvos com sucesso!");
            window.location.href = "/listacliente";
          } else {
            // Verificação 8: Verificar se a resposta da requisição está sendo verificada corretamente, usando o método "ok" para verificar se a resposta foi bem-sucedida e o método "json()" para analisar o corpo da resposta em caso de falha.
            const errorResponse = await response.json();
            alert(`Erro ao salvar dados: ${errorResponse.message}`);
          }
        } catch (error) {
          // Verificação 10: Verificar se há tratamento de erro adequado para casos em que a requisição falhe ou ocorra algum erro interno na função.
          console.log(error);
          alert("Erro ao salvar dados. Por favor, tente novamente mais tarde.");
        }
      }
                                                                             

 return(

                    <div className="dashboard-container">
                     <Menu />
                     <div className="principal">


               <div class="login-box2">
     <form onSubmit={salvardados}>
                    <div class="user-box2">
                     <input type="text"
                        value={nome}
                        onChange={e=>setNome(e.target.value)}/>
                    <label>nomeguigigig</label>
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