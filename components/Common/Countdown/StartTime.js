import React, { useEffect, useState, useRef } from 'react';
import styles from './Countdown.module.scss'

function StartTime({ timer, setTabs, setIdCollection, timeToStart }) {


    const [timerHours, setTimerHours] = useState()
    const [timerMinutes, setTimerMinutes] = useState()
    const [timerSeconds, setTimerSeconds] = useState()

    const dt = new Date()
    const today = dt.getDate()
    const month = dt.getMonth()

    let interval = useRef(null)

    useEffect(() => {
        interval = setInterval(() => {
            const startTime = new Date(`${month + 1}-${today}-2021 ${timeToStart}:00:00`).getTime()
            const now = new Date().getTime();

            const distance = startTime - now;

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
                clearInterval(interval.current)
                setToggle(true)
            }
            else {
                setTimerHours(timeHours);
                setTimerMinutes(timeMinutes);
                setTimerSeconds(timeSeconds);
            }
        }, 1000);
        return () => {
            clearInterval(interval.current)
        }
    }, [timeToStart])


    return (
        <div className={styles.countdownWrapper}>
            <div className={styles.countdown}>
                <h6>Bắt đầu trong: </h6>
                <div>{timerHours}</div>
                <div>{timerMinutes}</div>
                <div>{timerSeconds}</div>
            </div>
        </div>
    );
}

export default StartTime;