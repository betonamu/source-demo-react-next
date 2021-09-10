import React from "react";
import LifeCycle from "./LifeCycle";
import styles from "./Home.module.scss";
import Slider from "./Slider";
import { Mobile } from "../Common/Container/Media";

import Icon from "../../asstes/icons/icon-plus-44.svg";

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
                <Mobile>
                    <Slider />
                    <Icon />
                </Mobile>
            </>
        );
    }
}

export default Home;