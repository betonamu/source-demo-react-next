import React from 'react';
import styles from './scss/Footer.module.scss';

const Footer = () => {
    return (
        <div>
            <div className={styles.divBlue}></div>
            <footer className={styles.bg}>
                <div className={styles.footerMain}>
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
                    <div>
                        <h4>Theo dõi chúng tôi trên</h4>
                        <div className={styles.iconsMxh}>
                            <img src="./icons/facebook.png"></img>
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
                    <div>
                        <h4>Tải ứng dụng Pharmacity ngay thôi</h4>
                        <div className={styles.boxQr}>
                            <div className={styles.boxQrba}>
                                <img src="./images/QR code.jpg"/>
                                <img src="./icons/logos_apple-app-store.png"/>
                                <span>App store</span>
                            </div>
                            <div className={styles.boxQrba}>
                                <img src="./images/QR code.jpg"/>
                                <img src="./icons/logos_google-play-icon.png"/>
                                <span>CH play</span>
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
            </footer>
        </div>
    );
}

export default Footer;