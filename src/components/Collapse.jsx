import { useState } from "react" ; 

function Collapse ( {id , title , text} ) {
/*  Component with button entitled "title" including arrow icon pointing to top. 
    On click on that button : 
    - "text" is displayed underneath (with "collapse__text--shown" CSS class applied instead of 
        "collapse__text--hidden" class by default), 
    - "arrow top" turns pointing to bottom (with "rotateCollapseArrow" CSS class applied)
    -> CSS class used to apply transitions (animations). 
    Props : 3 -> id (for key prop on button) , title , text. 
    Return : Collapse component.  
*/

    // --- Local variables ---
    const [visible, setVisibility] = useState(false) ; 

    const toggleShowHide = () => { 
        setVisibility (!visible) ; // sets negative value of “visible” current bool value (reverse)
    } 

    const arrowClasses = `collapseArrow ${visible && "rotateCollapseArrow"}` ; 

    return (
        <div className="collapse" key={id}>
            <div className="collapse__btn" onClick={toggleShowHide}>
                <p className="btnText">{title}</p>
                <svg className={arrowClasses} viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.2897 0.789661C11.9591 0.120242 13.0462 0.120242 13.7157 0.789661L23.9979 11.0719C24.6674 11.7414 24.6674 12.8285 23.9979 13.4979C23.3285 14.1673 22.2414 14.1673 21.572 13.4979L12.5 4.42595L3.42804 13.4926C2.75862 14.162 1.67148 14.162 1.00206 13.4926C0.332646 12.8231 0.332646 11.736 1.00206 11.0666L11.2843 0.784306L11.2897 0.789661Z" fill="white"/>
                </svg>
            </div>
            <div className= { visible ? "collapse__text--shown" : "collapse__text--hidden" } >
                <p >{text}</p>
            </div>
        </div>
    )
}
export default Collapse; 