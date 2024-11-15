import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <section className="page_404 ">
      <div className="container">
        <div className="row m-0 p-0 g-0">
          <div className="col-sm-12 ">
            <div className="text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
              </div>

              <div className="contant_box_404">
                <h3 className="h2">Look like you're lost</h3>

                <p>the page you are looking for not avaible!</p>

                <Link to="/" className="button">
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
