
function Hero( { heroImg } ) {
  return (
    <section className= { `hero ${ heroImg }` }>
      <h1 className="hero__title">Chez vous, partout et ailleurs</h1>
    </section>
  );
}
export default Hero;
