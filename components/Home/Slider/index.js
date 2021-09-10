import React from 'react';

import Slider from './Slider';
import Banner from './Banner';
import Container from '../../Common/Container'
import { Desktop } from '../../Common/Container/Media'

import styles from './scss/Slider.module.scss'

function index(props) {
    return (
        <Container>
            <div className={styles.bannerWrapper}>
                <Slider />
                <Desktop><Banner /></Desktop>

            </div>
        </Container>

    );
}

export default index;