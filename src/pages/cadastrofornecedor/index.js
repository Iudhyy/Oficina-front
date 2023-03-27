import React, { useState } from "react";
import Head from "../../componentes/Head";
import Menu from "../../componentes/Menu";
import { useNavigate } from "react-router-dom";

export default function CadastroFornecedor() {
  const navigate = useNavigate();
  const [cnpj, setCnpj] = useState("");
  const [razaoSocial, setRazaoSocial] = useState("");
  const [responsavel, setResponsavel] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [ativo, setAtivo] = useState(false);
  const [msg, setMsg] = useState("");

  async function salvarDados(e) {
    e.preventDefault();

    const fornecedor = {
      cnpj: cnpj,
      razao_social: razaoSocial,
      responsavel: responsavel,
      endereco: endereco,
      cidade: cidade,
      estado: estado,
      email: email,
      telefone: telefone,
      ativo: ativo,
    };

    // Validar os campos antes de enviar para o backend

    try {
      const response = await fetch(`http://seuservidor.com/fornecedor`, {
        method: "POST",
        body: JSON.stringify(fornecedor),
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      });
      if (response.ok) {
        alert("Dados salvos com sucesso!");
        navigate("/lista-fornecedores");
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
              value={responsavel}
              onChange={(e) => setResponsavel(e.target.value)}
            />
            <label>Responsavel</label>
          </div>
          <div class="user-box2">
            <input
              type="text"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />
            <label>Endereço</label>
          </div>
          <div class="user-box2">
            <input
              type="text"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />
            <label>cidade</label>
          </div>
          <div class="user-box2">
            <input
             type="text"
              value={estado}
             onChange={(e) => setEstado(e.target.value)}
             />
             <label>Estado</label>
             <div class="user-box2">
            <input
             type="text"
            value={email}
             onChange={(e) => setEmail(e.target.value)}
             />
            <label>Email</label>
            </div>
<           div class="user-box2">
             <input
               type="text"
             value={telefone}
             onChange={(e) => setTelefone(e.target.value)}
             />
            <label>Telefone</label>
            </div>
            <div class="user-box2">
            <input
            type="text"
            value={ativo}
            onChange={(e) => setAtivo(e.target.value)}
            />
            <label>cidade</label>
            </div>
            </div>

          <button className="button_save" type="submit">
            Salvar
          </button>
          <pre>{msg}</pre>
        </form>
      </div>
    </div>
  </div>
);
}