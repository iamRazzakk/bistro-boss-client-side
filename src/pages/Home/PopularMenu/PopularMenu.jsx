import { useEffect, useState } from "react";
import SectionTitle from "../../../component/SectionTitle";
import MenuItem from "../../shared/menuItem/MenuItem";
import useMenu from "../../../hooks/useMenu/UseMenu";

const PopularMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === "popular")
    // const [menu, setMenu] = useState()
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItem = data.filter(item => item.category === "popular")
    //             setMenu(popularItem)
    //         })
    // }, [])
    // console.log(menu);
    return (
        <div>
            <section className="mb-12">
                <SectionTitle
                    heading='From Our Menu'
                    subHeading="Popular item"
                >
                </SectionTitle>
                <div className="grid md:grid-cols-2 gap-10">
                    {
                        popular?.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                    }
                </div>
            </section>
        </div>
    );
};

export default PopularMenu;