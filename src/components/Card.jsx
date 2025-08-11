import Cards from "../data/Cardsdata";

const Card = () => {
  return (
    <div className="container">
      <div className="row">
        {Cards.map(({ image, title, description }, index) => (
          <div className="col-md-3" key={index}>
            <div className="card" style={{ width: "100%" }}>
              <img src={image} className="card-img-top" alt="sandwich" />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">
                  Find out more!
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
