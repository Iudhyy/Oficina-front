import {FiUser,FiTruck,FiBriefcase,FiLayers,FiAnchor,FiPackage,FiTrendingUp,FiUserPlus,FiSlack,FiServer,FiShoppingCart,FiShoppingBag} from "react-icons/fi";
import { GoFile,GoOrganization } from "react-icons/go";
import { IoIosCar } from "react-icons/io";
export default function Menu(){
    return(
        <div className="menu">
            <p> Menu</p>
            <a href="/listausuarios"><GoOrganization/>Funcionários</a>

            <a href="/listausuarios"><FiUser/>Cliente</a>

            <a href="/listaempresas"><FiTruck/>Fornecedor</a>

            <a href="/listapatrimonio"><FiPackage/>Produto</a>

            <a href="/listasetor"><FiLayers/>Setor</a>

            <a href="/listalotacao"><FiSlack/>Pedido</a>

            <a href="/listalotacao"><FiServer/>Estoque</a>

            <a href="/listalotacao"><FiShoppingCart/>Itens</a>

            <a href="/listalotacao"><FiShoppingBag/>Item Pedido</a>

            <a href="/listalotacao"><GoFile/>Nota</a>

            <a href="/listalotacao"><FiUserPlus/>Perfil</a>

            <a href="/listalotacao"><IoIosCar/>Veiculos</a>
            
            <a href="/listalotacao"><FiTrendingUp/>Relatorios</a>





            
        </div>
    )
}