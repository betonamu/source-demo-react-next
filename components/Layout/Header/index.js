import React from "react";

import Container from "../../Common/Container";
import { Desktop, Mobile } from "../../Common/Container/Media/index";
import styles from "./Header.module.scss";

import Logo from "../../../asstes/icons/pmc-logo.svg";
import IconPhone from "../../../asstes/icons/icon-phone.svg";
import IconLocation from "../../../asstes/icons/icon-location.svg";
import IconVietnamese from "../../../asstes/icons/icon-Vietnamese.svg";
import IconDown from "../../../asstes/icons/icon-down.svg";
import IconUser from "../../../asstes/icons/icon-user.svg";
import IconCategory from "../../../asstes/icons/icon-category.svg";
import IconDownCategory from "../../../asstes/icons/icon-down-category.svg";
import IconSearch from "../../../asstes/icons/icon-search.svg";
import IconCart from "../../../asstes/icons/icon-cart.svg";
import IconEnglish from "../../../asstes/icons/icon-English.svg";

const SearchForm = () => {
  return (
    <form>
      <input type="text" placeholder="Anh hôm nay tìm gì"></input>
      <button type="submit">
        <IconSearch />
      </button>
    </form>
  );
};

const Header = () => {
  return (
    <>
      <Desktop>
        <div className={styles.header}>
          <Container>
            <div className={styles.topHeader}>
              <div className={styles.hotline}>
                <div>
                  Hotline CSKH
                  <span>
                    <IconPhone />
                    1800 2001
                  </span>
                </div>
                <div>
                  Hotline đặt hàng
                  <span>
                    <IconPhone />
                    1800 6821
                  </span>
                </div>
              </div>
              <ul className={styles.category}>
                <li>
                  <a href="#">
                    <IconLocation />
                    586 cửa hàng
                  </a>
                </li>
                <li className={styles.language}>
                  <a href="#">
                    <IconVietnamese />
                    Tiếng Việt
                    <IconDown />
                  </a>
                  <ul className={styles.subLanguage}>
                    <li>
                      <a href="#">
                        <IconVietnamese />
                        Tiếng Việt
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <IconEnglish />
                        English
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    Đăng nhập
                    <IconUser />
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.bottomHeader}>
              <div className={styles.logo}>
                <Logo />
              </div>
              <button className={styles.buttonCategory}>
                <IconCategory />
                <span>Danh mục</span>
                <IconDownCategory />
              </button>
              <div className={styles.searchBox}>
                <SearchForm />
                <ul>
                  <li>
                    <small>Khẩu trang Pharmacity</small>
                  </li>
                  <li>
                    <small>Nước rửa tay khô</small>
                  </li>
                  <li>
                    <small>Vitamin E100</small>
                  </li>
                </ul>
              </div>
              <p className={styles.address}>
                Giao tại: <span>Nhập địa chỉ của bạn</span>{" "}
                <a href="#">Thay đổi</a>
              </p>
              <a href="#" className={styles.cartButton}>
                Giỏ hàng
                <IconCart />
              </a>
            </div>
          </Container>
        </div>
      </Desktop>
      <Mobile>
        <div className={styles.header}>
          <Container>
            <div className={styles.topHeaderMobile}>
              <div className={styles.left}>
                <button className={styles.buttonCategory}>
                  <IconCategory />
                </button>
                <div className={styles.location}>
                  <IconLocation />
                  <div>
                    <span>514</span>
                    <br />
                    <span>Cửa hàng</span>
                  </div>
                </div>
              </div>
              <div className={styles.logo}>
                <Logo />
              </div>
              <div className={styles.right}>
                <div className={styles.login}>
                  <IconUser />
                  Đăng nhập
                </div>
                <div className={styles.cart}>
                  <IconCart />
                </div>
              </div>
            </div>
            <div className={styles.bottomHeaderMobile}>
              <SearchForm />
            </div>
          </Container>
        </div>
      </Mobile>
    </>
  );
};

export default Header;
