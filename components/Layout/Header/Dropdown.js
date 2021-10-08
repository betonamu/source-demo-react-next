import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from "react-redux";

import { categoryActions } from '../../../redux/actions';
import Category from './Category';
import Item from './Item';

import styles from './scss/Dropdown.module.scss';


function Dropdown() {
    const [filter, setFilter] = useState('dược-phẩm')
    const [currentIndex, setCurrentIndex] = useState(0);

    const handeChangeValue = (value) => {
        const convert = value.toLowerCase().replace(/ /g, '-')
        setFilter(convert)
    }

    const dispatch = useDispatch();

    const category = useSelector(state=>state.category.getList);
    console.log('Category',category);

    useEffect(() => {
        dispatch(categoryActions.getList());
    }, []);

    return (
        <>
            <div className={styles.dropdownBox}>
                {
                    category?.length > 0 && category.map((item, index) => (
                        <Category dataDropdown={category} item={item} onClick={() => setCurrentIndex(index)} active={index === currentIndex} handeChangeValue={handeChangeValue} />
                    ))
                }
            </div>
            <div className={styles.dropdownBoxCenter}>
                {
                    category?.length > 0 && category.map(item => (
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