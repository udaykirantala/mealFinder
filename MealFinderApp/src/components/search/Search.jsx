import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Search.css"
export const Search = () => {
    const [search, setSearch] = useState("")

    const handleSearch = () => {
        if (!search.trim()) return;
        console.log(search)
        setSearch("");
    };
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };
    return (
        <div className="searchContiner">
            <input
                type="text"
                placeholder="Search recipes here..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button className="searchBtn" onClick={handleSearch}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon"/>
            </button>
        </div>
    )
}