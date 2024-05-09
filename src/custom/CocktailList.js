import CocktailListWrapper from "../styled-css/CocktailListWrapper"
import Wrapper from "../styled-css/Wrapper"
import CocktailCard from "./CocktailCard"

const CocktailList = ({drinks}) => {

    if(!drinks)
        {
            return <h3>No matching cocktails found</h3>
        }
    const formattedDrinks = drinks.map((i) => {
        const {idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass} = i
        return {
            id:idDrink,
            name:strDrink,
            image:strDrinkThumb,
            info:strAlcoholic,
            glass:strGlass
        }
    })

    return <CocktailListWrapper>
        {formattedDrinks.map((i) => {
            return <CocktailCard key={i.id} items={i}/>
        })}
    </CocktailListWrapper>
}

export default CocktailList;