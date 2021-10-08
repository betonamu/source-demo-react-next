import React, { useState } from "react";

import Home from "../../../asstes/icons/home.svg"
import HomeActive from "../../../asstes/icons/home-active.svg";
import Categories from "../../../asstes/icons/categories.svg";
import CategoriesActive from "../../../asstes/icons/categories-active.svg";
import Order from "../../../asstes/icons/order.svg";
import OrderActive from "../../../asstes/icons/order-active.svg";
import Profile from "../../../asstes/icons/profile.svg";
import ProfileActive from "../../../asstes/icons/profile-active.svg";

import styles from "./NavigationBottom.module.scss";
import { Tabs } from "antd";
import classNames from "classnames";

const tabs = [
    {
        label: 'Trang chủ',
        icon: <Home />,
        activeIcon: <HomeActive />
    },
    {
        label: 'Danh mục',
        icon: <Categories />,
        activeIcon: <CategoriesActive />
    },
    {
        label: 'Đơn hàng',
        icon: <Order />,
        activeIcon: <OrderActive />
    },
    {
        label: 'Cá nhân',
        icon: <Profile />,
        activeIcon: <ProfileActive />
    },
]

const NavigationBottom = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    return (
        <div className={styles.navigationBottom}>
            {tabs.map((item, index) => {
                const isActive = index === activeTabIndex;
                return (
                    <div className={styles.tabItem} onClick={() => setActiveTabIndex(index)}>
                        <div className={styles.tabIconWrapper}>
                            <span className={classNames(styles.tabIcon, {
                                [styles.active]: isActive,
                            })}>
                                {!isActive ? item.icon : item.activeIcon}
                            </span>
                        </div>
                        <p>{item.label}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default NavigationBottom;