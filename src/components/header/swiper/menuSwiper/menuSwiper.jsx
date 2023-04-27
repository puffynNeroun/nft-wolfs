import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import {images} from './menuSlider'

import './menuSwipe.scss'


const MenuSwiper = () => {
    return (
        <>
            <div className='swiper'>
                <SimpleImageSlider
                    width={600}
                    height={566}
                    images={images}
                    showBullets={true}
                    showNavs={true}
                    style=
                        {
                            {}
                        }
                    autoPlay={true}
                    autoPlayDelay={5}
                />
            </div>
            <div className='static-image'>
                <img className='static-image__img' src="https://i.imgur.com/ENwYG9j.png" alt=""/>
            </div>
        </>
    );
};

export default MenuSwiper;