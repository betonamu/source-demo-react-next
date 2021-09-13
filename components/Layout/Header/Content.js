import classNames from 'classnames';
import React from 'react';
import { NextBtn } from '../../../asstes/icons';
import styles from './scss/Dropdown.module.scss';

function Content({ item, onClick, active, handeChangeValue }) {

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

export default Content;