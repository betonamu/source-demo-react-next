import React from 'react';
import Container from '../../Common/Container';
import Banner from './Banner';
import styles from './scss/Slider.module.scss';
import Slider from './Slider';



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