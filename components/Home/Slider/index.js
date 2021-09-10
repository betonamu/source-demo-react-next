import React from 'react';

import Slider from './Slider';
import Banner from './Banner';
import Container from '../../Common/Container'
import { Desktop } from '../../Common/Container/Media'

import styles from './scss/Slider.module.scss'

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