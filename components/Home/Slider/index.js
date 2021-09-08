import React from 'react';
import Slider from './Slider';
import Banner from './Banner';
import Container from '../../Common/Container'

import styles from './scss/Slider.module.scss'

function index(props) {
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