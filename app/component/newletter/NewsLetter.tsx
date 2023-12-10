import React from "react";
import Button from "../reusables/Button";

const NewsLetter = () => {
  return (
    <div>
      <h2>
        Find Out About The Latest Courses With The <br /> <span>Academy</span>{" "}
        Newsletter
      </h2>
      <input type="text" placeholder="Email Address" />
      <Button>SUBMIT</Button>
    </div>
  );
};

export default NewsLetter;
