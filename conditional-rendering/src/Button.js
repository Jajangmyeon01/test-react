import React from "react";

const Button = ({ isLoggedIn}) => {
    if (isLoggedIn){
        return (
            <div>
                <button className="btn">Logout</button>
            </div>
        );
    }else{
        return (
            <div>
                <button className="btn">Login</button>
            </div>
        )
    }
};
export default Button;