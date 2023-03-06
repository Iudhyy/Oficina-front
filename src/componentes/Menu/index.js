import {FiUser,FiTruck,FiBriefcase,FiLayers,FiAnchor,FiPackage,FiTrendingUp,FiUserPlus,FiSlack,FiServer,FiShoppingCart,FiShoppingBag} from "react-icons/fi";
import { GoFile,GoOrganization } from "react-icons/go";
import { IoIosCar } from "react-icons/io";
export default function Menu(){

    return(
     

        <div className="menu">
            <p> Menu</p>
            <a className="btn" href="/listafuncionario"><GoOrganization/>Funcionários</a>

            <a className="btn" href="/listacliente"><FiUser/>Cliente</a>

            <a className="btn" href="/listafornecedor"><FiTruck/>Fornecedor</a>

            <a className="btn" href="/listapatrimonio"><FiPackage/>Produto</a>

            <a className="btn" href="/listasetor"><FiLayers/>Setor</a>

            <a className="btn" href="/listalotacao"><FiSlack/>Pedido</a>

            <a className="btn" href="/listalotacao"><FiServer/>Estoque</a>

            <a className="btn" href="/listalotacao"><FiShoppingCart/>Itens</a>

            <a className="btn" href="/listalotacao"><FiShoppingBag/>Item Pedido</a>

            <a className="btn" href="/listalotacao"><GoFile/>Nota</a>

            <a className="btn" href="/listalotacao"><FiUserPlus/>Perfil</a>

            <a className="btn" href="/listalotacao"><IoIosCar/>Veiculos</a>
            
            <a className="btn" href="/listalotacao"><FiTrendingUp/>Relatorios</a>

            





            
        </div>
    )
}