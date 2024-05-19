import { Form, useNavigate, useNavigation } from "react-router-dom";
import Wrapper from "../styled-css/SearchFormWrapper";

const SearchForm = ({searchterm}) => {
    const navigation = useNavigation();
    const isSubmitting = navigation=='isSubmitting';

    return <Wrapper><Form className='form'>
       <input type="search" name="search" className="form-input" defaultValue={searchterm}/>
       <button type="submit" className="btn btn-block" disabled={isSubmitting}>{isSubmitting ? "Searching" : "Search"}</button>
    </Form>
    </Wrapper>
}

export default SearchForm;