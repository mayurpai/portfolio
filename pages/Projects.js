import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Cards from "../components/Cards";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Mayur Pai | Projects</title>
        <link rel="icon" href="../mayur_pai.ico" type="image/x-icon" />
      </Head>
      <section className={styles.projects} id="projects">
        <div className={styles.big_heading}>Projects</div>
        <div className={styles.page}>
          <div className={styles.html_body_h1}>
            <span> &lt;h1&gt; </span>
          </div>
          <h1 className={styles.header_font}>
            <ul>
              <li>P</li>
              <li>r</li>
              <li>o</li>
              <li>j</li>
              <li>e</li>
              <li>c</li>
              <li>t</li>
              <li>s</li>
            </ul>
          </h1>
          <div className={styles.html_h1}>
            <span> &lt;/h1&gt;</span>
          </div>

          <div className={styles.projects_card}>
            <Cards
              id="01"
              title="Carbon Footprint Management"
              desc="Developed a framework to predict optimal air quality to reduce the carbon footprint of organizations, working as part of a 4-person team"
              link="https://github.com/varun-official/Carbon-footprint-management-system"
            ></Cards>
            <Cards
              id="02"
              title="Auto Rickshaw Fare Meter (A.F.M)"
              desc="Developed an Android application using Android Studio which is based over the usage of Google Maps API for those who wish to evade unreasonable fare price hikes"
              link="https://github.com/mayurpai/Autorickshaw-Fare-Meter"
            ></Cards>
            <Cards
              id="03"
              title="Pharmacy Management System"
              desc="Incorporated features such as searching, ordering, deleting, modifying, printing receipts, and daily transaction summaries of medicine orders and customers"
              link="https://github.com/mayurpai/Pharmacy-Management-System"
            ></Cards>
            <Cards
              id="04"
              title="Arms And Ammunition"
              desc="Implemented an accurate real-time simulation of a military base in order to store and validate weapon and equipment information"
              link="https://github.com/mayurpai/ArmsAndAmmunition"
            ></Cards>
            <Cards
              id="05"
              title="Engineering Calculator"
              desc="Provided engineering students with a dynamic, interactive, and responsive webpage that calculates their grade point averages for the semester and the year"
              link="https://github.com/mayurpai/Engineering-Calculator"
            ></Cards>
            <Cards
              id="06"
              title="Tu Phodega"
              desc="Designed and developed a website with Mobile Responsive User Experience to include notes, materials, and MQPs from all Engineering colleges in India"
              link="https://github.com/mayurpai/TuPhodega"
            ></Cards>
            <Cards
              id="07"
              title="My Portfolio"
              desc="A fully responsive personal portfolio website was created and developed to reflect who I am, what I have accomplished, and what I seek to achieve"
              link="https://github.com/mayurpai/mayurpai.github.io"
            ></Cards>
          </div>
        </div>
      </section>
    </>
  );
}
