import { Link } from "react-router-dom";
import CoctailCardWrapper from "../styled-css/CoctailCardWrapper";
import Wrapper from "../styled-css/Wrapper";

const CocktailCard = ({items}) => {
    return <CoctailCardWrapper>
        <div className="img-container">
        <img src={items.image} alt='image' className='img'/>
        </div>
        <div className="footer">
        <h4>{items.name}</h4>
        <h5>{items.glass}</h5>
        <p>{items.info}</p>
        <Link to={`/cocktail/${items.id}`} className='link'><span className='btn'>Detail</span></Link>

        </div>
    </CoctailCardWrapper>
}

export default CocktailCard;