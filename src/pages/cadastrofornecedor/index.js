import React, { useState } from "react";
import Head from "../../componentes/Head";
import Menu from "../../componentes/Menu";
import { useNavigate } from "react-router-dom";

export default function CadastroFornecedor() {
  const navigate = useNavigate();
  const [cnpj, setCnpj] = useState("");
  const [razaoSocial, setRazaoSocial] = useState("");
  const [telefone, setTelefone] = useState("");

  const [msg, setMsg] = useState("");

  async function salvarDados(e) {
    e.preventDefault();

    const fornecedor = {
      cnpj: cnpj,
      razao_social: razaoSocial,
      telefone: telefone
      
    };

    // Validar os campos antes de enviar para o backend

    try {
      const response = await fetch(`http://10.1.2.106:5000/fornecedor`, {
        method: "POST",
        body: JSON.stringify(fornecedor),
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      });
      console.log(response)
      if (response.ok) {
        alert("Dados salvos com sucesso!");
        navigate("/listafornecedor");
      } else {
        console.log("Dados inválidos!!!");
      }
    } catch (error) {
      console.log(error);
    }
  }
return (
  <div className="dashboard-container">
    <Menu />
    <div className="principal">
      <Head title="Cadastro de Fornecedor" />
      <div class="login-box2">
        <form onSubmit={salvarDados}>
          <div class="user-box2">
            <input
              type="text"
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
            />
            <label>CNPJ</label>
          </div>
          <div class="user-box2">
            <input
              type="text"
              value={razaoSocial}
              onChange={(e) => setRazaoSocial(e.target.value)}
            />
            <label>Razão Social</label>
          </div>
          <div class="user-box2">
            <input
              type="text"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
            <label>Telefone</label>
          </div>
          <button className="button_save" type="submit">
            Salvar
          </button>
        </form>
      </div>
    </div>
  </div>
)}
