import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { HamburgerMenu } from "../hamburgerMenu/HamburgerMenu";
import "./HeaderNav.css"
import { useNavigate } from "react-router-dom";

export const HeaderNav = () => {
    const navigate =useNavigate()
    return (
        <nav>
            <li onClick={()=>navigate('/')}>
                <p><span><FontAwesomeIcon icon={faHouse} /></span>MEAL FINDER</p>
            </li>
            <li>
                <HamburgerMenu />
            </li>
        </nav>
    )
}