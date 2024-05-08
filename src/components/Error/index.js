import { useRouteError } from "react-router";
import Wrapper from "../../styled-css/Wrapper";
import { Link } from "react-router-dom";

export const Error = () => {
    const error = useRouteError();
    console.log(error)
    if(error.status===404)
        {
            return <Wrapper><div className='page errorPage'><h3>Oh!!</h3>
            <p>We can't seem to find the page</p>
            <Link to='/' className='btn'>Back To Home</Link>
            </div>
            </Wrapper>
        }
    else{
    return <div className='page errorPage'><h3>Something went wrong!</h3></div>
    }
}

export default Error;