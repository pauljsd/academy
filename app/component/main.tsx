"use client";
import React from "react";
import Navbar from "./nav/navbar";
import Tabs from "./tabs/Tabs";
import SectionOne from "./section-one/SectionOne";
import SectionTwo from "./section-two/SectionTwo";
import Courses from "./courses/Courses";
import Instructors from "./instructors/Instructors";
import YourCourse from "./yourcourses/YourCourse";
import NewsLetter from "./newletter/NewsLetter";
import TopCourses from "./courses/TopCourses";

const main = () => {
  return (
    <>
      <Navbar />
      <Tabs />
      <SectionOne />
      <SectionTwo />
      {/* <Courses /> */}
      <Instructors />
      <YourCourse />
      <NewsLetter />
      <TopCourses />
      <div>main</div>
    </>
  );
};

export default main;
