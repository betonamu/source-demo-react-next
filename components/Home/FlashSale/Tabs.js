import React from 'react';
import classNames from 'classnames';

import styles from './scss/Index.module.scss'


function Tabs({ timer, setTabs, tabs, date, setIdCollection, showProducts }) {

    const hours = date.getHours()

    const autoActive = (item) => {
        const { start, end, id, collectionId } = item
        if (start < hours && hours >= end) {
            return false
        }
        else if (start < hours && hours < end) {
            setTabs(id)
            setIdCollection(collectionId)
            return true
        }

    }

    const handleTime = (item) => {
        showProducts(item)
    }



    return (
        <div className={styles.saleBlockTabs}>
            <div className={styles.saleTabs}>
                {
                    timer.map((item) => (
                        item.map((item, index) => (
                            <button
                                key={index}
                                className={classNames(styles.tabs, {
                                    [styles.activeTabs]: tabs === index
                                })}
                                onClick={() => handleTime(item)}
                            >
                                {item.startTime} - {item.endTime}
                                <span className={styles.span}>{autoActive(item) ? 'Đang diễn ra' : 'Sắp diễn ra'}</span>
                            </button>
                        ))
                    ))
                }
            </div>
        </div>
    );
}

export default Tabs;