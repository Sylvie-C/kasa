import Hero from "../components/Hero" ; 
import Collapse from "../components/Collapse";
import aboutText from "../data/about_text.json"; 

function About() {
  return (
    <div className="pageContent">
      <Hero heroImg="aboutHero"/>
      {
        aboutText.map ( (elt) => (
          <Collapse key={elt.id} title={elt.title} text={elt.text} />
        ))
      }
    </div> 
  ); 
}
export default About;
