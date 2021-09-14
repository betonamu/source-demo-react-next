import React from 'react';
import classNames from 'classnames';

import { NextBtn } from '../../../asstes/icons';

import styles from './scss/Dropdown.module.scss';

function Category({ item, onClick, active, handeChangeValue }) {

    const handleActive = (name) => {
        onClick()
        handeChangeValue(name)
    }


    return (
        <>
            <div onClick={() => handleActive(item.node.name)}
                className={classNames(styles.dropdownItem, { [styles.active]: active })}>

                {item.node.name}
                <NextBtn />

            </div>
        </>
    );
}

export default Category;