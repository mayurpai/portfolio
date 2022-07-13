import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../components/contact-form";

export default function Contact() {
  return (
    <>
      <section className={styles.contact_me} id="contact">
        <div className={styles.big_heading}>Contact Me</div>
        <div className={styles.page}>
          <div className={styles.html_body_h1}>
            <span> &lt;h1&gt; </span>
          </div>
          <h1 className={styles.header_font}>
            <ul>
              <li>C</li>
              <li>o</li>
              <li>n</li>
              <li>t</li>
              <li>a</li>
              <li>c</li>
              <li>t</li>
              <li>&nbsp;</li>
              <li>M</li>
              <li>e</li>
            </ul>
          </h1>
          <div className={styles.html_h1}>
            <span> &lt;/h1&gt;</span>
          </div>
          <div className={styles.html_body_p}>
            <span> &lt;p&gt; </span>
          </div>
          <p className={styles.fp}>
            <br />
            I'm looking for freelance opportunities, particularly ambitious or
            large projects. Feel free to use the form for any other request or
            question you may have. <br />
            <br />
            It's always a pleasure to assist.
          </p>
          <div className={styles.html_body_pc}>
            <span> &lt;p/&gt; </span>
          </div>
          <div className={styles.contact_container}>
            <ContactForm />
          </div>
          <div className={styles.html_body_html}>
            <span>&lt;/body&gt; </span>
            <br />
            <span>&lt;/html&gt; </span>
          </div>
        </div>
      </section>
    </>
  );
}
