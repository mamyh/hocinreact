import React from "react";
import withCounter from "./Hoc/withCounter";
function HoverCounter({ count, increment }) {
    return (
        <div>
            <p onMouseOver={increment}>Hover over me {count} times</p>
        </div>
    )
}

export default withCounter(HoverCounter);