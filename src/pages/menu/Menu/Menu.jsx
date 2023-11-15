
import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/cover/Cover';
import img from '../../../assets/menu/banner3.jpg'
const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            <Cover img={img} title={'our menu'}></Cover>
        </div>
    );
};

export default Menu;