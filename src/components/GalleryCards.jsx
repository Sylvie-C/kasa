import galleryResource from "../data/logements.json" ; 
import { Link } from "react-router-dom";

console.log (galleryResource); 

function GalleryCards () {
    return (
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
    )
}
export default GalleryCards; 

