import React from 'react';

import { dataBanner } from './data';

import styles from './scss/Slider.module.scss'


function Banner(props) {
    return (
        <div className={styles.subBanner}>
            {
                dataBanner.map((item, index) => (
                    <div className={styles.subItem}>
                        <img src={item.image} />
                    </div>
                ))
            }
        </div>
    );
}

export default Banner;