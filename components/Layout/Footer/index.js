import React, { useState } from 'react';
import styles from './scss/Footer.module.scss';
import classNames from 'classnames';

const Footer = () => {

    const [mbanhien, setHidden] = useState(true);
    const handleClick = () => {
        setHidden(!mbanhien);
        console.log(mbanhien);
    };
    
    return (
        <div>
            <div className={styles.divBlue}>
                <div className="container">
                    <div className={classNames({mbanhien: mbanhien})}>
                        <div className={styles.mbCenter}>
                            <div className={styles.mbBa}>
                                <div>
                                    <span className={styles.mbHotl}>Hotline Đặt hàng(Miễm phí)</span>
                                </div>
                                <div>
                                    <span className={styles.mbSdt, styles.mbSdt1}><img src="./icons/Call.png"></img> 1800 6821</span>
                                </div>
                                <div>
                                    <span className={styles.mbSdt}>Xem thêm thông tin</span>
                                </div>
                                <div className={styles.center}>
                                    <button onClick={handleClick}><img src="./icons/Stroke 1.png"></img></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.mbBa}>
                        <div>
                            <span className={styles.mbHotl}>Hotline CSKH</span><br/>
                            <span className={styles.mbSdt}><img src="./icons/Call.png"></img> 1800 2001</span>
                        </div>
                        <div>
                            <span className={styles.mbHotl}>Hotline Đặt hàng</span><br/>
                            <span className={styles.mbSdt}><img src="./icons/Call.png"></img> 1800 6821</span>
                        </div>
                        <div>
                            <span className={styles.mbSdt}>Xem thêm thông tin</span>
                        </div>
                        <div className={styles.center}>
                            <button onClick={handleClick}>
                                <img src="./icons/Stroke 1.png"></img>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classNames({mbanhien: mbanhien})}>
                <footer className={styles.bg}>
                    <div className="container">
                        <div className={styles.footerMain}>
                            <div className="row">
                                <div className="col-md-3 ms-md-auto">
                                    <div className={styles.divShadow}>
                                        <h4>Về Pharmacity</h4>
                                        <p><a href="#">Xem 568 nhà thuốc Pharmacity</a></p>
                                        <p><a href="#">Phương thức thanh toán</a></p>
                                        <p><a href="#">Các câu hỏi thường gặp</a></p>
                                        <p><a href="#">Chính sách giao hàng</a></p>
                                        <p><a href="#">Chính sách đổi trả</a></p>
                                        <p><a href="#">Chương trình Extracare</a></p>
                                        <p><a href="#">Điều khoản và điều kiện</a></p>
                                        <p className={styles.textBlue}><a href="#">Đăng ký làm nhà phân phối</a></p>
                                    </div>
                                </div>
                                <div className="col-md-2 ms-md-auto">
                                    <div className={styles.textXam}>
                                        <h4>Liên kết hữu ích</h4>
                                        <p><a href="#">Các câu hỏi thường gặp</a></p>
                                        <p><a href="#">Tìm cửa hàng gần bạn</a></p>
                                        <p><a href="#">Chính sách giao hàng</a></p>
                                        <p><a href="#">Phương thức thanh toán</a></p>
                                        <p><a href="#">Chính sách đổi trả</a></p>
                                        <p><a href="#">Chương trình Extracare</a></p>
                                        <p><a href="#">Chính sách bảo mật</a></p>
                                        <p><a href="#">Thông báo cổ đông</a></p>
                                    </div>
                                </div>
                                <div className="col-md-3 ms-md-auto">
                                    <div>
                                        <h4>Theo dõi chúng tôi trên</h4>
                                        <div className={styles.iconsMxh}>
                                            <img src="./icons/facebook.png"/>
                                            <span>Facebook</span>
                                        </div>
                                        <div className={styles.iconsMxh}>
                                            <img src="./icons/youtube.png"/>
                                            <span>Youtube</span>
                                        </div>
                                        <div className={styles.iconsMxh}>
                                            <img src="./icons/zalo.png"/>
                                            <span>Zalo</span>
                                        </div>
                                        <img className={styles.iconsMxh} src="./images/image 220.png"/>
                                        <img src="./images/dmca-logo 1.jpg"/>
                                    </div>
                                </div>
                                <div className="col-md-4 ms-md-auto">
                                    <div>
                                        <h4>Tải ứng dụng Pharmacity ngay thôi</h4>
                                        <div class="row">
                                            <div class="col-md-6 ms-md-auto">
                                                <div className={styles.boxQr}>
                                                    <img src="./images/QR code.jpg"/>
                                                    <img src="./icons/logos_apple-app-store.png"/>
                                                    <span>App store</span>
                                                </div>
                                            </div>
                                            <div class="col-md-6 ms-md-auto">
                                                <div className={styles.boxQr}>
                                                    <img src="./images/QR code.jpg"/>
                                                    <img src="./icons/logos_google-play-icon.png"/>
                                                    <span>CH play</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.mbAn}>
                            <div className={styles.mb11}>
                                <div className="row">
                                    <div className="col-6">
                                        <ul>
                                            <li><a href="#">Tìm cửa hàng gần bạn</a></li>
                                            <li><a href="#">Phương thức thanh toán</a></li>
                                            <li><a href="#">Các câu hỏi thường gặp</a></li>
                                            <li><a href="#">Chính sách giao hàng</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-6">
                                        <ul>
                                            <li><a href="#">Phương thức thanh toán</a></li>
                                            <li><a href="#">Chính sách đổi trả</a></li>
                                            <li><a href="#">Chính sách bảo mật</a></li>
                                            <li><a href="#">Thông báo cổ đông</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.textCenter}>
                                <strong><a href="#">Đăng ký làm nhà phân phối</a></strong>
                            </div>
                            <div className={styles.mbMxh}>
                                <div className="row">
                                    <div className="col">
                                        <img src="./icons/zalo.png"/>
                                        <span>Zalo</span>
                                    </div>
                                    <div className="col">
                                        <img src="./icons/facebook.png"/>
                                        <span>Facebook</span>
                                    </div>
                                    <div className="col">
                                        <img src="./icons/youtube.png"/>
                                        <span>Youtube</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.mbBox}>
                                <div className="row">
                                    <div className="col">
                                        <img className={styles.iconsMxh} src="./images/image 220.png"/>
                                    </div>
                                    <div className="col">
                                        <img src="./images/dmca-logo 1.jpg"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div>
                            <p className={styles.textCenter}>
                                Công Ty Cổ Phần Dược Phẩm Pharmacity <br/><br/>
                                Trụ sở: 248A Nơ Trang Long, P.12, Q.Bình Thạnh, TP.Hồ Chí Minh. <br/>
                                Điện thoại: 1800 2001. Email:cskh@pharmacity.vn <br/><br/>
                                GPDKKD: 0311770883 <br/>
                                Do sở KH & ĐT TP.HCM cấp lần đầu ngày 05/05/2012, đăng ký thay đổi lần thứ: 49, ngày 20/01/2018.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Footer;