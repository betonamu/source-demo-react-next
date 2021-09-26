import React, { useState } from "react";

import AwesomeImage from "./AwesomeImage";

import styles from "./Home.module.scss";

const Home = () => {
    let num = 1;
    //const [num, setNum] = useState(1);
    //when state changed make component rerender

    setTimeout(() => {
        num++;
    }, 2000);

    return (
        <main className={styles.homeWrapper}>
            {/* <AwesomeImage src="https://picsum.photos/300/300" /> */}
            {num}
        </main>
    )
}

export default Home;