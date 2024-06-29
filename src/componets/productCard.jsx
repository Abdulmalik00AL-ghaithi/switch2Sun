import React from "react";
import image from "../assets/phono-solar-draco-n-type-topcon-415-wp-full-black-bifacial-glasglas-ALpJlkJerqhrbK6A.avif"
export default function ProductCard(props){

    return(
        <>
        <li className="card-container">
            <h2>
                N-topcon 425 WP
            </h2>
            <img src={image}/>
            <button>bekijk</button>
        </li>
        </>
    )
}