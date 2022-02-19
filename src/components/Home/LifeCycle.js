import React from "react";

class LifeCycle extends React.Component {
    componentWillMount() {
        console.log('Component Will Mount');
    }

    componentDidMount() {
        console.log('Component Did Mount');
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log('Component Did Mount');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('Should Component Update');
        return true;
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('Component Will Update');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Component Did Update');
    }

    componentWillUnmount() {
        console.log('Component Will Unmount');
    }

    render() {
        return(
            <div>
                <h3>{this.props.number}</h3>
            </div>
        );
    }
}

export default LifeCycle;