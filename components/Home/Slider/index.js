import React from 'react';

import Container from '../../Common/Container';
import Banner from './Banner';
import Slider from './Slider';

import styles from './scss/Slider.module.scss';


function index() {
    return (
        <Container>
            <div className={styles.bannerWrapper}>
                <Slider />
                <Banner />
            </div>
        </Container>

    );
}

export default index;