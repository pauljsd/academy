import React from "react";

const CoursesNav = () => {
  return (
    <div className="flex gap-9">
      <div>
        <h3>NEW COURSES (BOOKS)</h3>
      </div>
      <div>
        <ul className="flex gap-4">
          <li>
            <button>All Courses</button>
          </li>
          <li>
            <button>Design</button>
          </li>
          <li>
            <button>Development</button>
          </li>
          <li>
            <button>Photography</button>
          </li>
          <li>
            <button>Music</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CoursesNav;
