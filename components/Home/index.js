import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { homeActions, mainActions } from "../../redux/actions";
import Container from "../Common/Container";
import FlashSale from "./FlashSale";
import Slider from "./Slider";

const Home = () => {
    const dispatch = useDispatch();

    const home = useSelector(state => state.home);

    useEffect(() => {
        dispatch(homeActions.getFlashSale());
    }, []);

    const main = useSelector(state=>state.main);
    console.log('getData',main);

    useEffect(() => {
        dispatch(mainActions.getData());
    }, []);

    return (
        <Container>
            <Slider />
            <FlashSale home={home} />
        </Container>
    );
}

export default Home;