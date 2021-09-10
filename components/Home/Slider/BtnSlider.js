import React from "React";
import classNames from "classnames";

import styles from "./scss/BtnSlider.module.scss"

function BtnSlider({ direction, moveSlide }) {
    return (
        <button
            onClick={moveSlide}
            className={classNames(styles.btnCarousel,
                {
                    [styles.next]: direction === 'next',
                    [styles.prev]: direction === 'prev',
                })}
        >
            <img src={direction === "next" ? "./icons/next.png" : "./icons/prev.png"} />

        </button>
    );
}

export default BtnSlider