import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Carousel from 'nuka-carousel';
import classNames from 'classnames';

import { homeActions } from "../../../redux/actions"
import { Desktop, Mobile } from '../../Common/Container/Media'

import styles from './scss/Item.module.scss'

function Item({ collectionById }) {
    // console.log(collectionById);

    const dispatch = useDispatch()
    const items = useSelector(state => state.home.flashSaleProduct?.products?.edges)

    const slidesToShow = 5
    const slidesToShowMobile = 2
    const slidesToScroll = 2

    const configCarouselBtn = {
        pagingDotsStyle: {
            fill: 'rgba(93, 172, 70, 1)',
        },
    }

    const NumberFormat = (number) => {
        return new Intl.NumberFormat('vn-VN', { maximumSignificantDigits: 3 }).format(number)
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
                    className={classNames(styles.slider, styles.sliderSlide)}
                >
                    {
                        items?.map(item => (
                            <div className={styles.itemSale} key={item.node.category.id}>
                                <div className={styles.imgSale}>
                                    <img src={item.node?.thumbnail?.url} />
                                    <div className={styles.temSale}>
                                        <img src="./images/image 236.png" />
                                    </div>
                                </div>
                                <div className={styles.nameSale}>
                                    <p>{item.node?.name}</p>
                                </div>
                                <div className={styles.priceSale}>
                                    <p>{NumberFormat(item.node?.pricing?.priceRange?.start?.gross?.amount)} {item.node?.pricing?.priceRange?.start?.gross?.currency}</p>
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
                        items?.map(item => (
                            <div className={styles.itemSale} key={item.node.category.id}>
                                <div className={styles.imgSale}>
                                    <img src={item.node?.thumbnail?.url} />
                                    <div className={styles.temSale}>
                                        <img src="./images/image 236.png" />
                                    </div>
                                </div>
                                <div className={styles.nameSale}>
                                    <p>{item.node?.name}</p>
                                </div>
                                <div className={styles.priceSale}>
                                    <p>{item.node?.pricing?.priceRange?.start?.gross?.amount} {item.node?.pricing?.priceRange?.start?.gross?.currency}</p>
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