import SectionTitle from "../../../component/SectionTitle";
import img from '../../../assets/home/featured.jpg'
import "./Featured.css"

const Featured = () => {
    return (
        <div className="featured-item text-white pt-8 my-20 bg-fixed">
            <SectionTitle subHeading={'Check it out'} heading={"Featured Item"}></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 py-20 px-36 pt-12">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea tenetur aliquid libero ipsum quia dolore cupiditate perspiciatis numquam tempora, suscipit ducimus minima placeat a nobis laborum doloremque at eum. Fugit quasi ipsam iste eum, repellendus aliquam! Vero ex error natus voluptates! Quos in reprehenderit magni. Ipsum dolorum pariatur reiciendis amet.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4 text-white">Order now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;