import React from "react";
import './style.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from '../../../assets/images/slider-1.png';
import Slider2 from '../../../assets/images/slider-2.png';
import Button from '@mui/material/Button';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const HomeSlider = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: true,
    };
    return (
        <>
            <section className='homeSlider'>
                <div className='container-fluid position-relative'>
                    <Slider {...settings} className='homeSliderMain'>
                        <div className='item'>
                            <img src={Slider1} className='w-100' alt='Slider 1'/>
                            <div className='info'>
                                <h2 className='mb-4'>Don’t miss amazing<br/>
                                    grocery deals</h2>
                                <p>Save up to 50% off on your first order</p>
                            </div>
                        </div>
                        <div className='item'>
                            <img src={Slider2} className='w-100' alt='Slider 1'/>
                            <div className='info'>
                                <h2 className='mb-4'> Fresh Vegetables<br/>
                                    Big discount</h2>
                                <p>Save up to 50% off on your first order</p>
                            </div>
                        </div>
                    </Slider>
                    <div className='newsLetter'>
                        <SendOutlinedIcon></SendOutlinedIcon>
                        <input type='text' placeholder='Enter your email'/>
                        <Button className='greenBg'>Subscribe</Button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeSlider;