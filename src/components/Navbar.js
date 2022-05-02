import React from "react";
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';

function Navbar(){
    const item = useSelector((state)=> state.cart);
    return(
        <div style={{display:"flex", alignItems:"center",justifyContent:'space-between'}}>
            <span className="logo">Redux Store</span>
            <div>
                <Link className="navLink" to="/">Home</Link>
                <Link className="navLink" to="/cart">Cart</Link>
                <span className="cartCount">Cart items: {item.length} </span>
            </div>
        </div>
    )
}
export default Navbar;