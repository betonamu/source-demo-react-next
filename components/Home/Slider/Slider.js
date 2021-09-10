import Carousel from 'nuka-carousel';
import React from 'react';
import NextBtn from '../../../asstes/icons/next.svg';
import PrevBtn from '../../../asstes/icons/prev.svg';
import { Desktop, Mobile } from '../../Common/Container/Media';
import { dataMobile, dataSlider } from './data';
import styles from './scss/Slider.module.scss';








function Slider() {


    const configCarouselBtn = {
        nextButtonClassName: "btn-carousel next",
        prevButtonClassName: "btn-carousel prev",
        nextButtonText: <NextBtn />,
        prevButtonText: <PrevBtn />,
        pagingDotsStyle: {
            fill: 'rgba(93, 172, 70, 1)'
        },
        nextButtonStyle: {
            position: "relative",
            right: "20px",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "#ecf0f1",
            border: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer"
        },
        prevButtonStyle: {
            position: "relative",
            left: "20px",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "#ecf0f1",
            border: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer"
        }
    }

    return (
        <div className={styles.bannerMain}>
            <div className={styles.containerSlider}>
                <Desktop>
                    <Carousel defaultControlsConfig={configCarouselBtn} autoplay={true} wrapAround={true}>
                        {
                            dataSlider.map((item) => (
                                <img key={item.id} className={styles.imageSlider} src={item.image} alt="image" />
                            ))
                        }
                    </Carousel>
                </Desktop>

                <Mobile>
                    <Carousel defaultControlsConfig={configCarouselBtn} renderCenterRightControls renderCenterLeftControls autoplay={true} wrapAround={true}>
                        {
                            dataMobile.map((item) => (
                                <img key={item.id} className={styles.imageSlider} src={item.image} alt="image" />
                            ))
                        }
                    </Carousel>
                </Mobile>
            </div>
        </div>
    );
}

export default Slider;