import React from 'react';

import { Desktop } from '../../Common/Container/Media'

import { dataBanner } from './data';

import styles from './scss/Slider.module.scss'


function Banner() {
    return (
        <Desktop>
            <div className={styles.subBanner}>
                {
                    dataBanner.map((item, index) => (
                        <div className={styles.subItem} key={index}>
                            <img src={item.image} />
                        </div>
                    ))
                }
            </div>
        </Desktop>
    );
}

export default Banner;