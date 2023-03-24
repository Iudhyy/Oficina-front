import React,{useState,useEffect} from "react";
import Head from "../../componentes/Head";
import Menu from "../../componentes/Menu";
import { useNavigate, useParams } from "react-router-dom";
import { setAppElement } from "react-modal";

export default function EditarPedido(){
    const {id} =useParams();
    const navigate = useNavigate();
    const [quantidade_pedida,setQuantidade_Pedida] = useState("");
    const [id_usuario,setId_Usuario] = useState(0);
    const [cod_produto,setCod_Produto] = useState("");
    const [data_pedido,setDataPedido] = useState("");
    const [obs,setObs] = useState("");
    const [flag_baixa,setFlag_Baixa] = useState("");
    const [msg,setMsg] = useState("");
  
  


    const pedido = {
        id:id,
        quantidade_pedida:quantidade_pedida,
        id_usuario:id_usuario,
        cod_produto:cod_produto,
        data_pedido:data_pedido,
        obs:obs,
        flag_baixa:flag_baixa

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
              
              setQuantidade_Pedida(resposta.pedido[0].quantidade_pedida);
              setId_Usuario(resposta.pedido[0].id_usuario);
              setCod_Produto(resposta.pedido[0].cod_produto);
              setDataPedido(resposta.pedido[0].data_pedido);
              setObs(resposta.pedido[0].flag_baixa);
             
             
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
      
      
      

        if(i==0){
            
                try {
                  const response = await fetch(`http://10.1.2.106:5000/pedido`, {
                    method: "PATCH",
                    body: JSON.stringify(pedido),
                    headers: {
                      'Content-Type': 'application/json; charset=utf-8'
                    }
                  });
                  if (response.ok) {
                    alert("dados salvos com sucesso!");
                
                    window.location.href="/listapedido"

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
  value={quantidade_pedida}
  onChange={e=>setQuantidade_Pedida(e.target.value)}/>
  <label>Quantidade Pedida</label>
</div>
  <div class="user-box2">
          <input type="text"
          value={id_usuario}
          onChange={e=>setId_Usuario(e.target.value)}/>
          <label>ID Usuario</label>
     </div>
<div class="user-box2">
  <input  type="text"
   value={cod_produto}
   onChange={e=>setCod_Produto(e.target.value)}/>
  <label>Cód. do Produto</label>
</div>
   
      <div class="user-box2">
     <input  type="text"
     value={data_pedido}
     onChange={e=>setDataPedido(e.target.value)}/>
     <label>Data do Pedido</label>
       </div>
            <div class="user-box2">
      <input  type="text"
      value={obs}
      onChange={e=>setObs(e.target.value)}/>
      <label>Obs.</label>
          </div>
      
 <div class="user-box2">
     <input  type="text"
      value={flag_baixa}
      onChange={e=>setFlag_Baixa(e.target.value)}/>
     <label> Flag Baixa </label>
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