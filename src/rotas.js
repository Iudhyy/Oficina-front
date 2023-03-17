import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
// import Teste from "./pages/testes";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Funcionario from "./pages/listafuncionario";
import Cadastrofuncionario from "./pages/cadastrofuncionario";
import Editarfuncionario from "./pages/editarfuncionario";
import Listacliente from "./pages/listacliente";
import ListaFornecedor from "./pages/listafornecedor";
import CadastroFornecedor from "./pages/cadastrofornecedor";
import EditarFornecedor from "./pages/editarfornecedor";
import CadastroCliente from "./pages/cadastrocliente";
import EditarCliente from "./pages/editarcliente";
import ListaProduto from "./pages/listaproduto";
import CadastroProduto from "./pages/cadastroproduto";
import EditarProduto from "./pages/editarProduto";



export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Login/>} />

            
            <Route path="/dashboard" element={<Dashboard/>} />
            
            <Route path="/listafuncionario" element={<Funcionario/>} />

            <Route path="/listacliente" element={<Listacliente/>} />

            <Route path="/cadastrofuncionario" element={<Cadastrofuncionario/>} />

            <Route path="/cadastroproduto" element={<CadastroProduto/>} />

            <Route path="/cadastrocliente" element={<CadastroCliente/>} />

            <Route path="/editarfuncionario/:id" element={<Editarfuncionario/>} />

            <Route path="/editarproduto/:id" element={<EditarProduto/>} />

            <Route path="/editarcliente/:id" element={<EditarCliente/>} />

            <Route path="/editarfornecedor/:id" element={<EditarFornecedor/>} />

            <Route path="/cadastrofornecedor" element={<CadastroFornecedor/>} />

            <Route path="/listafuncionario" element={<Funcionario/>} />

            <Route path="/listaproduto" element={<ListaProduto/>} />

            <Route path="/listafornecedor" element={<ListaFornecedor/>} />
            </Routes>
        </BrowserRouter>
    )
}