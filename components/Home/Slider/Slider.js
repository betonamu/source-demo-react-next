import React, { useState } from 'react';
import classNames from "classnames";
import Carousel from 'nuka-carousel';


import BtnSlider from './BtnSlider';
import { dataSlider } from './data';
import styles from './scss/Slider.module.scss';

function Slider() {
    const [slideIndex, setSlideIndex] = useState(1)
    console.log(styles);

    const nextSlide = () => {
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === dataSlider.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length)
        }
    }


    return (
        <div className={styles.bannerMain}>
            <div className={styles.containerSlider}>
                <Carousel>
                    {
                        dataSlider.map((item) => (
                            <img key={item.id} className={classNames(styles.imageSlider)} src={item.image} alt="image" />
                        ))
                    }
                </Carousel>
            </div>
        </div>
    );
}

export default Slider;