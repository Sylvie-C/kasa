import { Link } from "react-router-dom" ; 

function Gallery() {
  return (
    <section className="gallery">
      <Link to="/accomodation" className="gallery__card">carte ici</Link>
      <div className="gallery__card">carte ici</div>
      <div className="gallery__card">carte ici</div>
      <div className="gallery__card">carte ici</div>
      <div className="gallery__card">carte ici</div>
      <div className="gallery__card">carte ici</div>
    </section>
  );
}

export default Gallery;
