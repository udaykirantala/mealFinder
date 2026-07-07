import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { HamburgerMenu } from "../hamburgerMenu/HamburgerMenu";
import "./HeaderNav.css"

export const HeaderNav = () => {
    return (
        <nav>
            <li>
                <p><span><FontAwesomeIcon icon={faHouse} /></span>MEAL FINDER</p>
            </li>
            <li>
                <HamburgerMenu />
            </li>
        </nav>
    )
}