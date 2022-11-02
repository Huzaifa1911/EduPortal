import React from "react";
import "./recommendedVideos.css";
import VideoCard from "./videoCard";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <VideoCard
        courseTitle={"Microsoft Excel - Excel from Beginner to Advanced"}
        imgSrc={
          "data:image/jpeg;base64,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"
        }
        instructor={"Kyle Pew, Office Newb LLC"}
        rating={4.6}
        noOfStudents={"(166,042)"}
        price={"₹8,640"}
      />
      <VideoCard
        courseTitle={"The Complete Digital Marketing Course - 12 Courses in 1"}
        imgSrc={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh3MsAdstmyEE7o2dffoQVBTRQrPO8BrLH9gMNFH1RZuDNziiMkqMmXDbMUomN17tQTzo&usqp=CAU"
        }
        instructor={"Rob Percival, Daragh Walsh, Codestars by Rob Percival"}
        rating={4.4}
        noOfStudents={"(116,637)"}
        price={"₹8,640"}
      />
      <VideoCard
        courseTitle={
          "iOS 13 & Swift 5 - The Complete iOS App Development Bootcamp"
        }
        imgSrc={
          "https://inetztech.com/assetstraining/images/courses/Inetz-ios-Course-Details.webp"
        }
        instructor={"Dr. Anglea Yu"}
        rating={4.8}
        noOfStudents={"(49,923)"}
        price={"₹8,960"}
      />
      <VideoCard
        courseTitle={
          "Cisco CCNA 200-301 – The Complete Guide to Getting Certified"
        }
        imgSrc={"https://i.ytimg.com/vi/AV3VKEz5LWo/maxresdefault.jpg"}
        instructor={"Neil Anderson"}
        rating={4.8}
        noOfStudents={"(25,489)"}
        price={"₹1,280"}
      />
      <VideoCard
        courseTitle={
          "Advanced CSS and Sass: Flexbox, Grid, Animations and More!"
        }
        imgSrc={
          "data:image/jpeg;base64,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"
        }
        instructor={"Jonas Schmedtmann"}
        rating={4.8}
        noOfStudents={"(25,064)"}
        price={"₹8,640"}
      />
    </div>
  );
}

export default RecommendedVideos;
