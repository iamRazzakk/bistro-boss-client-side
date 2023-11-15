
import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/cover/Cover';
import img from '../../../assets/menu/banner3.jpg'
import dessert from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/useMenu/UseMenu';
import SectionTitle from '../../../component/SectionTitle';
import MenuCetagory from '../menuCetagory/MenuCetagory';
const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const drinks = menu.filter(item => item.category === 'drinks')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        < div >
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>

            <SectionTitle heading={"Today's offer"} subHeading={"Don't Miss"}></SectionTitle>
            <MenuCetagory items={offered}></MenuCetagory>
            <MenuCetagory items={desserts} title="dessert" coverImg={dessert}></MenuCetagory>
            <MenuCetagory items={pizza} title={"Pizza"} coverImg={pizzaImg}></MenuCetagory>
            <MenuCetagory items={salad} title={"salad"} coverImg={saladImg}></MenuCetagory>
            <MenuCetagory items={soup} title={"Soup"} coverImg={soupImg}></MenuCetagory>
        </div >
    );
};

export default Menu;