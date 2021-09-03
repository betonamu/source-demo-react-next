import React from "react";
import Container from "../Common/Container";
import ModelItem from "../Common/ModelItem";


import styles from "./Home.module.scss";

const Home = () => {
    const arr = Array.from(Array(67).keys())
    return (
        <Container>
            <div className={styles.homeWrapper}>
                {arr.map(item => (
                    <ModelItem item={item}/>
                ))}
            </div>
        </Container>
    )
}

export default Home;