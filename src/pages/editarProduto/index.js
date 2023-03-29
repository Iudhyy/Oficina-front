import React,{useState,useEffect} from "react";
import Head from "../../componentes/Head";
import Menu from "../../componentes/Menu";
import { useNavigate, useParams } from "react-router-dom";
import { setAppElement } from "react-modal";

export default function EditarProduto(){
    const {id} =useParams();
    const navigate = useNavigate();
    // const[id,setId] = useState("");
    const [nome_produto,setNome_produto] = useState("");
    const [codigo,setCodigo] = useState("");
    const [qtd_minima,setQtd_minima] = useState("");
    const [unidade,setUnidade] = useState("");
    const [categoria,setCategoria] = useState("");
    const [msg,setMsg] = useState("");
    const [dados,setDados]=useState([]);
    
    
    const _data = {
        id,
        codigo,
        nome_produto,
        qtd_minima,
        unidade,
        categoria

    }

    // function validaremail(){
        // var re = /\S+@\S+\.\S+/;
        // return re.test(email);
       
    
    // } 

    useEffect(()=>{
        mostrardados();
    },[])
   async function mostrardados(){
        try {
            const response = await fetch(`http://10.1.2.106:5000/produto/${id}`, {
              method: "GET",
              headers: {
                'Content-Type': 'application/json; charset=utf-8'
              }
            });
            if (response.ok) {
              const resposta = await response.json();
              setCodigo(resposta.produto[0].codigo);
              setNome_produto(resposta.produto[0].nome_produto);
              setCategoria(resposta.produto[0].categoria);
              setQtd_minima(resposta.produto[0].qtd_minima);
              setUnidade(resposta.produto[0].unidade)
            }
        
           
          } catch (error) {
            console.log(error);
          }
    
    }

    function verificarduplicidade(email){
        let dadosnovos = [];
        dadosnovos = dados.filter(item=>item.email==email);
        if(dadosnovos.length>0){
            return true
        }
            return false;
    }

    

    async function salvardados(e){

         e.preventDefault();
        let i=0;
        let errorMsg=[];

        if(i==0){
            
                try {
                  const response = await fetch(`http://10.1.2.106:5000/produto`, {
                    method: "PATCH",
                    body: JSON.stringify(_data),
                    headers: {
                      'Content-Type': 'application/json; charset=utf-8'
                    }
                  });
                  if (response.ok) {
                    alert("dados salvos com sucesso!");
                                
                    window.location.href="/listaproduto"
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
    value={codigo}
    onChange={e=>setCodigo(e.target.value)}/>
    <label>Código</label>
  </div>
   <div class="user-box2">
     <input type="text"
     value={nome_produto}
     onChange={e=>setNome_produto(e.target.value)}/>
     <label>nome</label>
   </div>
   <div class="user-box2">
     <input  type="text"
       value={qtd_minima}
       onChange={e=>setQtd_minima(e.target.value)}/>
     <label>quant. minima</label>
   </div>
   
   <div class="user-box2">
  <input  type="text"
  value={unidade}
  onChange={e=>setUnidade(e.target.value)}/>
  <label>unidade</label>
 </div>

 <div class="user-box2">
   <input type="text"
   value={categoria}
   onChange={e=>setCategoria(e.target.value)}/>
   <label>categoria</label>
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