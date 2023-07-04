import "./styles.css";
import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  
    

    return(
        <header>
        <nav>
        <div className="container">
            <div className="container-navbar">
                <NavLink activeStyle={{borderBottom: 'solid 3px #fff', paddingBottom: '1em'}} exact  to="/sacola" ><p id="sacola" >Sacola</p></NavLink>
                <NavLink activeClassName="selected" to="/pagamento" ><p id="pagamento" >Pagamento</p></NavLink>
                <NavLink to="/confirmacao" activeClassName="selected"><p id="confirmacao" >Confirmação</p></NavLink>
            </div>
        </div>
        </nav>
        </header>
    )
}