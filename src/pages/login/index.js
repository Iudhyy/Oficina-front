import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../global.css';




function Login() {
    
    const [dados,setDados]=useState([]);
    const [email,setEmail] =useState("");
    const [senha,setSenha] =useState("");
    const navigate=useNavigate();

    function logar(e){
        e.preventDefault();
        let dadosnovos
        let lista =JSON.parse(localStorage.getItem("cad-funcionario")||"[]");
    
        dadosnovos=lista.filter(item=>item.email==email && item.senha==senha);
    
        if(dadosnovos.length>0){
            navigate("/dashboard");
        }
        else{
            alert("email ou senha invalidos")
        }
        
        
    }
    
  return (
    <div className='tudo'>
      <div className='topo'></div>
        <section className="form">
        <div className='topo'>
          <p className='texto-colorido'>Ola seja bem vindo! :)</p>
        </div>
    </section>
    <div class="login-box">
      
        
  <form onSubmit={logar}>
    
    <div class="user-box">
      <input  type="text"
      value={email}
      onChange={e=>setEmail(e.target.value)}/>
      <label>Email</label>
    </div>
    <div class="user-box">
      <input type="password"
      value={senha}
      onChange={e=>setSenha(e.target.value)}/>
      <label>Senha</label>
    </div>
   
    <button className="button_login" type="submit">
        Entrar
            </button>
   
   
   
  </form>
</div>
  
    
    </div>

    
  );

 
}

export default Login;