import React from "react";

export default function MailForm(){

    return(
        <>
            <form>
                <h2>Contact met ons</h2>
                <label>
                Naam<input type="text" />
                </label>

                <label>
                Achter naam<input type="text" />
                </label>

                <label>
                Email*<input type="email" />
                </label>

                <label>
                Bericht*<textarea placeholder=""></textarea>
                </label>
                <button>Verstuur</button>

            </form>
        </>
    )


}