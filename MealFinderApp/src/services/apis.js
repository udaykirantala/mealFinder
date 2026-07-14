import axios from "axios"

const commonApiPath = import.meta.env.VITE_COMMON_PATH;

export const mealCatApi = ()=>{
   return axios.get(`${commonApiPath}/json/v1/1/categories.php`)
}

export const mealByNameApi = ({foodName})=>{
   return axios.get(`${commonApiPath}/json/v1/1/search.php?s=${foodName}`)
}
export const mealDetailsApi = ({id})=>{
   return axios.get(`${commonApiPath}/json/v1/1/lookup.php?i=${id}`)
}
export const mealSearchApi = ({searchText})=>{
   return axios.get(`${commonApiPath}/json/v1/1/search.php?s=${searchText}`)
}