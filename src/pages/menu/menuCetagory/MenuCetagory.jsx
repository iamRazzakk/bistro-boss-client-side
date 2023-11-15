import Cover from "../../shared/cover/Cover";
import MenuItem from "../../shared/menuItem/MenuItem";
import { Link } from 'react-router-dom';

const MenuCetagory = ({ items, title, coverImg }) => {
    return (
        <div className='pt-8'>
            {title && <Cover img={coverImg} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-16">
                {
                    items?.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <button className="btn btn-outline border-0 border-b-4 mt-4 text-white">Order now</button>
            </Link>
        </div>
    );
};

export default MenuCetagory;