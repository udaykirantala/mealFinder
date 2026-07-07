import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useRef, useState } from "react";
import "./HamburgerMenu.css"

export const HamburgerMenu = ({cat}) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsOpen(false);
            };
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        };

    }, [])
    return (
        <div className="menu-container" ref={menuRef}>
            {
                !isOpen && (
                    <button
                        className="hamburger"
                        onClick={() => setIsOpen((prev) => !prev)}
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                )
            }
            {isOpen && (
                <div className="menu">
                    <button className="closebtn"
                        onClick={() => setIsOpen(false)}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <p>hellow</p>
                </div>
            )}
        </div>
    );
};