import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import {images} from './menuSlider'

import './menuSwipe.scss'


const MenuSwiper = () => {
    return (
        <div>
            <SimpleImageSlider
                width={600}
                height={566}
                images={images}
                showBullets={true}
                showNavs={true}
                style=
                    {
                        {

                        }
                    }
                autoPlay={true}
                autoPlayDelay={5}
            />
        </div>
    );
};

export default MenuSwiper;