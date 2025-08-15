import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="container">
      <div className="row newsletter">
        <div className="col-12">
          <h2 className="pt-3">Subscribe to our Newsletter</h2>
          <div className="input-group mb-3 p-3 email-field">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Email"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-success"
              type="button"
              id="button-addon2"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
