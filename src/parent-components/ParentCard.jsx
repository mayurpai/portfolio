import React from "react";
import styles from "../styles/Card.module.scss";
import Card from "@/components/Card";

export default function ParentCard() {
  return (
    <div className={styles.projects_card}>
      <Card
        id="01"
        title="Carbon Footprint Management"
        desc="Developed a framework to predict optimal air quality to reduce the carbon footprint of organizations, working as part of a 4-person team"
        tech={["Python", "Flask"]}
        link="https://github.com/varun-official/Carbon-footprint-management-system"
        web="#"
      ></Card>
      <Card
        id="02"
        title="Auto Rickshaw Fare Meter (A.F.M)"
        desc="Developed an Android application using Android Studio which is based over the usage of Google Maps API for those who wish to evade unreasonable fare price hikes"
        tech={["Android_Studio", "Java"]}
        link="https://github.com/mayurpai/Autorickshaw-Fare-Meter"
        web="#"
      ></Card>
      <Card
        id="03"
        title="Pharmacy Management System"
        desc="Incorporated features such as searching, ordering, deleting, modifying, printing receipts, and daily transaction summaries of medicine orders and customers"
        tech={["File_Structures"]}
        link="https://github.com/mayurpai/Pharmacy-Management-System"
        web="#"
      ></Card>
      <Card
        id="04"
        title="Arms And Ammunition"
        desc="Implemented an accurate real-time simulation of a military base in order to store and validate weapon and equipment information"
        tech={[
          "HTML5",
          "CSS3",
          "JavaScript",
          "Bootstrap",
          "Flask",
          "SQLAlchemy",
        ]}
        link="https://github.com/mayurpai/ArmsAndAmmunition"
        web="#"
      ></Card>
      <Card
        id="05"
        title="Engineering Calculator"
        desc="Provided engineering students with a dynamic, interactive, and responsive webpage that calculates their grade point averages for the semester and the year"
        tech={["HTML5", "CSS3", "JavaScript"]}
        link="https://github.com/mayurpai/Engineering-Calculator"
        web="https://mayurpai.github.io/Engineering-Calculator"
      ></Card>
      <Card
        id="06"
        title="Tu Phodega"
        desc="Designed and developed a website with Mobile Responsive User Experience to include notes, materials, and MQPs from all Engineering colleges in India"
        tech={["HTML5", "CSS3", "JavaScript"]}
        link="https://github.com/mayurpai/TuPhodega"
        web="https://mayurpai.github.io/TuPhodega"
      ></Card>
      <Card
        id="07"
        title="My Portfolio"
        desc="A fully responsive personal portfolio website was created and developed to reflect who I am, what I have accomplished, and what I seek to achieve"
        tech={["React"]}
        link="https://github.com/mayurpai/mayurpai.github.io"
        web="https://mayurpai.github.io/portfolio"
      ></Card>
    </div>
  );
}
