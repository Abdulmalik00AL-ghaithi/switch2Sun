import React from "react"
import NavBar from "./navBar"
import MailForm from "./mailForm";
import {Link} from "react-router-dom"
import image from "../assets/photo-1558449028-b53a39d100fc.avif"

export default function AboutUs(){
    const activePage = "aboutus"
    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
          fileReader.onload = () => {
            resolve(fileReader.result);
          };
          fileReader.onerror = (error) => {
            reject(error);
          };
        });
      };
    
    
    return(
        <>  
            <input type="file" onChange={
               async  e =>{const y = await convertToBase64(e.target.files[0])
                console.log(y)}
            }/>
            
            <NavBar activePage={activePage}/>
            <main className="about-us-container">
                <h1>Over ons</h1>
                <article className="about-us-article">
                    <p>Welkom bij Switch2Sun, uw vertrouwde partner in zonne-energie diensten.</p>
                    <p>
                        Bij Switch2Sun zijn we niet zomaar een bedrijf voor zonne-energie diensten - we zijn uw 
                        toegangspoort tot een duurzamere toekomst. Met een passie voor hernieuwbare energie en een 
                        toewijding aan excellentie, staan we vooraan in de zonnerevolutie. We helpen huiseigenaren en 
                        bedrijven om de kracht van de zon te benutten voor efficiënte, milieuvriendelijke 
                        energieoplossingen.
                    </p>
                    <p>
                        Ons ervaren team van professionals is toegewijd aan het leveren van eersteklas installatie-, 
                        onderhouds- en reparatiediensten voor zonnepanelen. We begrijpen dat elk project uniek is, daarom 
                        stemmen we onze oplossingen af op uw specifieke energiebehoeften en doelen. Of u nu uw ecologische 
                        voetafdruk wilt verkleinen, uw energierekeningen wilt verlagen of de waarde van uw eigendom wilt verhogen,
                        wij hebben de oplossing.
                    </p>
                    <Link to="/contact">Contact met ons</Link>
                    <img src={image} />
                </article>
            </main>
            <MailForm />
        </>
    )
}