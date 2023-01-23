/**
 * HMR - Hot module reloading
 * 
 * file watcher algorithm -> written in c++
 * 
 * 
 */
import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
    <a href="/">
        <img src="/Users/rohitpandit/react_live/food_villa.jpg" alt="logo" className="logo" />
    </a>
);

const Header = () => {
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <h4> Body </h4>
    );
}

const Footer = () => {
    (
        <h4>Footer</h4>
    )
}


const AppLayout = () => {
    return (
        <div>
            <Header />
            <Body />
            <Footer/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

