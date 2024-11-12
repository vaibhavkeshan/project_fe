import React from "react";
import imageDashbopard from "../imageProcess/projectDashboard.png";
import imageUpgrade from "../imageProcess/upgradeProjects.png";
import imageScan from "../imageProcess/projectScan.png";

const Article = () => {
  return (
    <div>
      <div className="container">
        <div className="row my-2 w-75 m-auto">
          <h1 className="articleHeading">
            Beginner Guide: 10-Year-Olds Can Build a Web AR App. So do you!
          </h1>
        </div>
        <div className="row my-2">
          <div className="imgArticle1">
            <img
              src="https://www.mindar.org/content/images/size/w2000/2021/08/banner.jpeg"
              alt="art1"
              className="w-100"
            />
          </div>
        </div>
        <div className="row w-75 my-2 m-auto articleFContent">
          <p>
            This article is dedicated to help non technical people who want to
            dive into web AR, but don't know where to start! You should
            definitely read this if you fall into one of these categories:
          </p>
          <ol className="my-3">
            <li>
              You are a <b>graphic designer</b> who want to put new elements in
              your work.
            </li>
            <li>
              {" "}
              You are a <b>marketer</b> who need new ideas for your campaign.
            </li>
            <li>
              You are an <b>educator</b> who want to use AR to enhance the
              teaching experience.
            </li>
            <li>
              {" "}
              You are a <b>hobbyist</b> who just want to try something cool.
            </li>
          </ol>
        </div>

        <div className="row w-75 my-3 m-auto Augmented">
          <h1>Augmented Images</h1>

          <p className="my-2">
            There are many forms of AR. In this article, we focus on a specific
            type called Augmented Images. As the name suggested, it means adding
            virtual elements on top of images. What images, you asked? It can be
            anything like posters, books, cards, photos, product packages, etc.
            Look around you, it's everywhere!
          </p>
        </div>

        <div className="row w-75 my-3 m-auto Augmentedthegodspeedz">
          <h1>thegodspeedz</h1>

          <p className="my-2">
            <a href="https://ar-visual.vercel.app/">thegodspeedz</a> is a great
            tool to kickstart an augmented image project. It comes with an
            online editor where you can drag-n-drop to build AR effects. Once
            you are done, you can publish it directly. You don't need to install
            anything. All you need is a web browser. More importantly, it's
            completely free! You don't even need to pay a single buck to have
            you AR project posted online.
          </p>
        </div>

        <div className="row w-75 my-3 m-auto Augmentedthegodspeedz">
          <h1>Launch the Studio</h1>

          <p className="my-2">
            First of all, launch the studio.{" "}
            <a href="https://ar-visual.vercel.app/usrdashboard">
              https://ar-visual.vercel.app/usrdashboard
            </a>
          </p>
          <p className="my-2">
            <b> Create a new project</b>, and in this case a{" "}
            <b>Blank Project.</b>
          </p>
          <ol className="my-2 removeNumber">
            <li>
              1. Upload the <b>target image</b> for your <b>AR project</b>
            </li>
            <li>
              {" "}
              2. Upload the <b>video or content</b> you want to overlay on the
              target image.{" "}
            </li>
            <li>
              3. Click the <b>"Publish"</b> button to finalize your project.
            </li>
            <li> 4. You will be redirected to the project page.</li>
          </ol>

          <img src={imageDashbopard} alt="dashboard" />

          <ol className="my-3 removeNumber">
            <li className="mt-3">
              5.
              <b>Upgrade</b> your project to remove waterMark
            </li>
            <li>
              6. Click on the <b>"View"</b> icon to launch your project.
            </li>
          </ol>
          <img src={imageUpgrade} alt="dashboard" className="imageUpgrade" />

          <img src={imageScan} alt="dashboard" />
        </div>

        <div className="row w-75 my-3 m-auto augmented">
          <p className="my-5">
            Your app is now ready! You can now use your mobile phone to open
            this URL. Then look at the target image through the camera. Here is
            the end result.
          </p>
          <p>
            You can actually print out the image on paper if you want, or simply
            look at the image on your desktop screen. You can also try the
            published app I built here:{" "}
            <a href="https://ar-visual.vercel.app/">thegodspeedz</a>
            <br />
            To make it easier for you to try, scan below QR code to open the
            app, then look at the image on the right.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Article;
