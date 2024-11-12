import React from "react";

const Works = () => {
  return (
    <div>
      <div className="container">
        <div className="row text-center my-2">
          <h1 className="howItsWork">How it works</h1>
        </div>

        <div className="row my-4">
          <div className="col-md-4   text-center">
            <div className="m-auto flowWork1  text-center">
              <img
                src="https://pictarize.com/static/how-it-works-upload-e36dfa599e2c9de94bcda674c6398384.png"
                alt=""
              />
              <h3 className="my-2">1 Upload</h3>
              <p>
                Upload any images of your choice, and make them the targets of
                the AR effects!
              </p>
            </div>
          </div>
          <div className="col-md-4   text-center">
            <div className="m-auto flowWork1">
              <img
                src="https://pictarize.com/static/how-it-works-build-4777fd5720e9143fc560b3ead3df53f9.png"
                alt=""
              />
              <h3 className="my-2">2. Build</h3>
              <p>
                Drag-n-drop AR contents in the online editor. What you see is
                what you get!
              </p>
            </div>
          </div>
          <div className="col-md-4   text-center">
            <div className="m-auto flowWork1">
              <img
                src="https://pictarize.com/static/how-it-works-publish-1609610b4984a7e83a37893c3f5f1b70.png"
                alt=""
              />
              <h3 className="my-2">3. Publish</h3>
              <p>
                Publish your app directly in the editor. A unique web URL will
                be generarted!
              </p>
            </div>
          </div>
        </div>
        <div className="row text-center">
          <p className="artticleHomeP my-2">
            Check out this <span className="articleHome">article</span> to learn
            how to do this!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Works;
