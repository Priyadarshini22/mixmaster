import { Outlet } from "react-router";
import { Navbar } from "../../custom/Navbar";

export const Landing = () => {
    return <div>
    <Navbar/>
    <Outlet/>
    </div>
}

export default Landing;