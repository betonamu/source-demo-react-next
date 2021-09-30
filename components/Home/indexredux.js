import React from "react";

import { useState, useEffect, useRef } from "react";

Counter.propTypes={}

const Redux = (props) => {

    const [count, setCount] = useState(0);

    const Tang = () =>{
        setCount(x => x + 1);
    }
    const Giam = () =>{
        setCount(x => x - 1);
    }

    return (
        <div>
            <b>{count}</b>
            <button onClick={() => Tang()}>Tăng</button>
            <button onClick={() => Giam()}>Giảm</button>
        </div>
    );
}

export default Redux;