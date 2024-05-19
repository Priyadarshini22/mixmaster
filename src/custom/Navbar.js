import { NavLink } from "react-router-dom"
import Wrapper from "../styled-css/Wrapper";

export const Navbar = () => {
    return <Wrapper><div className="nav-center">
        <span className="logo">MixMaster</span>
        <div className="nav-links">
            <NavLink to={"/"} className={"nav-link"}>
                Home
            </NavLink>
            <NavLink to={"/about"} className={"nav-link"}>
                About
            </NavLink>
            <NavLink to={"/newsLetter"} className={"nav-link"}>
                NewsLetter
            </NavLink>
        </div>
    </div>
    </Wrapper>
}



export default Navbar;