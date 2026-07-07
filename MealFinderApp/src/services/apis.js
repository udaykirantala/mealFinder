import axios from "axios"

const commonApiPath = import.meta.env.VITE_COMMON_PATH;

export const mealCatApi = ()=>{
   return axios.get(`${commonApiPath}/json/v1/1/categories.php`)
}