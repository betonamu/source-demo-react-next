import React, { useEffect, useState } from 'react';
import { Breadcrumb } from 'antd';
import parse from 'html-react-parser';
import { productActions } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/dist/client/router';

import { IconStar, IconCheck, IconQueMark, IconDownCategory,IconCart } from "../../../asstes/icons";
import styles from './scss/Detail.module.scss';

const Detail = () => {

    const dispatch = useDispatch();

    const product = useSelector(state=>state.product.getDetail);
    const router = useRouter();
    const {slug} = router.query
    useEffect(() => {
        dispatch(productActions.getDetail({slug}));
    }, []);
    
    return (
        <div className={styles.text}>
            <div className="container">
                <div className={styles.textMr}>
                    <Breadcrumb separator="+">
                        <Breadcrumb.Item>Trang chủ </Breadcrumb.Item>
                        <Breadcrumb.Item><a href="">Sản phẩm</a></Breadcrumb.Item>
                        <Breadcrumb.Item><a href="">Chăm sóc sắc đẹp</a></Breadcrumb.Item>
                        <Breadcrumb.Item>Nước tẩy trang tươi mát Loreal Mic...</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className={styles.boxTo}>
                    <div>
                        <div>
                            <img src={product.thumbnail?.url}/>
                        </div>
                        <div className={styles.boxNho5}>
                            {
                                product.images?.map(item=>(
                                    <img src={item.url} />
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <h4>{product.name}</h4>
                        <div className={styles.boxNho}>
                            <div>
                                <span className={styles.starFill}><IconStar fill="#FFD211"/>4.8 (456 Đánh giá)</span>
                                <div className={styles.bg}>
                                    <a className={styles.a1}>
                                        {product.pricing?.priceRange?.start?.gross?.amount}
                                        <samp>{product.pricing?.priceRange?.start?.gross?.currency}</samp>
                                    </a>
                                    {/* <a className={styles.a2}>132.300 đ</a> */}
                                    <span>-30%</span>
                                    <p>Mua hàng và tích <samp>161 điểm</samp> ExtraCare <IconQueMark/></p>
                                </div>
                                <div className={styles.li3}>

                                    {parse(product.description)}

                                </div>
                                {/* <div className={styles.tuyChon}>
                                    <p>Tùy chọn sản phẩm</p>
                                    <samp className={styles.tcColor}><IconCheck/> 400ml</samp>
                                    <samp>500ml</samp>
                                    <samp>250ml</samp>
                                </div> */}
                                <div className={styles.xemThuoc}>
                                    <a>Xem các nhà thuốc còn hàng</a><IconDownCategory />
                                    <div>
                                        <input type="button" value="-"/>
                                        <input type="text" value="10"/>
                                        <input type="button" value="+"/>
                                    </div>
                                </div>
                                <div className={styles.muaHang}>
                                    <a className={styles.trang}>Mua ngay</a>
                                    <a className={styles.xanh}><IconCart /> Thêm vào giỏ hàng</a>
                                </div>
                                {
                                    product.variants?.map(item=>(
                                        <p className={styles.ma}>Mã: {item.sku}</p>
                                    ))
                                }
                                
                            </div>
                            <div>
                                <div className={styles.boxTren}>
                                    <div className={styles.boxLogo}>
                                        <div className={styles.logoLo}>
                                            <img src={product.brand?.image}/>
                                        </div>
                                        <span>{product.brand?.code}</span>
                                    </div>
                                    <p>{product.brand?.shortDescription}</p>
                                    <div className={styles.center}><a>Xem thêm</a></div>
                                </div>
                                <div className={styles.boxDuoi}>
                                    <h3>Hình thức giao hàng</h3>
                                    <p><IconStar fill="#5DAC46"/><samp>Freeship</samp> cho đơn hàng từ <samp>300k</samp></p>
                                    <span>DHL</span>
                                    <span>Ahamove</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;