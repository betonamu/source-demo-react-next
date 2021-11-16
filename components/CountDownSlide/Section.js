import React from "react";

import Digit from "./Digit";

import styles from "./CountDownSlide.module.scss";

const Section = ({ time }) => {
    const digit = time?.split("");
    return (
        <div className={styles.section}>
            <Digit value={digit?.[0]} firstNumber={true}/>
            <Digit value={digit?.[1]}/>
        </div>
    )
}

export default Section;