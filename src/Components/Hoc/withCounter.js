import React from "react";

const withCounter = (OriginalComponent) => {
    class newComponent extends React.Component {
        state = { counter: 0 }

        incrementCount = () => {
            this.setState((prevState) => ({
                counter: prevState.counter + 1
            }))
        }
        render() {
            const { counter } = this.state;
            return <OriginalComponent count={counter} increment={this.incrementCount}></OriginalComponent>
        }
    }
    return newComponent;
}

export default withCounter;