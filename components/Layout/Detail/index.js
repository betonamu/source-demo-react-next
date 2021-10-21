import React, { useEffect } from 'react';
import { Breadcrumb } from 'antd';
import styles from './scss/Detail.module.scss';

import { IconStar, IconCheck, IconQueMark, IconDownCategory,IconCart } from "../../../asstes/icons";
import { productActions } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';


const Detail = () => {

    const dispatch = useDispatch();

    const product = useSelector(state=>state.product);
    console.log('ádasd',product);

    useEffect(() => {
        dispatch(productActions.getDetail());
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
                            <img src="./images/BG.png"/>
                        </div>
                        <div className={styles.boxNho5}>
                            <img className={styles.bd} src="./images/BG (1).png"/>
                            <img src="./images/BG (2).png"/>
                            <img src="./images/BG (3).png"/>
                            <img src="./images/BG (4).png"/>
                            <img src="./images/BG (5).png"/>
                        </div>
                    </div>
                    <div>
                        <h4>Nước tẩy trang tươi mát Loreal Micellar Water Refreshing (400ml)</h4>
                        {/* <IconStar stroke="#5E6F88"/> */}
                        <div className={styles.boxNho}>
                            <div>
                                <span className={styles.starFill}><IconStar fill="#FFD211"/>4.8 (456 Đánh giá)</span>
                                <div className={styles.bg}>
                                    <a className={styles.a1}>132.300 đ</a>
                                    <a className={styles.a2}>132.300 đ</a>
                                    <span>-30%</span>
                                    <p>Mua hàng và tích <samp>161 điểm</samp> ExtraCare <IconQueMark/></p>
                                </div>
                                <div className={styles.li3}>
                                    <ul>
                                        <li>Loại nước tẩy trang đa chức năng khi mang đến công dụng tẩy trang</li>
                                        <li>Loại nước tẩy trang đa chức năng khi mang đến công dụng tẩy trang trang đa chức năng khi mang đến công dụng</li>
                                        <li>Loại nước tẩy trang đa chức năng khi mang đến công dụng tẩy trang</li>
                                    </ul>
                                </div>
                                <div className={styles.tuyChon}>
                                    <p>Tùy chọn sản phẩm</p>
                                    <samp className={styles.tcColor}><IconCheck/> 400ml</samp>
                                    <samp>500ml</samp>
                                    <samp>250ml</samp>
                                </div>
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
                                <p className={styles.ma}>Mã: P18393</p>
                            </div>
                            <div>
                                <div className={styles.boxTren}>
                                    <div className={styles.boxLogo}>
                                        <div className={styles.logoLo}>
                                            <img src="./images/Panadol Beacon logo 164x153px 1.png"/>
                                        </div>
                                        <span>Loreal</span>
                                    </div>
                                    <p>Giảm mạnh cơn đau. Tác dụng nhanh. Không gây buồn ngủ. Điều trị đau nhẹ đến vừa và hạ sốt. Tìm hiểu ngay! Không Hại, không dị ứng...</p>
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