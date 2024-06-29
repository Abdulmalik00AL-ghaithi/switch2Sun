import React from "react";
import NavBar from "./navBar"
import MailForm from "./mailForm";

import image from "../assets/photo-1508514177221-188b1cf16e9d.avif"



export default function ContactUs(){
    const activePage = "contact"
    return(
        <>
        <NavBar activePage={activePage}/>
        <main className="contact-container">
            <article className="contact-information-container">
                <div>

                    <h1>Contact Switch2sun</h1>

                    <div>
                        <h2>
                            Email
                        </h2>
                        <p>
                            info@switch2sun.com
                        </p>
                    </div>

                    <div>
                        <h2>
                            Phone
                        </h2>
                        <p>
                            +31 626676222
                        </p>
                    </div>

                    <div>
                        <h2>
                            Address
                        </h2>
                        <p>
                            Enschede, Nederlands
                        </p>
                    </div>

                </div>

                <MailForm marginValue={"none"} />

            </article>
            <img src={image} />
        </main>
        </>
    )
}