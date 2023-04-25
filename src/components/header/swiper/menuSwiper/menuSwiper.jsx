import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import {images} from './menuSlider'




const MenuSwiper = () => {
    return (
        <div>
            <SimpleImageSlider
                width={600}
                height={566}
                images={images}
                showBullets={true}
                showNavs={true}
            />
        </div>
    );
};

export default MenuSwiper;