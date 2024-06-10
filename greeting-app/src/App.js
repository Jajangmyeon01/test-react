import React from "react";
import Welcome from "./Welcome";
import "./style.css";
import Button from "./button";

const App = () => {
    return (
        <div>
            <Welcome text="Welcome Gen!"/>
            <Button text="Login"/>
            <Button text="Sign Up"/>
            <Button/>
        </div>
    );
};
export default App;

