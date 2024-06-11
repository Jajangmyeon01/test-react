import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="links">
            <h1>Programming Hero Home</h1>
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/courses">Courses</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;
