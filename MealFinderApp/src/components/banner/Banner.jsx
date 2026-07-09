import bannerImage from "../../assets/Bg.jpg";
import { Search } from "../search/Search";
import "./Banner.css";

export const Banner = () => {
    return (
        <section
            className="banner"
            style={{ backgroundImage: `url(${bannerImage})` }}
        >
            <div className="banner-content">
                <Search />
                <p className="banner-content-question">What are your favorite cuisines?</p>
                <p className="banner-content-quet">PERSONALIZE YOUR EXPERIENCE</p>
            </div>
        </section>
    );
};