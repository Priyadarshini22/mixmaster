import { useRouteError } from "react-router-dom";
import Navbar from "../../custom/Navbar";
import Wrapper from "../../styled-css/Wrapper";

const SingleErrorPage = () => {
    
    const error = useRouteError();
    console.log(error)
    return <Wrapper><div className="page"><h2>{error.message}</h2></div></Wrapper>;
};



export default SingleErrorPage;