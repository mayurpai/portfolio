import { PT_Mono } from "next/font/google";
import styles from "../styles/pages/Home.module.scss";
import ScrambleText from "@/components/ScrambleText";
import TypingEffect from "@/components/TypingEffect";

const pt_mono = PT_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const aboutText = `
 I'm a web wizard and coding aficionado, always on a quest to conquer the wildest realms of programming. Cracking complex challenges and blazing new trails is my forte. Teaching fuels my passion and keeps my skills razor-sharp and my mind always buzzing. <br/> <br/> Armed with a Bachelor's in Information Science from <span style="font-size: 1.5rem; font-family: Coolvetica Rg;">Sahyadri College of Engineering and Management, Mangalore</span>, my credentials are as next-level as my tech game. I don't just keep up with trends—I set them! <br/> <br/> Currently, I'm architecting the next wave of generative AI innovations at <span style="font-size: 1.5rem; font-family: Coolvetica Rg;">GalaxE. Solutions an Endava Company. </span> <br/> <br/> My love affair with computers ignited early and it's still blazing strong. Equipped with a powerhouse toolkit of languages, algorithms, and leadership flair, I'm here to make waves and build legacies.  There's always more to conquer, more bugs to squash, and more groundbreaking projects to craft. Let's crank up the tech magic to eleven!
`;


export default function About() {
  return (
    <div className={styles.about_section_container}>
      <div
        className={`${styles.about_section_body_container} ${pt_mono.className}`}
      >
        <TypingEffect htmlString={aboutText} typingSpeed={0} />
        {/* <ScrambleText htmlString={aboutText} duration={1000} slowMotionFactor={50} /> */}
      </div>
    </div>
  );
}
