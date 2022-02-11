import React from "react";

import CounterContext from "../../contexts/Counter/CounterContext";
import Container from "../../components/Common/Container";
import CounterNav from "./Counter";

const Home = () => {
    return (
        <Container>
            <CounterContext.Consumer>
                {({ updateNumber, number }) =>
                    <>
                        <button onClick={() => updateNumber()}>INCREMENT</button>
                        <b>{number}</b>
                    </>
                }
            </CounterContext.Consumer>

            <CounterNav/>
        </Container>
    );
}

export default Home;