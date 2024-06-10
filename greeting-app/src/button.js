import React from "react";

const Button = ({ text = "Click Here"}) => {
    return(
        <div>
            <button className="btn">{text}</button>
        </div>
    );

};
export default Button;
