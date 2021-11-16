import React, { useEffect, useState } from "react";
import CounterContext from "../../contexts/Counter/CounterContext";

const Home = () => {
    const [firstRender, setFirstRender] = useState(false);

    //cannot break in forEach
    
    useEffect(() => {
        let arr = Array.from(Array(10).keys());
        for (let index = 0; index < arr.length; index++) {
            console.log(index);
            if (index === 5) {
                break;
            }
        }
        console.log("55555555");
    }, [])

    return (
        <div>
            <div>Home</div>
            <CounterContext.Consumer>
                {(counter) =>
                    <>
                        <div>{counter.number}</div>
                        <button onClick={() => counter.updateNumber()}>Increment</button>
                    </>
                }
            </CounterContext.Consumer>
        </div>
    );
}

export default Home;