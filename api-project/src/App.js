import React, { useEffect, useState } from "react";
import Axios from "axios";
import MyCard from "./Card";
import "./Card.css";

const App = () => {
    const [userData, setUserData] = useState({});

    const fetchDetails = async () => {
        const {data} = await Axios.get("https://randomuser.me/api/")
        console.log("RESPONSE:", data);
        const details = data.results[0];
        setUserData(details);
    };
    useEffect(() => {
        fetchDetails();
    }, []);

    return (
        <div>
            <MyCard details={userData}/>
        </div>
    );
}
export default App;