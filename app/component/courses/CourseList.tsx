import React from "react";
import Image from "next/image";
import Button from "../reusables/Button";

const CourseList = ({ course }) => {
  //   const { title, author } = course;
  return (
    <div>
      <Image src="/img/booked.png" alt="booked Icon" width="205" height="108" />

      <Button>Start Course &gt;</Button>
    </div>
  );
};

export default CourseList;
