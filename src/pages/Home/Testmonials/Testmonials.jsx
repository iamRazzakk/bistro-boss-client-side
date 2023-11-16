import SectionTitle from "../../../component/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { SiIpfs } from "react-icons/si";

const Testmonials = () => {
    const [review, setReview] = useState(null)
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <section>
            <SectionTitle
                heading={"Testimonial"} subHeading="What our client Say"
            ></SectionTitle>
            <section className="my-20">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        review?.map(review => <SwiperSlide key={review._id}>
                            <div className="my-16 mx-24 flex flex-col items-center">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p className="text-[120px] text-white py-4"><SiIpfs /></p>

                                <p className="py-8">{review.details}</p>
                                <h1 className="text-2xl">{review.name}</h1>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </section>
        </section>
    );
};

export default Testmonials;