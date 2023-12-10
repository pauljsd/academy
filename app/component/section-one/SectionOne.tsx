import React from "react";
import Image from "next/image";

const SectionOne = () => {
  return (
    <div className="flex">
      <div className="flex">
        <div>
          <p>🙌Hello Freinds</p>
          <p>I Am Sofia And We Want To Start</p>
          <p>
            A <span>Web Design</span> Course Together.
          </p>
          <p>Do You Like It Too 😃?</p>
        </div>
        <div className="flex">
          <button>Start Course Now &gt; </button>
          <Image
            src="/img/booked.png"
            alt="booked Icon"
            width="205"
            height="108"
          />
        </div>
      </div>
      <div>
        <Image src="/img/image.png" alt="UIUX" width="747" height="658" />
      </div>
    </div>
  );
};

export default SectionOne;
