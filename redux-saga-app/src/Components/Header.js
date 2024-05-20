import React from "react";
import { useSelector } from "react-redux";


function Header(){

    const result = useSelector((state)=>state.cartData);
    console.log(result);

    return(
        <div className="header">
            <div className="cart-div">
                <span>{result.length}</span>
                <img src="https://cdn-icons-png.freepik.com/256/1170/1170678.png?semt=ais_hybrid" />
            </div>
        </div>
    )
}

export default Header;