import React, { useState, useEffect } from 'react';

import Item from './Item';
import Tabs from './Tabs'
import Countdown from '../../Common/Countdown'


import { Fire } from "../../../asstes/icons"
import styles from './scss/Index.module.scss';
import { homeActions } from '../../../redux/actions';
import { useDispatch } from 'react-redux';


function FlashSale({ home }) {

    const [tabs, setTabs] = useState(0)
    const [time, setTime] = useState(0)
    const [title, setTitle] = useState('Bắt đầu trong')

    const [idCollection, setIdCollection] = useState('Q29sbGVjdGlvbjoyOA==')

    const dispatch = useDispatch()

    const dt = new Date()
    const hour = dt.getHours()


    const mapTime = home.flashSale.map(item => (
        item?.flashsale?.["time-frame"]
    ))

    const date = new Date()

    const getDateSale = () => {
        return home.flashSale.map(item => (
            item?.flashsale?.name
        ))
    }


    const timer = mapTime.map(item => item.map((item, index) => (
        {
            id: index,
            start: item["time-from"],
            end: item["time-to"],
            startTime: item["start-time"].slice(11, 16),
            endTime: item["end-time"].slice(11, 16),
            collectionId: item["collection-id"]
        }
    )
    ))

    // click show data
    const showProducts = (item) => {
        const { start, id, collectionId } = item
        if (hour > item.start) {
            setTitle('Đã kết thúc')
            setTabs(id)
            setIdCollection(collectionId)
            setTime(0)

        }
        else if (hour < start) {
            setTitle('Bắt đầu trong')
            setTabs(id)
            setIdCollection(collectionId)
            setTime(start)
        }
    }




    useEffect(() => {
        dispatch(homeActions.getCollectionById({ id: idCollection }))
    })


    return (
        <div className={styles.saleWrapper}>
            <div className={styles.saleTitle}>
                {getDateSale()}  <Fire />
            </div>
            <Tabs timer={timer} tabs={tabs} setTabs={setTabs} setIdCollection={setIdCollection} date={date} showProducts={showProducts} setIdCollection={setIdCollection} />
            <Countdown title={title} time={time} />
            <Item collectionById={idCollection} />
        </div >
    );
}

export default FlashSale;