import React from "react";
import Image from "next/image";
import Button from "../reusables/Button";

const OngoingCourse = ({ pics, topic, lesson, points, tutorName, role }) => {
  return (
    <div className="flex">
      <Image src="/img/booked.png" alt="booked Icon" width="205" height="108" />
      <div>
        <h3>{topic}</h3>
        <div>
          <p>icon</p>
          <p>Lesson: {lesson}</p>
        </div>
        <div>
          <p>icon</p>
          <p>Student: 198</p>
        </div>
        <div>
          <p>icon</p>
          <p>Average</p>
        </div>
      </div>
      <div>
        <h2>Points: {points}/100</h2>
        <h2>Days: 56</h2>
      </div>
      <div>
        <div>
          <Image src={pics} alt="booked Icon" width="44" height="44" />
          <div>
            <h2>{tutorName}</h2>
            <h2>{role}</h2>
          </div>
        </div>
        <div>
          <Button>Let's Go &gt;</Button>
        </div>
      </div>
    </div>
  );
};

export default OngoingCourse;
