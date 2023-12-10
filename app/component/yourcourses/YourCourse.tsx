import React from "react";
import Image from "next/image";
import YourCoursesNav from "./YourCoursesNav";
import Button from "../reusables/Button";
import OngoingCourse from "./OngoingCourse";

const YourCourse = () => {
  return (
    <div>
      <YourCoursesNav />
      <div>
        <div>
          <div className="flex">
            <Image
              src="/img/booked.png"
              alt="booked Icon"
              width="205"
              height="108"
            />
            <div>
              <h3>Google Ads Training 2021: Profit With Pay</h3>
              <div>
                <p>icon</p>
                <p>Lesson: 6</p>
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
              <h2>Points: 75/100</h2>
              <h2>Days: 56</h2>
            </div>
            <div>
              <div>
                <Image
                  src="/img/booked.png"
                  alt="booked Icon"
                  width="44"
                  height="44"
                />
                <div>
                  <h2>Jon Kantner</h2>
                  <h2>SEO</h2>
                </div>
              </div>
              <div>
                <Button>Let's Go &gt;</Button>
              </div>
            </div>
          </div>
        </div>
        <OngoingCourse
          pics="/img/booked.png"
          topic="ASO & Mobile App Marketting: Monetize You.."
          lesson="6"
          points="25"
          tutorName="Jon Kantner"
          role="Designer"
        />
      </div>
    </div>
  );
};

export default YourCourse;
