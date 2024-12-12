import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../pages/carrusel.css";
import { Pagination, Autoplay } from 'swiper/modules';


const Carrusel = () => {

    const images= [
        "/images/home1.jpg",
        "/images/home2.jpg",
        "/images/home3.jpg",

    ];

    return (
        <div className='carrusel-container'>
            <Swiper
                modules = {[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay = {{ delay: 3000, disableOnInteraction: false}}
                pagination = {{clickable: true}}
             >
                {images.map((image, index)=> (
                <SwiperSlide key={index}>
                    <img
                        src={image}
                        alt={`Slide ${index}`}
                    />
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carrusel;
