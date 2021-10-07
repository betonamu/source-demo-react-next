import React, { useEffect } from 'react';
import Carousel from 'nuka-carousel';

import { NextBtn, PrevBtn } from '../../../asstes/icons';

import { Desktop, Mobile } from '../../Common/Container/Media';

import { dataMobile, dataSlider } from './data';

import styles from './scss/Slider.module.scss';


import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { mainActions } from '../../../redux/actions';

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

    const dispatch = useDispatch();

    const main = useSelector(state=>state.main.getData);
    console.log('ádasd',main);
    
    useEffect(() => {
        dispatch(mainActions.getData());
    }, []);

    return (
        <div className={styles.bannerMain}>
            <div className={styles.containerSlider}>

                <Desktop>
                    <Carousel defaultControlsConfig={configCarouselBtn} autoplay={true} wrapAround={true}>
                        {
                            main[0]?.images?.map(item=>(
                                item.images?.map(items=>(
                                    <img key={item.id} className={styles.imageSlider} src={items.img} alt="image" />    
                                ))
                            ))
                        }
                    </Carousel>
                </Desktop>

                <Mobile>
                    <Carousel defaultControlsConfig={configCarouselBtn} renderCenterRightControls renderCenterLeftControls autoplay={true} wrapAround={true}>
                        {
                            main[0]?.images_mobile?.map(item=>(
                                item.images?.map(items=>(
                                    <img key={item.id} className={styles.imageSlider} src={items.img} alt="image" />    
                                ))
                            ))
                        }
                    </Carousel>
                </Mobile>

            </div>
        </div>
    );
}

export default Slider;