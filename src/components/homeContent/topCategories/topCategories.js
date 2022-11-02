import React from "react";
import "./topCategories.css";
import CategoryCard from "./categoryCard";

function TopCategories() {
  return (
    <div className="topCategories">
      <h2 className="categoryHeading">Top Categories</h2>
      <div className="categories">
        <CategoryCard
          imgSrc={
            "https://s.udemycdn.com/home/top-categories/lohp-category-design.jpg"
          }
          title={"Maths"}
        />
        <CategoryCard
          imgSrc={
            "https://s.udemycdn.com/home/top-categories/lohp-category-development.jpg"
          }
          title={"Statistics"}
        />
        <CategoryCard
          imgSrc={
            "https://s.udemycdn.com/home/top-categories/lohp-category-marketing.jpg"
          }
          title={"Economics"}
        />
        <CategoryCard
          imgSrc={
            "https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software.jpg"
          }
          title={"Social Sciences"}
        />
        {/* <CategoryCard
          imgSrc={
            "https://s.udemycdn.com/home/top-categories/lohp-category-personal-development.jpg"
          }
          title={"Personal Development"}
        />
        <CategoryCard
          imgSrc={
            "https://s.udemycdn.com/home/top-categories/lohp-category-business.jpg"
          }
          title={"Business"}
        />
        <CategoryCard
          imgSrc={
            "https://s.udemycdn.com/home/top-categories/lohp-category-photography.jpg"
          }
          title={"Photography"}
        />
        <CategoryCard
          imgSrc={
            "https://s.udemycdn.com/home/top-categories/lohp-category-music.jpg"
          }
          title={"Music"}
        /> */}
      </div>
    </div>
  );
}

export default TopCategories;
