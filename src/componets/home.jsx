import React from "react";
import image1 from "../assets/photo-1509391366360-2e959784a276.avif"
import image2 from "../assets/photo-1545209463-e2825498edbf.avif"
import instq from "../assets/installq-mePLN8RrMLIkp5bg.avif"
import techNed from "../assets/logo_technieknl-YanBjkRXaWcxpOzZ.avif"
import vca from "../assets/vca-Aq2BkL9PZyUDbOql.avif"
import MailForm from "./mailForm";

export default function Home(){
    return(
        <>
            <main className="content-container">

                <section className="title-container">

                    <div className="title-mask-container">

                        <h1>Haal alles uit de zon ☀️</h1>

                    </div>

                </section>

                <article className="article-first">

                    <img src={image1}/>

                    <div>

                        <span>ALLEREERST</span>

                        <h2>Switch2sun: De Kracht van de Zon Benutten</h2>

                        <p>
                            Ontdek hoe Switch2sun de weg leidt in het installeren van 
                            zonnepanelen en het leveren van duurzame energieoplossingen 
                            in Nederland. Ons ervaren team van experts is toegewijd aan 
                            het omzetten van overvloedige zonne-energie in een oplossing 
                            die zowel het milieu als de samenleving ten goede komt.
                        </p>

                    </div>

                </article>

                <article className="article-second">
                    <img src={image2}/>


                    <div>
                        
                        <h2>Onze Diensten</h2>
                        
                        <p>
                            Wij zijn gespecialiseerd in de installatie van zonnepanelen en 
                            hebben een team van experts dat hierin is gespecialiseerd. Ons 
                            doel is om duurzame energieoplossingen te bieden aan onze klanten. 
                            Naast installatiediensten, verkopen wij ook hoogwaardige zonnepanelen. 
                            Onze zonnepanelen zijn van hoge kwaliteit en voldoen aan alle vereisten 
                            en normen. Wij geloven sterk in de kracht van zonne-energie en willen 
                            bijdragen aan een schonere en groenere toekomst. Ons ervaren team staat
                            klaar om uw huis of bedrijf te voorzien van efficiënte en betrouwbare 
                            zonne-energie. Neem contact met ons op voor meer informatie of een 
                            vrijblijvende offerte.
                        </p>
                    
                    </div>

                </article>

                <section className="logo-container">

                    <img src={instq} />

                    <img src={techNed} />

                    <img src={vca} />

                </section>
                
                <section className="openings-container">

                    <h2>Openingstijden</h2>
                    <p><span className="day">Maandag:</span><span className="time">8:30 tot 17:00</span></p>
                    <p><span className="day">Dinsdag:</span><span className="time">8:30 tot 17:00</span></p>
                    <p><span className="day">Woensdag:</span><span className="time">8:30 tot 17:00</span></p>
                    <p><span className="day">Donderdag:</span><span className="time">8:30 tot 17:00</span></p>
                    <p><span className="day">Vrijdag:</span><span className="time">8:30 tot 17:00</span></p>
                    <p><span className="day">Zaterdag:</span><span className="time">Gesloten</span></p>
                    <p><span className="day">Zondag:</span><span className="time">Gesloten</span></p>
                    
                </section>

                <MailForm/>

            </main>

        </>
    )
}