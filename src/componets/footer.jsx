import React from "react";
import email from "../assets/email-mv05QWDLB0TzNRn8.avif"
import phone from "../assets/telephone-A0xeKlWyWKueQ3B9.avif"


export default function Footer(){
    return(
        <>
            <footer className="footer-container">
                <div className="footer-contact-info">
                    <h2>Contactgegevens</h2>

                    <p><img src={phone}/>+31 626676222</p>

                    <p><img src={email}/>info@switch2sun.nl</p>

                    <p>KVK-Nummer:91850452</p>
                </div>
                <div className="footer_title">
                    <h2>Switch2sun</h2>
                </div>
            </footer>
        </>
    )
}