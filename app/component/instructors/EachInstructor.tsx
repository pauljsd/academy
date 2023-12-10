import React from "react";
import Image from "next/image";

const EachInstructor = ({ pics, name, role }) => {
  return (
    <div>
      <Image
        src={pics}
        alt="instructor"
        width="212"
        height="161"
        // height={height}
      />
      <div className="flex gap-4">
        <p>{name}</p>
        <p>{role}</p>
      </div>
    </div>
  );
};

export default EachInstructor;
