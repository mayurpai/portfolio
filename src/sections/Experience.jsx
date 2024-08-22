import BoilerHeading from "@/common/BoilerHeading";
import Button from "@/components/Button";
import ExperienceCard from "@/components/ExperienceCard";
import styles from "@/styles/sections/Experience.module.scss";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const heading = "Experience";



export default function Experience() {
    return (
        <section className={styles.experience_conatiner} id="experience">
            <div className={styles.experience_body_container}>
                <BoilerHeading title={heading} header="h2" />
                <div className={styles.experience_section_container}>
                    <ExperienceCard />
                </div>
                <div className={styles.experience_resume}>
                    <Button buttonName="Stalk My Dev Resume" icon={faMagnifyingGlass} />
                </div>
            </div>
        </section>
    );
}
