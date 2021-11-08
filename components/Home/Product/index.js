import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import styles from "./Product.module.scss";
import { IconDownCategory, IconStar } from "../../../asstes/icons";
import Carousel from 'nuka-carousel';
import { homeActions } from "../../../redux/actions";

const Product = () => {
    const dispatch = useDispatch();

    const home = useSelector(state=>state.home.getList);
    console.log('Product',home);
    
    useEffect(() => {
        dispatch(homeActions.getList());
    }, []);
   
    return (
        <div className={styles.text}>
            
            <div className={styles.box}>
                {
                    home?.collections?.edges?.map(item=>(
                        <div>
                            <div className={styles.boxTitle}>
                                <h3>{item.node?.name}</h3>
                                <div className={styles.center}>Xem tất cả <spam><IconDownCategory/></spam></div>
                            </div>
                            <Carousel
                                renderCenterLeftControls={false}
                                renderCenterRightControls={false}
                            >
                                <div className={styles.box5}>
                                    {
                                        item.node?.products?.edges?.map(items=>(
                                            <div className={styles.cardTo} key={items.node?.id}>
                                                <img src={items.node?.category?.icon?.url} class="card-img-top"/>
                                                <IconStar width="40" height="40" stroke="#B2BAC6"/>
                                                <div className={styles.giamGia}>-30%</div>
                                                <div class="card-body" className={styles.cardBody}>
                                                    <div className={styles.boxCard}>
                                                        <p class="card-text">Thương hiệu</p>
                                                        <img src="https://s3-ap-southeast-1.amazonaws.com/pharmacity-ecm-asm-dev/thang-9/brand-list/pmc.webp"/>
                                                    </div>
                                                    <h5 class="card-title">{items.node?.name}</h5>
                                                    <div className={styles.cardSpan}>
                                                        <span>344.000 VNĐ</span>
                                                        <span>
                                                            {Intl.NumberFormat('en-VN', { maximumSignificantDigits: 3 }).format(items.node?.variants[0]?.pricing?.price?.gross?.amount)}
                                                            <samp>{items.node?.variants[0]?.pricing?.price?.gross?.currency}</samp>
                                                            <spam>/{items.node?.variants[0]?.name}</spam>
                                                        </span>
                                                    </div>
                                                    <div className={styles.center}>
                                                        <button type="submit" class="btn btn-success">Thêm vào giỏ hàng</button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </Carousel>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Product;