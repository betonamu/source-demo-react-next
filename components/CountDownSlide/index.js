import React from "react";

import Section from "./Section";
import useCountDown from "../../hooks/useCountDown";

import styles from "./CountDownSlide.module.scss";

const CountDownSlide = () => {
    const { hours, minutes, seconds } = useCountDown("2021/12/01");

    return (
        <div className={styles.countDownSlide}>
            <Section time={hours} />
            <Section time={minutes} />
            <Section time={seconds} />
        </div>
    )
}

export default CountDownSlide;