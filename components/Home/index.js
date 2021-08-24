import React from "react";
import CounterContext from "../../contexts/Counter/CounterContext";

const Home = () => {
    return (
        <CounterContext.Consumer>
            {({ updateNumber, number }) =>
                <>
                    <button onClick={() => updateNumber()}>INCREMENT</button>
                    <b>{number}</b>
                </>
            }
        </CounterContext.Consumer>
    );
}

export default Home;