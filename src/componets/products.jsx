import React from "react";
import NavBar from "./navBar"
import ProductCard from "./productCard";
import axios from "axios"

export default function Products(){
    const activePage = "product"
    const [products,setProduts] = React.useState([])
    React.useEffect(()=>{
        axios.get(`http://localhost:3001/getProducts`)
        .then(product => {console.log(product.data);console.log("success")})
        .catch(error => console.log(error))}
    ,[])
    console.log(products)
    return(
        <>
        <NavBar activePage={activePage}/>
        <main className="product-container">
            <h1>Onze producten</h1>
            <ul className="product-cards-container">
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </ul>
        </main>
        </>
    )
}