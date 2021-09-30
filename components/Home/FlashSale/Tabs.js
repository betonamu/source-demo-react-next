import React, { useEffect } from 'react';
import classNames from 'classnames';



function Tabs({ styles, tabs, setTabs, date, timer, showProducts, handleGetId }) {


    const autoActive = (currentTime) => {
        for (let index = 1; index < timer[0]?.length; index++) {
            if (timer[0][index].start <= currentTime && currentTime < timer[0][index].end) {
                handleGetId(timer[0][index].collectionId)
                index++
                setTabs(index)
            }
        }
    }

    const timeSale = (item, now) => {
        return item.start < now && now < item.end
    }


    useEffect(() => {
        autoActive(date.getHours())
    }, [date])

    return (
        <div className={styles.saleBlockTabs}>
            <div className={styles.saleTabs}>
                {
                    timer.map((item) => (
                        item.map((item, index) => (
                            <button
                                key={index}
                                className={classNames(styles.tabs, {
                                    [styles.activeTabs]: tabs === item.id
                                })}
                                onClick={() => showProducts(item)}
                            >
                                {item.startTime} - {item.endTime}
                                <span className={styles.span}>{timeSale(item, date.getHours()) ? 'Đang diễn ra' : 'Sắp diễn ra'}</span>
                            </button>
                        ))
                    ))
                }
            </div>
        </div>
    );
}

export default Tabs;