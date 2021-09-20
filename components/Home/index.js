import React from "react";
import Icon from "../../asstes/icons/icon-plus-44.svg";
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
            <>
                {/* <Slider />
                <Icon /> */}
            </>
        );
    }
}

export default Home;