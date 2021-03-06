import React from "react";

const CarouselFP = () => {
  return (
    <div>
      <div className="card">
        <img
          className="responsive-bg-img img-fluid card-img bg-brightness"
          src="https://images.unsplash.com/photo-1512058546418-8b59fef5dc6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1016&q=80"
          alt="backup background image"
        />
        <div className="card-img-overlay">
          <h4 className="card-text text-center pt-5">Welcome to</h4>

          <h1 className="card-text text-center">Rolling Wok</h1>
        </div>
      </div>
      <div
        id="carouselIndicators"
        className="carousel slide no-display"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselIndicators"
            data-slide-to="0"
            className="active"
          />
          <li data-target="#carouselIndicators" data-slide-to="1" />
          <li data-target="#carouselIndicators" data-slide-to="2" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1491961865842-98f7befd1a60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt="First slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="text-dark">Welcome to Rolling Wok</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1550303659-a777c03a27bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1485768071412-bded21c2be08?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default CarouselFP;
