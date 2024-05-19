import { Link, Navigate, useLoaderData } from "react-router-dom";
import Wrapper from "../../styled-css/SingleCocktail";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const singleCocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const searchDetails = (id) => {
    return  {queryKey : ["cocktail", id ],
        queryFn : async() => {
            const response = await axios.get(`${singleCocktailURL}${id}`)
            return response.data.drinks;
        }
}
}
export const loader = (queryClient)=>async({params}) => {
    const {id} = params;
    await queryClient.ensureQueryData(searchDetails(id))
 // const {data} = await axios.get(`${singleCocktailURL}${id}`)
    return {id};

}
export const Cocktail = () => {
    const {id} = useLoaderData();
   const {data} = useQuery(searchDetails(id));
    if(!data) return <Navigate to='/'/>;
    const singleData = data[0];

    const {
        strDrink:Name,
        strCategory:Category,
        strGlass:Glass,
        strInstructions:Instructions,
        strAlcoholic:Info,
        strDrinkThumb:image
    }=singleData;
    const list = Object.keys(singleData).filter((key) => (key.startsWith("strIngredient") && singleData[key]!==null))
    var ingredients = "";
    list.map((i,index) => {
        if(index!==list.length-1)
        {
        return ingredients+=singleData[i]+", "
        }
        else{
         return   ingredients+=singleData[i]  
        }
    })
    return <Wrapper>
        <header>
        <Link to='/' className="link"><span className='btn'>Back to Home</span></Link>
        <h3>{Name}</h3>
        </header>
        <div className='singeCocktailPage'>
            <img src={image} alt='image' className='img'/>
            <div class="detail">
                <p>
                    <span className='drink'>Name : </span>
                    {Name}
                </p>
                <p>
                    <span className='drink'>Category : </span>
                    {Category}
                </p>
                <p>
                    <span className='drink'>Info :    </span>
                    {Info}
                </p>
                <p>
                    <span className='drink'>Glass : </span>
                    {Glass}
                </p>
                <p>
                    <span className='drink'>ingredients : </span>
                    {ingredients}
                </p>
                <p>
                    <span className='drink' >Instructions : </span>
                    {Instructions}
                </p> 
            </div>
        </div>
        </Wrapper>

}
export default Cocktail;