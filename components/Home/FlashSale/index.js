import React, { useState } from 'react';
import { useDispatch } from "react-redux";

import Item from './Item';
import Tabs from './Tabs'
import Countdown from '../../Common/Countdown'

import { homeActions } from "../../../redux/actions"

import { Fire } from "../../../asstes/icons"
import styles from './scss/Index.module.scss';


function FlashSale({ home }) {

    const [tabs, setTabs] = useState(0)
    const [id, setId] = useState('Q29sbGVjdGlvbjoyOA==')
    const dispatch = useDispatch()


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
            id: index + 1,
            start: item["time-from"],
            end: item["time-to"],
            startTime: item["start-time"].slice(11, 16),
            endTime: item["end-time"].slice(11, 16),
            collectionId: item["collection-id"]
        }
    )
    ))


    // get collection id
    const handleGetId = (id) => {
        setId(id)
    }

    // click show data
    const showProducts = (item) => {
        setTabs(item.id)
        dispatch(homeActions.getCollectionById({ id: item.collectionId }))
    }




    return (
        <div className={styles.saleWrapper}>
            <div className={styles.saleTitle}>
                {getDateSale()}  <Fire />
            </div>
            <Tabs styles={styles} tabs={tabs} setTabs={setTabs} date={date} timer={timer} showProducts={showProducts} handleGetId={handleGetId} />
            <Countdown timer={timer} date={date} />
            <Item collectionById={id} />
        </div >
    );
}

export default FlashSale;