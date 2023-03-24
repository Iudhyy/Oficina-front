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
import ListaUsuario from "./pages/listafuncionario";
import ListaSetor from "./pages/listasetor";
import ListaPedido from "./pages/listapedido";
import ListaNota from "./pages/listanota";
import ListaEstoque from "./pages/listaestoque";
import EditarFuncionario from "./pages/editarfuncionario";

import EditarPedido from "./pages/editarpedido";
import EditarSetor from "./pages/editarsetor";
import CadastroPedido from "./pages/cadastropedido";
import CadastroSetor from "./pages/cadastrosetor";




export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Login/>} />

            
            <Route path="/dashboard" element={<Dashboard/>} />
            
            <Route path="/listausuario" element={<ListaUsuario/>} />

            <Route path="/listacliente" element={<Listacliente/>} />

            <Route path="/listasetor" element={<ListaSetor/>} />

            <Route path="/listapedido" element={<ListaPedido/>} />

            <Route path="/listanota" element={<ListaNota/>} />
            
            <Route path="/listaestoque" element={<ListaEstoque/>} />

            <Route path="/cadastrofuncionario" element={<Cadastrofuncionario/>} />

            <Route path="/cadastroproduto" element={<CadastroProduto/>} />

            <Route path="/cadastropedido" element={<CadastroPedido/>} />
            
            <Route path="/cadastrosetor" element={<CadastroSetor/>} />

            <Route path="/cadastrocliente" element={<CadastroCliente/>} />

            <Route path="/editarproduto/:id" element={<EditarProduto/>} />

            <Route path="/editarfuncionario/:id" element={<EditarFuncionario/>} />

            <Route path="/editarcliente/:id" element={<EditarCliente/>} />

            <Route path="/editarfornecedor/:id" element={<EditarFornecedor/>} />
            
            <Route path="/editarpedido/:id" element={<EditarPedido/>} />

            <Route path="/editarsetor/:id" element={<EditarSetor/>} />

            <Route path="/cadastrofornecedor" element={<CadastroFornecedor/>} />

            <Route path="/listafuncionario" element={<Funcionario/>} />

            <Route path="/listaproduto" element={<ListaProduto/>} />

            <Route path="/listafornecedor" element={<ListaFornecedor/>} />
            </Routes>
        </BrowserRouter>
    )
}