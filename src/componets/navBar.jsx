import React from "react";
import Icon from "../assets/logo-AoPekOy4P7cr6ZPP.avif"

export default function NavBar(){
    const [target,setTarget] = React.useState()
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
                <li>Home</li>
                <li>Diensten</li>
                <li>Producten</li>
                <li>Over ons</li>
                <li>Contacts</li>
            </ul>

        </nav>
        
        </>
    )
}