import "./Jumbotron.css";

const Jumbotron = () => {
  return (
    <div className="p-5 mb-4 rounded-3">
      <div className="jumbotron-container py-5">
        <video autoPlay loop muted playsInline className="bg-video">
          <source src="/images/video.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
        <div className="jumbotron-content">
          <h1 className="display-5 fw-bold">Sensational Sandwiches</h1>
          <p className="col-md-8 fs-4 fw-bold">
            Expertly Selected, Proudly Delivered
          </p>
          <button
            className="btn bg-trasparent btn-lg border text-white"
            type="button"
          >
            Discover our ingredients
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
