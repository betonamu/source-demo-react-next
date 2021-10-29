import React, { useRef, useMemo, useState, useEffect } from 'react';
import parse from 'html-react-parser';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/dist/client/router';
import Carousel from 'nuka-carousel';
import classNames from 'classnames';

import { productActions } from '../../../redux/actions';

import { IconStar, IconCheck, IconQueMark, IconDownCategory,IconCart } from "../../../asstes/icons";

import styles from './scss/Detail.module.scss';

const Detail = ({ compactHeight = 130 }) => {

    const [isSeeMore, setIsSeeMore] = useState(false);
    const [isShortContent, setIsShortContent] = useState(true);
    const ref = useRef();

    const xemthemContent = () => {
        setIsSeeMore(prev => !prev);
    }

    const fullContentHeight = ref.current?.offsetHeight || 'fit-content';

    const currentHeightShow = useMemo(() => {
        return isSeeMore ? fullContentHeight : compactHeight;
    }, [isSeeMore]);

    useEffect(() => {
        setIsShortContent(ref.current?.offsetHeight > compactHeight)
    }, [])


    const [productIndex, setProductIndex] = useState(0);
    const dispatch = useDispatch();

    const product = useSelector(state=>state.product.getDetail);
    const router = useRouter();
    const {slug} = router.query
    useEffect(() => {
        dispatch(productActions.getDetail({slug}));
    }, []);

    const configCarouselBtn = {
        nextButtonStyle: {display: "none",},
        prevButtonStyle: {display: "none",}
    }

    const products = product?.images?.map((item, index) => (
        <img src={item.url}/>
      ));

    const list = [
        {
            'id':1,
            'name': "Mô tả",
        },
        {
            'id':2,
            'name': "Thông tin sản phẩm"
        },
        {
            'id':3,
            'name': "Thương hiệu"
        }
    ];

    const [value, setValue]=useState('Mô tả');

    const [count, setCount] = useState(1);

    const Tang = () =>{
        setCount(x => x + 1);
    }
    const Giam = () =>{
        if( count <= 1 ){
            x = 1;
        }else{
            setCount(x => x - 1);
        }
    }
    
    return (
        <div className={styles.text}>
            <div>
                <div className="container">
                    <div className={styles.bg}>
                        <div className={styles.textMr}>
                            {
                                <ul>
                                    <li><a>Trang chủ</a><span></span></li>
                                    <li><a>{product?.category?.parent?.parent?.name}</a><span></span></li>
                                    <li><a>{product?.category?.parent?.name}</a><span></span></li>
                                    <li><a>{product?.category?.name}</a></li>
                                </ul>
                            }
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
                            <div className={styles.boxName}>
                                <h4>{product?.name}</h4>
                                <IconStar width="30" height="30" stroke="#5E6F88"/>
                            </div>
                            <div className={styles.boxNho}>
                                <div>
                                    <span className={styles.starFill}><IconStar fill="#FFD211"/>4.8 (456 Đánh giá)</span>
                                    <div className={styles.bg}>
                                        <a className={styles.a1}>
                                            {Intl.NumberFormat('en-VN', { maximumSignificantDigits: 3 }).format(product?.pricing?.priceRange?.start?.gross?.amount)}
                                            <samp>{product?.pricing?.priceRange?.start?.gross?.currency}</samp>
                                        </a>
                                        <span>-30%</span>
                                        <p>Mua hàng và tích <samp>161 điểm</samp> ExtraCare <IconQueMark/></p>
                                    </div>
                                    <div className={styles.li3}>
                                        {parse(String(product?.description))}
                                    </div>
                                    <div className={styles.xemThuoc}>
                                        <a>Xem các nhà thuốc còn hàng</a><IconDownCategory />
                                        <div>
                                            <input type="button" value="-" onClick={() => Giam()}/>
                                            <input type="text" value={count}/>
                                            <input type="button" value="+" onClick={() => Tang()}/>
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
                                            <span>{product?.brand?.name}</span>
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
                                {list.map((item, index) => (
                                    <a item={item} onClick={() =>setValue(item.name)} className={classNames(styles.boxa, {[styles.active]: value === item.name})}>{item.name}</a>
                                ))}
                            </div>
                            <div className={classNames(styles.boxa, {[styles.hide]: value != list[0].name})}>
                            {
                                product?.metadata?.map(item=>(
                                    <div className={classNames({
                                        [styles.compactContent]: true,
                                        [styles.hasXemthem]: isSeeMore,
                                    })}>
                                    <div className={styles.body} style={{ height: currentHeightShow }}>
                                        <div ref={ref}>
                                            {parse(String(item.value))}
                                        </div>
                                    </div>
                                        {
                                            isShortContent &&
                                            <div className={styles.xemthemButton}>
                                                <button onClick={() => xemthemContent()}>
                                                    {!isSeeMore ? "Xem thêm" : "Thu gọn"}
                                                </button><spam><IconDownCategory/></spam>
                                            </div>
                                        }
                                    </div>
                                ))
                            }
                            </div>
                            <div className={classNames(styles.boxa, {[styles.hide]: value != list[1].name})}>
                                <div className={styles.thongTin}>
                                    <strong>Brand</strong>
                                    <spam>{product?.brand?.name}</spam>
                                </div>
                            </div>
                            <div className={classNames(styles.boxa, {[styles.hide]: value != list[2].name})}>
                                <div>
                                    {product?.brand?.description}
                                </div>
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
                            {
                                product?.category?.products?.edges?.map(item=>(
                                    <div className={styles.cardTo}>
                                        <img src={item.node?.thumbnail?.url} class="card-img-top"/>
                                        <IconStar width="40" height="40" stroke="#B2BAC6"/>
                                        <div className={styles.giamGia}>-30%</div>
                                        <div class="card-body" className={styles.cardBody}>
                                            <div className={styles.boxCard}>
                                                <p class="card-text">Thương hiệu</p>
                                                <img src="https://s3-ap-southeast-1.amazonaws.com/pharmacity-ecm-asm-dev/thang-9/brand-list/pmc.webp"/>
                                            </div>
                                            <div className={styles.cardSpan}>
                                                <span>344.000 VNĐ</span>
                                                <span>
                                                    {Intl.NumberFormat('en-VN', { maximumSignificantDigits: 3 }).format(item.node?.pricing?.priceRange?.start?.gross?.amount)}
                                                    <samp>{item.node?.pricing?.priceRange?.start.gross?.currency}</samp>
                                                    <spam>/{item.node?.variants[0]?.name}</spam>
                                                </span>
                                            </div>
                                            <h5 class="card-title">{item.node?.name}</h5>
                                            <div className={styles.center}>
                                                <button type="submit" class="btn btn-success">Thêm vào giỏ hàng</button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;