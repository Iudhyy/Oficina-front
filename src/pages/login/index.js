import React, { useState } from 'react';
import { resolvePath, useNavigate } from 'react-router-dom';
import '../../global.css';




function Login() {
    
    const [dados,setDados]=useState([]);
    const [email,setEmail] =useState("a@gmail.com");
    const [senha,setSenha] =useState("123");
    const navigate=useNavigate();
    let _data = {
      email: email,
      senha: senha, 
    }
    async function logar(e){
      e.preventDefault();
      try {
        const response = await fetch(`http://10.1.2.106:5000/usuario/logar`, {
          method: "POST",
          body: JSON.stringify(_data),
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          }
        });
        if (response.ok) {
          const resposta = await response.json();

          console.log(resposta.usuario[0].login);
       
          let session=
          {
              nome:resposta.usuario[0].nome,
              email:resposta.usuario[0].email,
              id_usuario:resposta.usuario[0].id_usuario
          }
         
          //aqui setamos a chave na sessionStorage
          sessionStorage.setItem("session",JSON.stringify(session))
          window.location.href="/dashboard"

                     
        } else {
          console.log("E-mail ou senha inválidos")
          console.log(_data);
        }
      } catch (error) {
        console.log(error);
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