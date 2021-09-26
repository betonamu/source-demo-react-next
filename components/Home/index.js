import React from "react";
import Container from "../Common/Container";
import FlashSale from "./FlashSale";
import Slider from "./Slider";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 0
        }
        //this.setNewNumber = this.setNewNumber.bind(this)
    };

    setNewNumber(that) {
        that.setState({ data: that.state.data + 1 });
    }

    render() {
        return (
            <Container>
                <Slider />
                < FlashSale />
            </Container>
        );
    }
}

export default Home;