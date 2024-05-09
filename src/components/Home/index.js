import { Outlet, useNavigate, useNavigation } from "react-router";
import Navbar from "../../custom/Navbar";

export const Home = () => {
    const data = useNavigation();
    console.log('DataTransfer',data)
    const isPageLoading = data.state==='loading';
    console.log("IS",isPageLoading)
    return <div className="main">
        <Navbar/>
        {isPageLoading?<div className="loading"/>:<Outlet/>}
    </div>
}

export default Home;