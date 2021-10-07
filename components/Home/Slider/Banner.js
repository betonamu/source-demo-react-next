import React, { useEffect } from 'react';

import { Desktop } from '../../Common/Container/Media'

import { dataBanner } from './data';
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { mainActions } from '../../../redux/actions';

import styles from './scss/Slider.module.scss'


function Banner() {

    const dispatch = useDispatch();

    const main = useSelector(state=>state.main.getData);
    // console.log('ádasd',main);
    
    useEffect(() => {
        dispatch(mainActions.getData());
    }, []);

    return (
        <Desktop>
            <div className={styles.subBanner}>
                {
                    main[1]?.images?.map(item=>(
                        item.images?.map(items=>(
                            <div className={styles.subItem}>
                                <img src={items.img} />
                            </div> 
                        ))
                    ))
                }
            </div>
        </Desktop>
    );
}

export default Banner;