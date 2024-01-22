import { useParams , useNavigate } from "react-router-dom";
import { useEffect , useState } from "react" ; 
import galleryResource from "../data/logements.json" ; 

import Slider from "../components/Slider.jsx" ; 
import StarRate from "../components/StarRate.jsx" ; 
import Collapse from "../components/Collapse.jsx" ; 

function Accomodation() {
// Function to generate Accomodation page component. 

    // accomodation card selected by user (home page) : card id via URL
    const {accomodationId} = useParams() ;  
    const [accomodationData, setAccomodationData] = useState(null);
    const navigate = useNavigate() ;

    useEffect (
        () => {
            const testValue = galleryResource.some(elt => elt.id === accomodationId) ;
            const accomodationData = galleryResource.filter(elt => elt.id === accomodationId)[0] ; 

            if (!testValue) { navigate ("/error") }
            else { 
                setAccomodationData(accomodationData)
                navigate (`/accomodation/${accomodationId}`) 
            }
        }
        , [accomodationId , navigate]
    ) 

    return (
        <div className="pageContent accomodationPage">
            {
                accomodationData && 
                <Slider pictures= {accomodationData.pictures} 
                location= {accomodationData.location} />
            }

            <div className="info">
                <div className="info__titles">
                    {
                        accomodationData && 
                        <h1>{accomodationData.title}</h1>
                    }
                    {
                        accomodationData && 
                        <p>{accomodationData.location}</p>
                    }
                </div>
                <div className="info__owner">
                        {accomodationData && <p>{accomodationData.host.name}</p>}
                        {   accomodationData && 
                            <div className="ownerPix">
                                <img src={accomodationData.host.picture} alt="host"/>
                            </div>
                        }
                    </div>
                    <div className="info__tags">
                        {   accomodationData && 
                            accomodationData.tags.map ( (elt , index) => (
                                <p key= { `tag${index} `} > {elt} </p>
                            ) )
                        }
                    </div>
                    {
                        accomodationData && 
                        <StarRate rate={accomodationData.rating} />
                    }
            </div>

            <div className="details">
                <Collapse id="description" title="Description" text={accomodationData && accomodationData.description} />
                <Collapse id="equipments" title="Équipements" text={accomodationData && accomodationData.equipments} />
            </div>
        </div>
    )
}

export default Accomodation ; 