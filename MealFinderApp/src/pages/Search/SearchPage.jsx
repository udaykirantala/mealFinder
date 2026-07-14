import { useSelector } from "react-redux";
import { SearchCard } from "../../components/searchCard/SearchCard";
import "./SearchPage.css"
import { Loader } from "../../components/Loader/Loader";
export const SearchPage = ()=>{
    const { loading,mealsSearch } = useSelector((state) => state.mealSearch);
    if(loading){
        return <Loader/>
    }
    return(
        <div className="search-page-continer">
            <div className="search-card">
                {mealsSearch?.map((item)=>(
                    <SearchCard meal={item}/>
                ))}
            </div>
        </div>
    )
}