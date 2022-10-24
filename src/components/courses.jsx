import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <>
      <Link to="/">
        <Button>Home</Button>
      </Link>
      <h1>THIS IS COURSES PAGE</h1>
    </>
  );
};
export default Courses;
