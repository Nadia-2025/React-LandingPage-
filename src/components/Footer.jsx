import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="mt-5">
        <div className="container pt-5">
          <div className="row">
            <div className="col-3 text-start">
              <span className="fs-3 fw-bold">
                <i>Bread & Beyond</i>
              </span>
            </div>
            <div className="col-3 fs-6 text-start">
              <h4>Navigate</h4>
              <ul className="list-unstyled list">
                <li>
                  <a className="text-decoration-none" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    Recipies
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    Chefs
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    Restaurants
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    Ingredients
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-3 fs-6 text-start">
              <h4>Information</h4>
              <ul className="list-unstyled list">
                <li>
                  <a className="text-decoration-none" href="#">
                    Contact
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    Work with us
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    Insights & consultancy
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    FAQs
                  </a>
                </li>
                <li className="text-decoration-none">
                  <a className="text-decoration-none" href="#">
                    About us
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    Jobs
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    Terms and Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-3 fs-6 text-start">
              <h4>Follow Us</h4>
              <div className="media-section d-flex justify-content-start">
                <i className="fa-brands fa-facebook mt-3 me-2 fs-3"></i>
                <i className="fa-brands fa-instagram mt-3 me-2 fs-3"></i>
                <i className="fa-brands fa-youtube mt-3 me-2 fs-3"></i>
                <i className="fa-brands fa-x-twitter mt-3 me-2 fs-3"></i>
                <i className="fa-brands fa-linkedin mt-3 me-2 fs-3"></i>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center fs-6">
              <hr />
              <p>
                Copyright <i className="fa-regular fa-copyright"></i> Bread &
                Beyond 2025
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
