import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <Navbar></Navbar>
            {
                navigation.state === 'loading' ?
                    <p>Loading...</p> :
                    <Outlet></Outlet>
            }

            <Footer></Footer>
        </div>
    );
};

export default Home;