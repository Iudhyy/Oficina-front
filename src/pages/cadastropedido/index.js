import React,{useState,useEffect} from "react";
import Head from "../../componentes/Head";
import Menu from "../../componentes/Menu";
import { useNavigate } from "react-router-dom";
import { GoArrowSmallRight } from "react-icons/go";
    
export default function CadastroPedido(){
    const navigate = useNavigate();
    const [quantidade_pedida,setQuantidade_Pedida] = useState("");
    const [id_usuario,setId_Usuario] = useState(0);
    const [cod_produto,setCod_Produto] = useState("");
    const [data_pedido,setDataPedido] = useState("");
    const [obs,setObs] = useState("");
    const [flag_baixa,setFlag_Baixa] = useState("");
    const [msg,setMsg] = useState("");

    
    

    function validarEmail(){
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
       
    
    }

                      


    

   async function salvardados(e){
     
        e.preventDefault();

        let i = 0;
        let errorMsg = [];

   
        if(i==0){
           
            const pedido = {
                quantidade_pedida:quantidade_pedida,
                id_usuario:id_usuario,
                cod_produto:cod_produto,
                data_pedido:data_pedido,
                obs:obs,
                flag_baixa:flag_baixa
                
                
                
                
                
                
            }
     
            try {
              const response = await fetch(`http://10.1.2.106:5000/pedido`, {
                method: "POST",
                body: JSON.stringify(pedido),
                headers: {
                  'Content-Type': 'application/json; charset=utf-8'
                }
              });
              if (response.ok) {
                alert("dados salvos com sucesso!");
            
                window.location.href="/listapedido"
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
            <Head title="Cadastro de Pedido" />
            

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

<button className="button_save" type="submit" >
      Salvar
  </button>    
    
  </form>
</div>
         
    </div>
    
</div>

 )   
 }