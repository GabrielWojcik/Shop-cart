import "./styles.css";
import React, { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';

import Menu from "../../assets/menu.png";
import Favorite from "../../assets/favorite.png";
import User from "../../assets/user.png";
import MenuMobile from "../menu/menu"
import useRouterNavBar from "../../hooks/router";

export default function MenuMain() {
    const [isActiveMenu, setIsActiveMenu] = useState(false)
    
    const ativaLink = () => {
        const newRouter = useRouterNavBar()
        const navegarPara = useNavigate()
        newRouter('/sacola')
    }

    return(
        <>
        <header>
        <nav>
        <div className="container">
            <div className="container-navbar">
                <NavLink to="/"><p className="logo">Beauty</p></NavLink>
                {/* <NavLink 
                exact  
                to="/sacola"> */}
                    <p onClick={ativaLink} id="sacola" className="sac">Sacola</p>
                {/* </NavLink> */}
                <NavLink activeClassName="selected" to="/pagamento" ><p id="pagamento" >Pagamento</p></NavLink>
                <NavLink to="/confirmacao" activeClassName="selected"><p id="confirmacao" >Confirmação</p></NavLink>
            </div>
        </div>

        <div className="container-navbar-mobile">
          <div className="menu">
                <img 
                src={Menu} 
                alt="" 
                className="icon-header"
                onClick={() => setIsActiveMenu(true)}
                />
          </div>
         
          
           <p className="logo">Beauty</p>
          <div>
                <img src={Favorite} alt="" className="icon-header" />
                <img src={User} alt="" className="icon-header" />
          </div>          

        </div>
        {
            isActiveMenu === true ?
                <MenuMobile menuActive={() => setIsActiveMenu()} />
            :
            null
          }

        </nav>
        </header>
        </>
    )
}