import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useRef, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import "./HamburgerMenu.css"
import { fetchMealCat } from "../../actions/mealCategories";

export const HamburgerMenu = ({cat}) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const dispatch = useDispatch()
    const {categories} = useSelector((state)=>state.meal);
    useEffect(()=>{
        dispatch(fetchMealCat())
        // dispatch(fetchMealCategories())
    },[dispatch])    
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
                    {categories.map((cat)=>(
                        <p>{cat.strCategory}</p>
                    ))}
                </div>
            )}
        </div>
    );
};