import React from 'react';
import Carousel from 'nuka-carousel';

import { Desktop, Mobile } from '../../Common/Container/Media'

import { data } from './data'

import styles from './scss/Item.module.scss'
function Item() {

    const slidesToShow = 5
    const slidesToShowMobile = 2
    const slidesToScroll = 2

    const configCarouselBtn = {
        pagingDotsStyle: {
            fill: 'rgba(93, 172, 70, 1)',
        },
    }

    return (
        <div className={styles.wrapperSlider}>
            <Desktop>
                <Carousel
                    slidesToShow={slidesToShow}
                    slidesToScroll={slidesToScroll}
                    renderCenterLeftControls={false}
                    renderCenterRightControls={false}
                    defaultControlsConfig={configCarouselBtn}
                    className={styles.slider}
                >
                    {
                        data.map(item => (
                            <div className={styles.itemSale} key={item.id}>
                                <div className={styles.imgSale}>
                                    <img src={item.image} />
                                    <div className={styles.temSale}>
                                        <img src="./images/image 236.png" />
                                    </div>
                                </div>
                                <div className={styles.nameSale}>
                                    <p>{item.title}</p>
                                </div>
                                <div className={styles.priceSale}>
                                    <del>{item.priceDel}</del>
                                    <p>{item.price}</p>
                                </div>
                                <div className={styles.btnBuy}>
                                    <button type="button">Thêm vào giỏ hàng</button>
                                </div>
                            </div>
                        ))
                    }
                </Carousel>
            </Desktop>
            <Mobile>
                <Carousel
                    slidesToShow={slidesToShowMobile}
                    slidesToScroll={slidesToScroll}
                    renderCenterLeftControls={false}
                    renderCenterRightControls={false}
                    defaultControlsConfig={configCarouselBtn}
                    className={styles.slider}
                >
                    {
                        data.map(item => (
                            <div className={styles.itemSale} key={item.id}>
                                <div className={styles.imgSale}>
                                    <img src={item.image} />
                                    <div className={styles.temSale}>
                                        <img src="./images/image 236.png" />
                                    </div>
                                </div>
                                <div className={styles.nameSale}>
                                    <p>{item.title}</p>
                                </div>
                                <div className={styles.priceSale}>
                                    <del>{item.priceDel}</del>
                                    <p>{item.price}</p>
                                </div>
                                <div className={styles.btnBuy}>
                                    <button type="button">Thêm vào giỏ hàng</button>
                                </div>
                            </div>
                        ))
                    }
                </Carousel>
            </Mobile>
        </div>
    );
}

export default Item;