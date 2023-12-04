import React from "react";
import Degree from "../components/Degree";


const degrees = [
  {
    title: "Master of Technology (M.Tech)",
    course: 'Computer Science and Engineering, Information Security',
    institution: "National Institute of Technology,Surathkal, Karnataka",
    year: '2022',

  },
  {
    title: "Bachelor of Technology (B.Tech)",
    course: 'Computer Science and Engineering',
    institution: "National Institute of Technology, Manipur",
    year: '2019'
  },
  {
    title: `Pre University  |  High School`,
    course: 'Science',
    institution: "Jawahar Navodaya Vidyalaya, Ukhrul",
    year: '2006-2013'
  },
]



function Education() {
  return (
    <section id ="education" className="education">
      {degrees.map((degree) =>(
        <div key={degree.title} className="degrees">
        <Degree
          title={degree.title}
          course = {degree.course}
          institution={degree.institution}
          year={degree.year}
        />
      </div>

      ))}
      
    </section>
  );
}

export default Education;
