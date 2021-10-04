import React from 'react';
import classNames from 'classnames';



function Tabs({ styles, tabs, date, timer, showProducts, showTimer }) {

    const hours = date.getHours()

    const timeSale = (item, now) => {
        return item.start <= now && now < item.end
    }

    const handleTime = (item) => {
        showProducts(item)
        showTimer(item)
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
                                <span className={styles.span}>{timeSale(item, hours) ? 'Đang diễn ra' : 'Sắp diễn ra'}</span>
                            </button>
                        ))
                    ))
                }
            </div>
        </div>
    );
}

export default Tabs;