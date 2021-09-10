import React, { useState } from 'react';
import classNames from "classnames";

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
                {
                    dataSlider.map((item, index) => (
                        <div className={classNames(
                            {
                                [styles.activeAnim]: slideIndex === index + 1,
                                [styles.slide]: slideIndex !== index + 1
                            }
                        )}>
                            <img className={classNames(styles.imageSlider)} src={item.image} alt="image" />
                        </div>
                    ))
                }
                <BtnSlider moveSlide={nextSlide} direction={"next"} />
                <BtnSlider moveSlide={prevSlide} direction={"prev"} />
            </div>
        </div>
    );
}

export default Slider;