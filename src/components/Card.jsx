import Cards from "../data/Cardsdata";
import "./Card.css";

const Card = () => {
  return (
    <div className="container">
      <div className="row">
        <h1 className="mb-5">Latest Recipes</h1>
        {Cards.map(({ image, title, description }, index) => (
          <div className="col-md-3" key={index}>
            <div className="card mb-5" style={{ width: "100%" }}>
              <img src={image} className="card-img-top" alt="sandwich" />
              <div className="card-body text-start">
                <h5 className="card-title">{title}</h5>
                <p className="card-text texto-corto">{description}</p>
                <a href="#" className="btn btn-success">
                  Read more!
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Card;
