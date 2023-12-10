import React from "react";
import Button from "../reusables/Button";
import Image from "next/image";
import EachInstructor from "./EachInstructor";
// import EachInstructor from "./EachInstructor";

const Instructors = () => {
  return (
    <div className="flex">
      <div>
        <h3>
          <span>Best</span> Instructors
        </h3>
        <p>
          At The Academy, We Strive To Bring Together The Best <br /> Professors
          For The Best Courses
        </p>
        <Button>All Instructors &gt;</Button>
      </div>
      {/* <div>
        <Image
          src="/img/instructor-one.png"
          alt="booked Icon"
          width="212"
          height="161"
        />
        <div className="flex gap-4">
          <p>Joe</p>
          <p>Designer</p>
        </div>
      </div> */}
      <EachInstructor
        name="Paul"
        role="Developer"
        pics={"/img/instructor-one.png"}
      />
      <EachInstructor
        name="Frank"
        role="Design"
        pics={"/img/instructor-two.png"}
      />
      <EachInstructor
        name="Prince"
        role="PM"
        pics={"/img/instructor-three.png"}
      />
      <EachInstructor
        name="Prince"
        role="PM"
        pics={"/img/instructor-four.png"}
      />
      <EachInstructor
        name="Prince"
        role="PM"
        pics={"/img/instructor-five.png"}
      />
      <EachInstructor
        name="Prince"
        role="PM"
        pics={"/img/instructor-six.png"}
      />
    </div>
  );
};

export default Instructors;
