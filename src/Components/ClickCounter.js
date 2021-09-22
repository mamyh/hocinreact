import React from "react";
import withCounter from "./Hoc/withCounter";
function ClickCounter({ count, increment }) {

    return (
        <div>
            <button type="button" onClick={increment}>Click me {count} times</button>

        </div>)
}

export default withCounter(ClickCounter);