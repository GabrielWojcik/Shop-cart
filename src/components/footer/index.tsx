import { ContainerFooter } from "./styles"
import { NavLink } from 'react-router-dom';

export default function Footer() {
    return(
        <ContainerFooter>
           <NavLink to="/"> 
            <p>Beauty</p>
           </NavLink>
        </ContainerFooter>
    )
}