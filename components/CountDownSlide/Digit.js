import classNames from "classnames";
import next from "next";
import React, { useEffect, useState, useRef } from "react";

import styles from "./CountDownSlide.module.scss";

const Digit = ({ value, firstNumber }) => {
    const getNext = (value) => {
        if (value == "0" && firstNumber) {
            return "5";
        } else if (value == "0") {
            return "9";
        }
        let intValue = parseInt(value);
        return (intValue - 1).toString();
    }

    const nextValue = useRef(getNext(value));
    const [isMove, setIsMove] = useState(false);
    const timeoutReset = useRef(null);
    const [firstTime, setFirstTime] = useState(false);


    useEffect(() => {
        if (!firstTime) {
            setFirstTime(true);
            return;
        }

        setIsMove(true);
    }, [value]);

    useEffect(() => {
        if (isMove) {
            if (timeoutReset.current) {
                return;
            }

            timeoutReset.current = setTimeout(() => {
                nextValue.current = getNext(value);
                setIsMove(false);
            }, 350);
        }

        return () => {
            clearTimeout(timeoutReset.current);
            timeoutReset.current = null;
        };
    }, [isMove, value]);

    return (
        <div className={classNames(styles.digitWrapper, {
            [styles.move]: isMove
        })}>
            <div>{nextValue.current}</div>
            <div>{value}</div>
        </div>
    )
}

export default Digit;