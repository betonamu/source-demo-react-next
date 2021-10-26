import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/dist/client/router';
import Carousel from 'nuka-carousel';
import classNames from 'classnames';

import { productActions } from '../../../redux/actions';

import { IconStar, IconCheck, IconQueMark, IconDownCategory,IconCart } from "../../../asstes/icons";

import styles from './scss/Detail.module.scss';

const Detail = () => {

    const [productIndex, setProductIndex] = useState(0);
    const dispatch = useDispatch();

    const product = useSelector(state=>state.product.getDetail);
    const router = useRouter();
    const {slug} = router.query
    useEffect(() => {
        dispatch(productActions.getDetail({slug}));
    }, []);

    const configCarouselBtn = {
        
        nextButtonStyle: {
            display: "none",
        },
        prevButtonStyle: {
            display: "none",
        }
    }

    const products = product?.images?.map((item, index) => (
        <img src={item.url}/>
      ));
    
    

    const [id, setId]=useState(1);
    const [value, setValue]=useState(1);
    const changeId = (id) =>{
        setId(id);
    }

    return (
        <div className={styles.text}>
            <div>
                <div className="container">
                    <div className={styles.bg}>
                        <div className={styles.textMr}>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item active">Trang chủ</li>
                                    <li class="breadcrumb-item active" aria-current="page">Sản phẩm</li>
                                    <li class="breadcrumb-item active" aria-current="page">Sản phẩm tiện lợi</li>
                                    <li class="breadcrumb-item" aria-current="page">Áo mưa Pharmacity</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bgWhite}>
                <div className="container">
                    <div className={styles.boxTo}>
                        <div>
                            <div>
                                <Carousel defaultControlsConfig={configCarouselBtn} slideIndex={productIndex}>
                                    {products}
                                </Carousel>
                            </div>
                            <div className={styles.boxNho5}>
                                {product?.images?.map((item, idx) => (
                                    <div 
                                        className={classNames(styles.img, {
                                            [styles.imgChose]: productIndex === idx
                                        })}
                                        onClick={() => setProductIndex(idx)}
                                    >
                                        <img src={item?.url} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h4>{product?.name}</h4>
                            <div className={styles.boxNho}>
                                <div>
                                    <span className={styles.starFill}><IconStar fill="#FFD211"/>4.8 (456 Đánh giá)</span>
                                    <div className={styles.bg}>
                                        <a className={styles.a1}>
                                            {Intl.NumberFormat('en-VN', { maximumSignificantDigits: 3 }).format(product?.pricing?.priceRange?.start?.gross?.amount)}
                                            <samp>{product?.pricing?.priceRange?.start?.gross?.currency}</samp>
                                        </a>
                                        {/* <a className={styles.a2}>132.300 đ</a> */}
                                        <span>-30%</span>
                                        <p>Mua hàng và tích <samp>161 điểm</samp> ExtraCare <IconQueMark/></p>
                                    </div>
                                    <div className={styles.li3}>
                                        {parse(String(product?.description))}
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
                                        <div className={styles.trang}>Mua ngay</div>
                                        <div className={styles.xanh}><IconCart /> Thêm vào giỏ hàng</div>
                                    </div>
                                    {
                                        product?.variants?.map(item=>(
                                            <p className={styles.ma}>Mã: {item.sku}</p>
                                        ))
                                    }
                                </div>
                                <div>
                                    <div className={styles.boxTren}>
                                        <div className={styles.boxLogo}>
                                            <div className={styles.logoLo}>
                                                <img src={product?.brand?.image}/>
                                            </div>
                                            <span>{product?.brand?.code}</span>
                                        </div>
                                        <p>{product?.brand?.shortDescription}</p>
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
            <div className="container">
                <div className={styles.boxGiua}>
                    <div>
                        <div className={styles.boxLeft}>
                            <div className={styles.boxa}>
                                <a value="1" onClick={()=>setValue(1)} className={classNames(styles.boxa, {[styles.active]: value === 1})}  handeChangeValue={changeId}>Mô tả</a>
                                <a value="2" onClick={()=>setValue(2)} className={classNames(styles.boxa, {[styles.active]: value === 2})}  handeChangeValue={changeId}>Thông tin sản phẩm</a>
                                <a value="3" onClick={()=>setValue(3)} className={classNames(styles.boxa, {[styles.active]: value === 3})}  handeChangeValue={changeId}>Thương hiệu</a>
                            </div>
                            <div>
                                {/* {id} */}
                                <p>
                                    <span>Loại da phù hợp:</span>Dành cho da hỗn hợp hoặc da dầu, phù hợp cho cả da nhạy cảm.<br/><br/>
                                    <span>Thành phần:</span> Nước và dầu với cấu trúc Micelles trong nước giúp dễ dàng bám vào bông tẩy trang.<br/><br/>
                                    <span>Công dụng:</span> Tẩy trang, làm sạch da, giúp lấy đi mọi cặn trang điểm, bụi bẩn mà không làm khô da hay gây kích ứng, mang đến cho bạn cảm giác thoải mái dễ chịu.
                                    Giúp da mềm mịn và tươi mát với Glycerin.
                                </p>
                            </div>
                            <div>
                                <img src="./images/image 246.png" />
                            </div>
                            <div>
                                <p><span>Hướng dẫn sử dụng:</span>
                                    Thấm một lượng vừa đủ ra bông tẩy trang lau nhẹ nhàng trên da mặt, vùng da quanh mắt & môi theo hướng xoay tròn.
                                    Không cần rửa lại với nước, tránh tiếp xúc trực tiếp với mắt
                                </p>
                                <div className={styles.center}>Xem thêm <spam><IconDownCategory/></spam></div>
                            </div>
                        </div>
                        <div className={styles.boxLeft1}>
                            <h3>Đánh giá (234) <span> <IconStar fill="#FFD211"/> 4.8 (456 Đánh giá)</span></h3>
                            <div class="mb-3">
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Mời bạn nhập câu hỏi, bình luận, đánh giá về sản phẩm “Khẩu trang y tế Pharmacity màu xanh dương (Gói 10 cái)”..."></textarea>
                                <button type="submit" class="btn btn-primary">Gửi</button>
                            </div>
                            <div className={styles.mrTop}>Tất cả <spam><IconDownCategory stroke="#0065FF"/></spam></div>
                            <div>
                                <div className={styles.boxComment}>
                                    <div className={styles.boxComment1}>
                                        <img src="./images/Rectangle 305.png"/>
                                        <div>
                                            <h4>Mr. Tony Le</h4>
                                            <span><IconStar fill="#FFD211"/><IconStar fill="#FFD211"/><IconStar fill="#FFD211"/><IconStar fill="#FFD211"/><IconStar fill="#FFD211"/> 5.0</span>
                                        </div>
                                        <div className={styles.boxComment2}>
                                            <div>Đã mua tại Pharmacity</div>
                                            <span>1 giờ trước</span>
                                        </div>
                                    </div>
                                    <p>Cho mình hỏi sản phẩm này có mấy lớp vậy Pharmacity ơi.</p>
                                </div>
                                <div className={styles.boxAnswer}>
                                    <div className={styles.boxAnswer1}>
                                        <img src="./images/Rectangle 304.png"/>
                                        <div>
                                            <h4>Nguyễn Lê</h4>
                                            <spam>Dược sĩ tại Pharmacity</spam>
                                        </div>
                                        <div className={styles.boxAnswer2}>
                                            <span>1 giờ trước</span>
                                        </div>
                                    </div>
                                    <p>Cho mình hỏi sản phẩm này có mấy lớp vậy Pharmacity ơi.</p>
                                </div>
                            </div>
                            <div className={styles.boxComment}>
                                <div className={styles.boxComment1}>
                                    <img src="./images/Rectangle 305.png"/>
                                    <div>
                                        <h4>Ms. Gal Gadot</h4>
                                        <span><IconStar fill="#FFD211"/><IconStar fill="#FFD211"/><IconStar fill="#FFD211"/><IconStar fill="#FFD211"/><IconStar fill="#FFD211"/> 5.0</span>
                                    </div>
                                    <div className={styles.boxComment2}>
                                        <span>Hôm qua</span>
                                    </div>
                                </div>
                                <p>Mình đã mua và sử dụng sản phẩm khẩu trang này tại Pharmacity. Sử dụng rất thoải mái và đảm bảo sức khỏe</p>
                            </div>
                            <div className={styles.boxComment}>
                                <div className={styles.boxComment1}>
                                    <img src="./images/Rectangle 305.png"/>
                                    <div>
                                        <h4>Ms. Gal Gadot</h4>
                                        <span><IconStar fill="#FFD211"/><IconStar fill="#FFD211"/><IconStar fill="#FFD211"/><IconStar fill="#FFD211"/><IconStar fill="#FFD211"/> 5.0</span>
                                    </div>
                                    <div className={styles.boxComment2}>
                                        <span>Hôm qua</span>
                                    </div>
                                </div>
                                <p>Mình đã mua và sử dụng sản phẩm khẩu trang này tại Pharmacity. Sử dụng rất thoải mái và đảm bảo sức khỏe</p>
                            </div>
                            <div className={styles.boxComment}>
                                <div className={styles.boxComment1}>
                                    <img src="./images/Rectangle 305.png"/>
                                    <div>
                                        <h4>Ms. Gal Gadot</h4>
                                        <span><IconStar fill="#FFD211"/><IconStar fill="#FFD211"/><IconStar fill="#FFD211"/><IconStar fill="#FFD211"/><IconStar fill="#FFD211"/> 5.0</span>
                                    </div>
                                    <div className={styles.boxComment2}>
                                        <span>Hôm qua</span>
                                    </div>
                                </div>
                                <p>Mình đã mua và sử dụng sản phẩm khẩu trang này tại Pharmacity. Sử dụng rất thoải mái và đảm bảo sức khỏe</p>
                            </div>
                            <div className={styles.boxComment}>
                                <div className={styles.boxComment1}>
                                    <img src="./images/Rectangle 305.png"/>
                                    <div>
                                        <h4>Ms. Gal Gadot</h4>
                                        <span><IconStar fill="#FFD211"/><IconStar fill="#FFD211"/><IconStar fill="#FFD211"/><IconStar fill="#FFD211"/><IconStar fill="#FFD211"/> 5.0</span>
                                    </div>
                                    <div className={styles.boxComment2}>
                                        <span>Hôm qua</span>
                                    </div>
                                </div>
                                <p>Mình đã mua và sử dụng sản phẩm khẩu trang này tại Pharmacity. Sử dụng rất thoải mái và đảm bảo sức khỏe</p>
                            </div>
                            <div className={styles.center}>Xem thêm 10 bình luận <spam><IconDownCategory/></spam></div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.boxRight}>
                            <h3>Sản phẩm tương tự</h3>
                            <div className={styles.cardTo}>
                                <img src="./images/Rectangle 306.png" class="card-img-top"/>
                                <IconStar width="50" height="50" stroke="#B2BAC6"/>
                                <div className={styles.giamGia}>-30%</div>
                                <div class="card-body" className={styles.cardBody}>
                                    <div className={styles.boxCard}>
                                        <p class="card-text">Thương hiệu</p>
                                        <img src="https://s3-ap-southeast-1.amazonaws.com/pharmacity-ecm-asm-dev/thang-9/brand-list/pmc.webp"/>
                                    </div>
                                    <div className={styles.cardSpan}>
                                        <span>344.000 VNĐ</span>
                                        <span>320.000 VND<spam>/Hộp</spam></span>
                                    </div>
                                    <h5 class="card-title">Thực phẩm bảo vệ sức khỏe viên uống bổ sung...</h5>
                                    <button type="submit" class="btn btn-success">Thêm vào giỏ hàng</button>
                                </div>
                            </div>
                            <div className={styles.cardTo}>
                                <img src="./images/Rectangle 306a.png" class="card-img-top"/>
                                <IconStar width="50" height="50" stroke="#B2BAC6"/>
                                <div className={styles.giamGia}>-30%</div>
                                <div class="card-body" className={styles.cardBody}>
                                    <div className={styles.boxCard}>
                                        <p class="card-text">Thương hiệu</p>
                                        <img src="https://s3-ap-southeast-1.amazonaws.com/pharmacity-ecm-asm-dev/thang-9/brand-list/pmc.webp"/>
                                    </div>
                                    <div className={styles.cardSpan}>
                                        <span>344.000 VNĐ</span>
                                        <span>320.000 VND<spam>/Hộp</spam></span>
                                    </div>
                                    <h5 class="card-title">Thực phẩm bảo vệ sức khỏe viên uống bổ sung...</h5>
                                    <button type="submit" class="btn btn-success">Thêm vào giỏ hàng</button>
                                </div>
                            </div>
                            <div className={styles.cardTo}>
                                <img src="./images/Rectangle 306b.png" class="card-img-top"/>
                                <IconStar width="50" height="50" stroke="#B2BAC6"/>
                                <div className={styles.giamGia}>-30%</div>
                                <div class="card-body" className={styles.cardBody}>
                                    <div className={styles.boxCard}>
                                        <p class="card-text">Thương hiệu</p>
                                        <img src="https://s3-ap-southeast-1.amazonaws.com/pharmacity-ecm-asm-dev/thang-9/brand-list/pmc.webp"/>
                                    </div>
                                    <div className={styles.cardSpan}>
                                        <span>344.000 VNĐ</span>
                                        <span>320.000 VND<spam>/Hộp</spam></span>
                                    </div>
                                    <h5 class="card-title">Thực phẩm bảo vệ sức khỏe viên uống bổ sung...</h5>
                                    <button type="submit" class="btn btn-success">Thêm vào giỏ hàng</button>
                                </div>
                            </div>
                            <div className={styles.cardTo}>
                                <img src="./images/Rectangle 306c.png" class="card-img-top"/>
                                <IconStar width="50" height="50" stroke="#B2BAC6"/>
                                <div className={styles.giamGia}>-30%</div>
                                <div class="card-body" className={styles.cardBody}>
                                    <div className={styles.boxCard}>
                                        <p class="card-text">Thương hiệu</p>
                                        <img src="https://s3-ap-southeast-1.amazonaws.com/pharmacity-ecm-asm-dev/thang-9/brand-list/pmc.webp"/>
                                    </div>
                                    <div className={styles.cardSpan}>
                                        <span>344.000 VNĐ</span>
                                        <span>320.000 VND<spam>/Hộp</spam></span>
                                    </div>
                                    <h5 class="card-title">Thực phẩm bảo vệ sức khỏe viên uống bổ sung...</h5>
                                    <button type="submit" class="btn btn-success">Thêm vào giỏ hàng</button>
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