import React from "react";

const Welcome = ({ text = "title-head"}) => {
    return (
        <div>
            <h1 title="heading">{text}</h1>
        </div>
    );
};
export default Welcome;