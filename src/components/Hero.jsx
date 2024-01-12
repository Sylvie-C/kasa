
function Hero( { heroImg , title="" } ) {
  return (
    <section className= { `hero ${ heroImg }` }>
      <h1 className="hero__title">{title}</h1>
    </section>
  );
}
export default Hero;
