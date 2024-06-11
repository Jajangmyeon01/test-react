import React from "react";
import Button from "./Button";
import Welcome from "./Welcome";

const App = () => {
    const isLoggedIn = true;
    return (
        <div>
            <h1>Programming Hero</h1>
            <Welcome name="Gen" type="PRO" isLoggedIn={isLoggedIn} />
            <Button isLoggedIn={isLoggedIn} />
        </div>
    );
};
export default App;