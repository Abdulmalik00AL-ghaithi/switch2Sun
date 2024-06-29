import React from "react";
import Icon from "../assets/logo-AoPekOy4P7cr6ZPP.avif"
import {Link} from "react-router-dom"

export default function NavBar({activePage}){
    const [drop,setDrop] = React.useState(false)
    
    const navBaranim = () => {
        setDrop(prev => !prev)
    }
    return(
        <>
        <nav className="navbar-container">
        
            <img src={Icon} className="navbar-logo" width="150px"/>
            <button onClick={navBaranim} className="navbar-button-dropdown" border="none">
                {drop ? <span className="one"></span> :<span></span>}
                {drop ? <span className="two"></span> :<span></span>}
                {drop ? <span className="three"></span> :<span></span>}
            </button>    
            

            
            <ul className={`navbar-menu ${drop ? "drop-navbar-menu" :""}`} >
                <li style={/*this tell what page you are in*/{borderBottom:activePage ==="home" ? "0.5px solid black" : ""}}><Link to={'/'} >Home</Link></li>
                <li style={/*this tell what page you are in*/{borderBottom:activePage ==="service" ? "0.5px solid black" : ""}}><Link to={'/services'} >Diensten</Link ></li>
                <li style={/*this tell what page you are in*/{borderBottom:activePage ==="product" ? "0.5px solid black" : ""}}><Link to={'/products'} >Producten</Link ></li>
                <li style={/*this tell what page you are in*/{borderBottom:activePage ==="aboutus" ? "0.5px solid black" : ""}}><Link to={'/aboutus'} >Over ons</Link ></li>
                <li style={/*this tell what page you are in*/{borderBottom:activePage ==="contact" ? "0.5px solid black" : ""}}><Link to={'/contact'} >Contacts</Link ></li>
            </ul>

        </nav>
        
        </>
    )
}