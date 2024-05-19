import { Outlet, useLoaderData } from "react-router";
import { Navbar } from "../../custom/Navbar";
import axios from "axios";
import CocktailList from "../../custom/CocktailList";
import SearchForm from "../../custom/SearchForm";
import { useQuery } from "@tanstack/react-query";

const cocktailURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const searchCocktail = (searchTerm) => {
   return   {
  queryKey:['search',searchTerm || 'all'],
   queryFn:async() => {
        const response = await axios.get(`${cocktailURL}${searchTerm}`)
        console.log(response)
        return response.data.drinks;
   }
  }

}
export const Loader = (queryClient)=>async({request}) => {
  const url = new URL(request.url);
  console.log(url)
    const searchTerm = url.searchParams.get('search') || '';
    // const response = await axios.get(`${cocktailURL}${searchTerm}`)
    // const drinks= response.data.drinks;
    await queryClient.ensureQueryData(searchCocktail(searchTerm));
    return {searchTerm}
}

const Landing = () => {
    const {searchTerm} = useLoaderData();
    const {data:drinks,isLoading} = useQuery(searchCocktail(searchTerm))
    if(isLoading) return <div className="loading"></div>
    return <div>
      <SearchForm searchterm={searchTerm}/>
      <CocktailList drinks={drinks}/>
    </div>
}

export default Landing;