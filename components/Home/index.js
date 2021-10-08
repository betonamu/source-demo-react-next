import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { homeActions, categoryActions } from "../../redux/actions";
import Container from "../Common/Container";
import FlashSale from "./FlashSale";
import Slider from "./Slider";

const Home = () => {
    const dispatch = useDispatch();

    const home = useSelector(state=>state.home);
    // console.log('ádasd',home);

    useEffect(() => {
        dispatch(homeActions.getFlashSale());
    }, []);

    return (
        
        <Container>
            <Slider />
            < FlashSale />
        </Container>
    );
}

export default Home;