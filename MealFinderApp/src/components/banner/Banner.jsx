import { useEffect, useState } from "react";
import bannerImage from "../../assets/Bg.jpg";
import { Search } from "../search/Search";
import { useDispatch, useSelector } from "react-redux";
import "./Banner.css";
import { fetchMealSearch } from "../../actions/mealSearchAction";

export const Banner = () => {
    const [search, setSearch] = useState("");    
    return (
        <section
            className="banner"
            style={{ backgroundImage: `url(${bannerImage})` }}
        >
            <div className="banner-content">
                <Search/>
                <p className="banner-content-question">What are your favorite cuisines?</p>
                <p className="banner-content-quet">PERSONALIZE YOUR EXPERIENCE</p>
            </div>
        </section>
    );
};