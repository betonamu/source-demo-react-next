import React from "react";

import CounterContext from "../../contexts/Counter/CounterContext";
import Container from "../../components/Common/Container";

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
        </Container>
    );
}

export default Home;