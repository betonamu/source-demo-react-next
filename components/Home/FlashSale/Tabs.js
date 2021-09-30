import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

function Tabs({ styles, date, timer }) {

    const [tabs, setTabs] = useState(0)

    const autoActive = (currentTime) => {
        if (timer[0].start <= currentTime && currentTime < timer[0].end) {
            setTabs(1)
        }
        else if (timer[1].start <= currentTime && currentTime < timer[1].end) {
            setTabs(2)
        }
        else if (timer[2].start <= currentTime && currentTime < timer[2].end) {
            setTabs(3)
        }
        else setTabs(0)
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
                        <button
                            className={classNames(styles.tabs, {
                                [styles.activeTabs]: tabs === item.id
                            })}
                        >
                            {item.start} - {item.end}
                            <span className={styles.span}>{timeSale(item, date.getHours()) ? 'Đang diễn ra' : 'Sắp diễn ra'}</span>
                        </button>
                    ))
                }
            </div>
        </div>
    );
}

export default Tabs;