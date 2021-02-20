import React from 'react';

const NavBar = () => {
    const clickAlert = () => {
        window.alert("button clicked");
    }
    return (
        <>
            <div className="container">
                <h1 className="heading">NavBar Functional Component</h1>
                <button onClick={clickAlert}>Click</button>
            </div>
        </>
    )
}

export default NavBar;