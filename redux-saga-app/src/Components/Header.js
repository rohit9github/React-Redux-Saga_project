import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


function Header() {

    const result = useSelector((state) => state.cartData);
    console.log(result);

    return (
        <div className="header">
            <Link to={"/"}>
                <h1 style={{ float: "left", marginLeft: "24px" }}>Logo</h1>
            </Link>
            <Link to={"/cart"}>
                <div className="cart-div">
                    <span>{result.length}</span>
                    <img src="https://cdn-icons-png.freepik.com/256/1170/1170678.png?semt=ais_hybrid" />
                </div>
            </Link>
        </div>
    )
}

export default Header;