import React from "react";
import Carousel from 'nuka-carousel';

import ProductItem from "../ProductItem";

import { IconDownCategory, IconStar } from "../../../asstes/icons";

import styles from "./Product.module.scss";
const Product = ({ product }) => {
    
    const slidesToShow = 5
    const slidesToScroll = 2
   
    const icon = "https://www.pharmacity.vn/icons/no-image.svg";

    return (
        <div className={styles.text}>
            <div className={styles.box}>
                {
                    product?.collections?.edges?.map(item=>(
                        <div>
                            <div className={styles.boxTitle}>
                                <h3>{item.node?.name}</h3>
                                <div className={styles.center}>Xem tất cả <spam><IconDownCategory stroke="#5DAC46"/></spam></div>
                            </div>
                            <div className={styles.box5}>
                                <Carousel
                                    slidesToShow={slidesToShow}
                                    slidesToScroll={slidesToScroll}
                                    renderCenterLeftControls={false}
                                    renderCenterRightControls={false}
                                >
                                        {
                                            item.node?.products?.edges?.map(item=>(
                                                <ProductItem item={item}/>
                                            ))
                                        }
                                </Carousel>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Product;