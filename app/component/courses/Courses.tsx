"use clients";

import React, { useEffect, useState } from "react";
import CoursesNav from "./CoursesNav";
import CourseList from "./CourseList";

interface Courses {
  id: number;
  title: string;
  author: string;
  publication_year: number;
  genre: [];
  description: string;
  cover_image: string;
}

const Courses = () => {
  const [courses, setCourses] = useState<Courses[]>([]);

  async function getCourses() {
    const res = await fetch(`https://freetestapi.com/api/v1/books`);
    const fetchedCourses: Courses[] = await res.json();
    setCourses(fetchedCourses);
    console.log(fetchedCourses);
  }

  useEffect(function () {
    getCourses();
  }, []);

  return (
    <>
      <CoursesNav />
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <CourseList course={course} />
          </li>
        ))}
      </ul>
      {/* <CourseList courses={courses} /> */}
    </>
  );
};

export default Courses;
