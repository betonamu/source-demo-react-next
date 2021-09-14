import React from 'react';

import styles from './scss/Dropdown.module.scss'

function Item({ item }) {

    return (
        <div className={styles.itemBox}>
            <img src={item.node.icon.url} />
            <div className={styles.itemName}>
                {item.node.name}
            </div>

        </div>
    );
}

export default Item;