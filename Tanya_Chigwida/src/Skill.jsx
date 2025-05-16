import React from "react";

export default function Skills() {
  return (
    <>
      <div id="Education">
        <div className="degree">
          <img
            width="64"
            height="64"
            src="https://img.icons8.com/nolan/64/student-female.png"
            alt="student-female"
          />
          <h1>University</h1>
          <p>
            <span>
              <b>
                IU International University of Applied Sciences (IU
                Internationale Hochschule)
              </b>
            </span>{" "}
            <br /> Bsc in Computer Science | (2024 Nov - 2027)
          </p>
          <br />
          <p>
            <span>
              <b>
                <p>University of South Africa Management</p>
              </b>
            </span>{" "}
            BCom in Human Resources | Graduate - 2022
          </p>
          <br />
        </div>

        <div className="courses">
          <img
            width="70"
            height="70"
            src="https://img.icons8.com/nolan/64/diploma.png"
            alt="diploma"
          />
          <h1>Short Courses</h1>
          <br />
          <p>Comptia A+ IT Certification(Current)</p>
          <p>Front- end Development Bootcamp:ALX Institute (2024)</p>
          <p>Introduction to Front-end Development : META(2024)</p>
          <p>Introduction to Back-end Development: META (2024)</p>
          <p>UX/UI for Beginners: Great Learning Academy(2024)</p>
          <p>Introduction to Coding: SheCodes (2024)</p>
        </div>
      </div>
    </>
  );
}
