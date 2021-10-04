import React, { useEffect, useState, useRef } from 'react';
import styles from './Countdown.module.scss'

function index({ timer, setTabs, setIdCollection, title, setTitle, setToggle, setTimeToStart }) {

    const [timerHours, setTimerHours] = useState()
    const [timerMinutes, setTimerMinutes] = useState()
    const [timerSeconds, setTimerSeconds] = useState()


    const dt = new Date()
    const today = dt.getDate()
    const month = dt.getMonth()

    let interval = useRef(null)

    const currentTime = dt.getHours()
    useEffect(() => {

        for (let index = 0; index < timer[0]?.length; index++) {
            if (timer[0][index].start <= currentTime && currentTime < timer[0][index].end) {

                setTitle('Kết thúc trong')
                setTabs(index)
                setIdCollection(timer[0][index].collectionId)

                interval = setInterval(() => {
                    const endTime = new Date(`${month + 1}-${today}-2021 ${timer[0][index].end}:00:00`).getTime()
                    const now = new Date().getTime();

                    const distance = endTime - now;

                    let seconds = 1000
                    let minutes = seconds * 60
                    let hours = minutes * 60
                    let days = hours * 24


                    let timeHours = Math.floor((distance % days) / (hours));
                    let timeMinutes = Math.floor((distance % hours) / minutes);
                    let timeSeconds = Math.floor((distance % minutes) / seconds);

                    timeHours = timeHours < 10 ? "0" + timeHours : timeHours
                    timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes
                    timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds


                    if (distance < 0) {
                        setToggle(false)
                        setTabs(index + 1)
                        setTimeToStart(timer[0][index + 1].start)
                        clearInterval(interval.current)
                    }
                    else {
                        setTimerHours(timeHours);
                        setTimerMinutes(timeMinutes);
                        setTimerSeconds(timeSeconds);
                    }
                }, 1000);
            }
            else if (index > timer[0]?.length) {
                index = 0
            }
        }



        return () => clearInterval(interval.current)
    }, [timer]);

    return (
        <div className={styles.countdownWrapper}>
            <div className={styles.countdown}>
                <h6>Kết thúc trong: </h6>
                <div>{timerHours}</div>
                <div>{timerMinutes}</div>
                <div>{timerSeconds}</div>
            </div>
        </div>
    );
}

export default index;