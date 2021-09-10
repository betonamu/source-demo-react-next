import React from 'react';
import styles from './scss/Slider.module.scss'
import { dataBanner } from './data';

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