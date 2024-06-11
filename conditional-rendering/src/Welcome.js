import React from "react";

const Welcome = ({
    name = "Learner",
    type = "Regular",
    isLoggedIn = false,
}) => {
    if (isLoggedIn){
        return (
            <div>
                <h2>Hello {name}!</h2>
                <p>Account Type: {type}</p>
            </div>
        );
    } else{
        return (
            <div>
                <h2>Hello {name}!</h2>
            </div>
        );
    }
};
export default Welcome;
