import Hero from "../components/Hero" ; 
import galleryResource from "../data/logements.json" ; 
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="homepage pageContent">
            <Hero/> 
            <section className="gallery">
                { 
                    galleryResource.map ( (elt) => (	
                        
                        <Link to="/accomodation/" className="gallery__card" key={elt.id}> 
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