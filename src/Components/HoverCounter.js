import React from "react";

export default class HoverCounter extends React.Component {
    state = {
        counter: 0
    }
    incrementCounter = () => {
        this.setState((prevCounter) => ({
            counter: prevCounter.counter + 1
        }))
    }
    render() {
        const { counter } = this.state;
        return (
            <div>
                <p onMouseOver={this.incrementCounter}>Hover over me {counter} times</p>
            </div>
        )
    }
}