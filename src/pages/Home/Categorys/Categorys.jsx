import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../component/SectionTitle';
const Categorys = () => {
    return (
        <section>
            <SectionTitle
                subHeading={'From 10:00am to 11.00pm'}
                heading={'Order online'}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={slider1} alt="" />
                    <p className='text-center text-4xl -mt-16 uppercase text-white'>Salads</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <p className='text-center text-4xl -mt-16 uppercase text-white'>Pizza</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" />
                    <p className='text-center text-4xl -mt-16 uppercase text-white'>Soups</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="" />
                    <p className='text-center text-4xl -mt-16 uppercase text-white'>desserts</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider5} alt="" />
                    <p className='text-center text-4xl -mt-16 uppercase text-white'>Salads</p>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Categorys;