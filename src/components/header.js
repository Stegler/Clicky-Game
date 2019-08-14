import React from 'react';

const Header = (props)=> (
    <nav style={{background: "black", color: "yellow"}} className={"navbar navbar-default sticky-top"}>
        <div className={"container"}>
            <div>Car Click Memory Game</div>
            <div>Score: {props.score}</div>
            <div>Top score: {props.topScore}</div>

        </div>
    </nav>
);

export default Header;