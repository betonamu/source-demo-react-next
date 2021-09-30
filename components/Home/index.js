import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { homeActions } from "../../redux/actions";
import Container from "../Common/Container";
import CounterNav from "./Counter";
import FlashSale from "./FlashSale";
import Slider from "./Slider";

const Home = () => {
    const dispatch = useDispatch();

    const home = useSelector(state=>state.home);
    console.log('ádasd',home);

    useEffect(() => {
        dispatch(homeActions.getFlashSale());
    }, []);

    return (
        <Container>
            <Slider />
            < FlashSale />
            <CounterNav />
        </Container>
    );
}

export default Home;