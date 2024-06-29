import React from 'react';
import image1 from "../assets/20230606_132318-dOqlM9kkvWSBwaPg.avif"
import image2 from "../assets/zonnepanelen-onderhoud-A1a1eyR2Mnf6R5kD.avif"
import image3 from "../assets/technisch-onderhoud-zonnepanelen-mk38l7ZVevcKwr6W.avif"
import NavBar from "./navBar"
import image4 from "../assets/solarguard-pro-pakket-brons-500-meter-plus-2700-clips-ALpB8VEr8Kibe9nE.avif"


export default function Services(){
    const activePage = "service"
    return(
        <>  
            <NavBar activePage={activePage}/>
            <main className='services-page'>
                
                <h1>Onze diensten</h1>
                <p>
                    Wij zijn een gespecialiseerd bedrijf in zonne-energie-installatie en -onderhoud.
                    Onze uitgebreide diensten omvatten:
                </p>
                
                <article className='service-article'>
                    <div>
                        <img src={image1} />
                        <h2>
                            1. Zonnepaneel Installatie:
                        </h2>
                        <p>
                            Wij bieden nauwkeurige en professionele zonnepaneelinstallaties aan. 
                            Of het nu voor uw huis of uw bedrijf is, ons team van experts ontwerpt 
                            en installeert een op maat gemaakt zonnesysteem dat perfect aansluit op 
                            uw behoeften.
                        </p>
                    </div>
                </article>

                <article className='service-article'>
                    <div>
                        <img src={image2} />
                        <h2>
                            2. Zonnepaneel Schoonmaaken:
                        </h2>
                        <p>
                            Het behouden van schone zonnepanelen is essentieel voor maximale efficiëntie. 
                            Onze gespecialiseerde schoonmaakdiensten verwijderen vuil en vervuiling die de 
                            prestaties van uw panelen kunnen beïnvloeden.
                        </p>
                    </div>
                </article>

                <article className='service-article'>
                    <div>
                        <img src={image3} />

                        <h2>
                            3. Zonnepaneel Onderhoud:
                        </h2>
                        <p>
                            Wij bieden regelmatig onderhoud om de duurzaamheid en optimale werking van uw zonne-energiesysteem
                            te waarborgen. We inspecteren alle componenten en voeren indien nodig onderhoud uit om een hoog rendement
                            te behouden.
                        </p>
                    </div>
                </article>

                <article className='service-article'>
                    <div>
                        <img src={image4} />
                        <h2>
                            scherming tegen Vogels:
                        </h2>
                        <p>
                            We bieden effectieve oplossingen om uw zonnepanelen te beschermen tegen vogelverontreiniging. 
                            Of het nu gaat om het installeren van afschrikmiddelen of innovatieve bevestigingstechnieken,
                            we zorgen ervoor dat uw systeem veilig is tegen schade.
                        </p>
                    </div>
                </article>

            </main>
        </>
    )
}