import React from "react";
import LifeCycle from "./LifeCycle";

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
                <button onClick={()=>this.setNewNumber(this)}>INCREMENT</button>
                <LifeCycle number={this.state.data} />
            </>
        );
    }
}

export default Home;