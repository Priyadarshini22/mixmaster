import { Outlet, useLoaderData } from "react-router";
import { Navbar } from "../../custom/Navbar";
import axios from "axios";
import CocktailList from "../../custom/CocktailList";

const cocktailURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
export const Loader = async() => {
    const searchTerm = '';
    const response = await axios.get(`${cocktailURL}${searchTerm}`)
    const drinks= response.data.drinks;
    return {drinks,searchTerm}
}

const Landing = () => {
    const {drinks,searchTerm} = useLoaderData();
    console.log(drinks);
    return <div>
      <CocktailList drinks={drinks}/>
    </div>
}

export default Landing;