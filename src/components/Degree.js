// Degree.js
import React from "react";
import Card from "react-bootstrap/Card";
import "../style/Education.css"; // Create a corresponding CSS file for styling

const Degree = ({ title, course, institution, year }) => {
  return (
    <Card variant="dark"  border="dark" className="degree mb-2">
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Subtitle>{course}</Card.Subtitle>
        <Card.Text>{institution}</Card.Text>
        <Card.Text className="mb-2">{year}</Card.Text>
        <Card.Text></Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Degree;
