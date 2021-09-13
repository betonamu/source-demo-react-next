import React, { useState } from 'react';
import { dataDropdown } from './data';
import Content from './Content';
import Item from './Item';
import styles from './scss/Dropdown.module.scss'


function Dropdown() {
    const [filter, setFilter] = useState('dược-phẩm')
    const [currentIndex, setCurrentIndex] = useState(0);

    const handeChangeValue = (value) => {
        const convert = value.toLowerCase().replace(/ /g, '-')
        setFilter(convert)
    }

    return (
        <>
            <div className={styles.dropdownBox}>
                {
                    dataDropdown.search.edges.map((item, index) => (
                        <Content dataDropdown={dataDropdown} item={item} onClick={() => setCurrentIndex(index)} active={index === currentIndex} handeChangeValue={handeChangeValue} />
                    ))
                }

            </div>
            <div className={styles.dropdownBoxCenter}>
                {
                    dataDropdown.search.edges.map(item => (
                        item.node.slug === filter ?
                            item.node.children.edges.map((item, index) =>
                                <Item item={item} key={index} />
                            ) : null
                    ))
                }
            </div>
            <div className={styles.dropdownBox}>
                <img src="https://s3-ap-southeast-1.amazonaws.com/pharmacity-ecm-asm-dev/thang-9/home-banner/banner-home.webp" />
            </div>
            <div className={styles.overlay}></div>
        </>
    );
}

export default Dropdown;