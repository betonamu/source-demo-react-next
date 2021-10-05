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

    const date = new Date()
    const hour = date.getHours()


    const mapTime = home.flashSale.map(item => (
        item?.flashsale?.["time-frame"]
    ))


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
        const { start, end, id, collectionId } = item
        if (hour > start && hour > end) {
            setTitle('Đã kết thúc')
            setTabs(id)
            dispatch(homeActions.getCollectionById({ id: collectionId }))
            setTime(0)

        }
        else if (hour < start) {
            setTitle('Bắt đầu trong')
            setTabs(id)
            setTime(start)
            dispatch(homeActions.getCollectionById({ id: collectionId }))
        }
        else if (start <= hour && hour < end) {
            setTime(end)
            setTabs(id)
            dispatch(homeActions.getCollectionById({ id: collectionId }))
            setTitle('Kết thúc trong')
        }
    }




    useEffect(() => {
        const countToStart = () => {
            for (let index = 0; index < timer[0]?.length; index++) {
                if (hour <= timer[0][0].start) {
                    setTabs(0)
                    setTime(timer[0][0].start)
                }
                else if (timer[0][index].end <= hour && hour < timer[0][index + 1].start) {
                    setTabs(index + 1)
                    setTime(timer[0][index + 1].start)
                }
            }
        }
        countToStart()
        dispatch(homeActions.getCollectionById({ id: idCollection }))
    },[])


    return (
        <div className={styles.saleWrapper}>
            <div className={styles.saleTitle}>
                {getDateSale()}  <Fire />
            </div>
            <Tabs timer={timer} tabs={tabs} setTabs={setTabs} setTime={setTime} setTitle={setTitle} setIdCollection={setIdCollection} date={date} showProducts={showProducts} setIdCollection={setIdCollection} />
            <Countdown title={title} time={time} />
            <Item collectionById={idCollection} />
        </div >
    );
}

export default FlashSale;