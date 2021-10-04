import React, { useState, useEffect } from 'react';

import Item from './Item';
import Tabs from './Tabs'
import Countdown from '../../Common/Countdown'


import { Fire } from "../../../asstes/icons"
import styles from './scss/Index.module.scss';
import StartTime from '../../Common/Countdown/StartTime';
import { homeActions } from '../../../redux/actions';
import { useDispatch } from 'react-redux';


function FlashSale({ home }) {

    const [toggle, setToggle] = useState(true)
    const [tabs, setTabs] = useState(0)
    const [timeToStart, setTimeToStart] = useState()
    const [timeEnd, setTimeEnd] = useState()
    const [title, setTitle] = useState('')

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
        if (item.id === tabs) {
            setTabs(item.id)
            setIdCollection(item.collectionId)
            setTitle('Kết thúc trong')
            setTimeEnd(item.end)
        }
        else if (item.id !== tabs) {
            setTabs(item.id)
            setIdCollection(item.collectionId)
            setTimeToStart(item.start)
            setTimeEnd(item.end)
            setToggle(false)
            setTitle('Bắt đầu trong')
        }
    }

    const showTimer = (item) => {
        if (hour >= item.start) {
            setToggle(true)
        }
        else {
            setToggle(false)
            setTimeToStart(item.start)
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
            <Tabs styles={styles} tabs={tabs} date={date} timer={timer} showProducts={showProducts} showTimer={showTimer} />

            {
                toggle ?
                    <Countdown timer={timer} setTimeToStart={setTimeToStart} setToggle={setToggle} title={title} setTitle={setTitle} timeEnd={timeEnd} date={date} setTabs={setTabs} setIdCollection={setIdCollection} timeToStart={timeToStart} /> :
                    <StartTime timeToStart={timeToStart} />
            }
            <Item collectionById={idCollection} />
        </div >
    );
}

export default FlashSale;