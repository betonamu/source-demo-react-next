import React, { useEffect, useState } from 'react';
import styles from './Countdown.module.scss'

function index({ timer }) {

    const [timerHours, setTimerHours] = useState()
    const [timerMinutes, setTimerMinutes] = useState()
    const [timerSeconds, setTimerSeconds] = useState()

    const [timeOff, setTimeOff] = useState(0)

    const dt = new Date()
    const today = dt.getDate()
    const month = dt.getMonth()
    const hour = dt.getHours()


    const timeOut = (currentTime) => {
        for (let index = 0; index < timer[0]?.length; index++) {
            if (timer[0][index].start <= currentTime && currentTime < timer[0][index].end) {
                setTimeOff(timer[0][index].end)
                index++
            }
        }
    }

    const startTimer = () => {

        const countDownDate = new Date(`${month + 1}-${today}-2021 ${timeOff}:00:00`).getTime(),

            interval = setInterval(() => {
                const now = new Date().getTime();

                const distance = countDownDate - now;

                let hours = Math.floor(
                    (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
                );
                let minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
                let seconds = Math.floor((distance % (60 * 1000)) / 1000);

                if (hours <= 9) {
                    hours = "0" + hours;
                }
                if (minutes <= 9) {
                    minutes = "0" + minutes
                }
                if (seconds <= 9) {
                    seconds = "0" + seconds
                }


                if (distance < 0) {
                    clearInterval(interval.current);

                } else {
                    setTimerHours(hours);
                    setTimerMinutes(minutes);
                    setTimerSeconds(seconds);
                }
            });
    };

    useEffect(() => {
        startTimer();
        timeOut(hour);
    });

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