import galleryResource from "../data/logements.json" ; 
import { useParams } from "react-router-dom";
import Slider from "../components/Slider" ; 
import Collapse from "../components/Collapse";
import StarRate from "../components/StarRate";  

function Accomodation() {
    // accomodation card selected by user (home page) : card id via URL
    const {accomodationId} = useParams() ; 

    // extraction of accomodation data from data file resource
    const accomodationData = (galleryResource.filter ( elt => ( elt.id === accomodationId )) )[0] ; 

    // extraction of accomodation rate/mark from data file resource
    const rate = accomodationData.rating ; 

    // extraction equipments + text format
    let equipments = [] ; 
    for (let i=0; i<accomodationData.equipments.length; i++) {
        equipments.push(accomodationData.equipments[i]); 
        equipments.push (<br key={`ln${i}`}/>) ; 
    }

    return (
        <div className="pageContent accomodationPage">
            
            <Slider 
                pictures= {accomodationData.pictures} 
                location= {accomodationData.location}
            />

            <div className="info">

                <div className="info__titles">
                    {<h1>{accomodationData.title}</h1>}
                    {<p>{accomodationData.location}</p>}
                </div>

                <div className="info__owner">
                    {<p>{accomodationData.host.name}</p>}
                    {
                        <div className="ownerPix">
                            <img src={accomodationData.host.picture} alt="host"/>
                        </div>
                    }
                </div>

                <div className="info__tags">
                    {
                        accomodationData.tags.map ( (elt , index) => (
                            <p key= { `tag${index} `} > {elt} </p>
                        ) )
                    }
                </div>

                <StarRate rate={rate} />
            </div>

            <div className="details">
                <Collapse id="description" title="Description" text={accomodationData.description} />
                <Collapse id="equipments" title="Équipements" text={equipments} />
            </div>
            
        </div>
    )
}
export default Accomodation ; 