import { useState } from "react" ; 

function Slider ( {pictures , location} ) {
/*  Function to generate Slider component : slides are changed on user click only. 
    Props : 2 ->    pictures to display : Array of Strings / pictures path (for "<img src" attribute)
                    location : text/string to add as "alt" attribute of <img> slide tag
    Return : Slider component. 
*/

    const [currentSlide, newSlide] = useState(0) ; 
    const lastSlide = (pictures.length)-1 ; 

    // on click on right arrow, "currentSlide" state value changes
    function moveNext() {
        if (currentSlide !== lastSlide) {
            newSlide (currentSlide +1) ;
        } else if (currentSlide === lastSlide) {
            newSlide (0) ; 
        }
    }

    // on click on left arrow, "currentSlide" state value changes
    function moveBack() {
        if (currentSlide !== 0) { newSlide (currentSlide -1) }
        else if (currentSlide === 0) { newSlide (lastSlide) } 
    }

    return (
        <div className="slider">

            <div className="slider__arrowContainer">  
                <svg className="arrowLeft" onClick={moveBack} fill="none" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
                    <path fill="white" d="M70.0399 16.425L62.9199 9.34497L23.3599 48.945L62.9599 88.545L70.0399 81.465L37.5199 48.945L70.0399 16.425Z" />
                </svg>
                <svg className="arrowRight" onClick={moveNext} fill="none" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
                    <path fill="white" d="M70.0399 16.425L62.9199 9.34497L23.3599 48.945L62.9599 88.545L70.0399 81.465L37.5199 48.945L70.0399 16.425Z" />
                </svg>
            </div>

            { <img  className="slider__coverImg" 
                    src={pictures[currentSlide]} 
                    alt={location} /> 
            }

            <div className="slider__number">
                {currentSlide+1} / {pictures.length}
            </div>

        </div>
    )


}

export default Slider; 