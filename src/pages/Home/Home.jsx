import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Categorys from "./Categorys/Categorys";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testmonials from "./Testmonials/Testmonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            {/* <h1>This is Home</h1> */}
            <Banner></Banner>
            <Categorys></Categorys>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testmonials></Testmonials>
        </div>
    );
};

export default Home;