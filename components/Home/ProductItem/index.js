import React from "react";

import {IconStar } from "../../../asstes/icons";

import styles from "./ProductItem.module.scss";

const ProductItem = ({ item }) => {
   
    const icon = "https://www.pharmacity.vn/icons/no-image.svg";

    return (
        <div>
            {
                <div className={styles.boxItem} key={item.id}>
                    <div className={styles.cardTo}>
                        <img src={item.node?.category?.icon?.url || icon} />
                        <IconStar width="40" height="40" stroke="#B2BAC6"/>
                        <div className={styles.giamGia}>-30%</div>
                    </div>
                    <div className={styles.boxName}>
                        <div className={styles.boxCard}>
                            <p class="card-text">Thương hiệu</p>
                            <img src="https://s3-ap-southeast-1.amazonaws.com/pharmacity-ecm-asm-dev/thang-9/brand-list/pmc.webp"/>
                        </div>
                        <p>{item.node?.name.slice(0,30)}...</p>
                    </div>
                    <div className={styles.cardSpan}>
                        <span>344.000 VNĐ</span>
                        <span>
                            {Intl.NumberFormat('en-VN', { maximumSignificantDigits: 3 }).format(item.node?.variants[0]?.pricing?.price?.gross?.amount).replace(",",".")}
                            <samp>{item.node?.variants[0]?.pricing?.price?.gross?.currency}</samp>
                            <spam>/{item.node?.variants[0]?.name}</spam>    
                        </span>
                    </div>
                    <div className={styles.boxBtn}>
                        <button type="submit" class="btn btn-success">Thêm vào giỏ hàng</button>
                    </div>
                </div>
            }
                                
        </div>
    );
}

export default ProductItem;