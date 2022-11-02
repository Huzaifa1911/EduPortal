import React from "react";
import "../../components/homeContent/videoAdDiv.css";

function VideoAdDiv() {
  return (
    <div className="videoAdDiv">
      <div className="videoDiv">
        {/* <iframe
          title="Mohamad Alaloush's Story"
          // allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen=""
          src="https://www.youtube.com/watch?v=pNx3In4UHs4"
          width="560"
          height="315"
          frameborder="0"
        ></iframe> */}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/pNx3In4UHs4"
          title="Edu platform trailer"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="content">
        <h2 className="heading">Transform your life through education</h2>
        <p className="about">
          Edu launched a new Course in software development. Do you want to
          join?
        </p>
      </div>
    </div>
  );
}

export default VideoAdDiv;
