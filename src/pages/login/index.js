import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';




function Login() {
    
    const [dados,setDados]=useState([]);
    const [email,setEmail] =useState("");
    const [senha,setSenha] =useState("");
    const navigate=useNavigate();

    function logar(e){
        e.preventDefault();
        let dadosnovos
        let lista =JSON.parse(localStorage.getItem("cad-usuarios")||"[]");
    
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
        <section className="form">
        <form onSubmit={logar}>
            <h1>Oficina</h1>
            <h1>Faça seu login</h1>
                <input
                value={email}
                onChange={e=>setEmail(e.target.value)}
                placeholder="Email"
                />
                <input placeholder="senha" type="password"
                     value={senha}
                     onChange={e=>setSenha(e.target.value)}
                />
                <button className="button_login" type="submit">
                Entrar
                </button>
        </form>
    </section>
    <section className="div-imagem">
        
        
    </section>
    
    </div>
  );
}

export default Login;