import React from 'react';

import Item from './Item';
import Countdown from '../../Common/Countdown'
import Tabs from './Tabs'

import { Fire } from "../../../asstes/icons"
import styles from './scss/Index.module.scss';


function FlashSale() {

    const date = new Date()
    const today = date.getDate()
    const month = date.getMonth()

    const getDateSale = () => {
        return `Sale sốc ngày ${today}.${month + 1}`
    }

    const timer = [
        {
            id: 1,
            start: '10.00',
            end: '12.00'
        },
        {
            id: 2,
            start: '14.00',
            end: '16.00'
        },
        {
            id: 3,
            start: '18.00',
            end: '20.00'
        }
    ]

    return (
        <div className={styles.saleWrapper}>
            <div className={styles.saleTitle}>
                {getDateSale()}  <Fire />
            </div>
            <Tabs styles={styles} date={date} timer={timer} />
            <Countdown timer={timer} />
            <Item />
        </div >
    );
}

export default FlashSale;