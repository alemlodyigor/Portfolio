import React from "react";
import Content from "./components/Content";
import Profile from "./components/Profile";
import '../styles/home.scss';

const Home = () => {
    return (
        <div className="home">
            <Content />
            <Profile/>
        </div>
    )
}

export default Home;