import Hero from "../components/Hero" ; 
import galleryResource from "../data/logements.json" ; 
import { Link } from "react-router-dom";

function Home() {
    
    return (
        <div className="pageContent">
            <Hero heroImg="homeHero"/> 

            <section className="gallery">
                { 
                    galleryResource.map ( (elt) => (	
                            <Link to= {`/accomodation/${elt.id}`} className="gallery__card" key={elt.id}> 
                                <div className="gallery__cardLayer"></div>
                                <img src={elt.cover} alt="appartement"></img>
                                <p>{elt.title}</p>
                            </Link> 
                        ) 
                    ) 
                }
            </section>
        </div>
    )
}
export default Home; 