
import BoilerHeading from "@/common/BoilerHeading";
import Button from "@/components/Button";
import TagsCreator from "@/components/TagsCreator";
import About from "@/sections/About";
import styles from "@/styles/sections/Home.module.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
library.add(faMagnifyingGlass);

const heading = "Mayur Pai";

export default function Home() {
    return (
        <section className={styles.home_container} id="home">
            <div className={styles.home_body_container}>
                <BoilerHeading title={heading} header="h1" />
                <TagsCreator
                    tag="p"
                    style={{ marginLeft: "7.5rem" }}
                    bool={false}
                ></TagsCreator>
                <About page="Home" />
                <TagsCreator
                    tag="p"
                    style={{ marginLeft: "7.5rem" }}
                    bool={!false}
                ></TagsCreator>
                {/* <TagsCreator
                    tag="button"
                    style={{ marginLeft: "9rem" }}
                    bool={false}
                ></TagsCreator> */}
                {/* <div className={styles.icon_section_container}>
                    <Button buttonName="Stalk My Dev Resume" icon={faMagnifyingGlass} />
                    <Icon />
                </div> */}
                {/* <TagsCreator
                    tag="button"
                    style={{ marginLeft: "9rem" }}
                    bool={!false}
                ></TagsCreator> */}
            </div>
        </section>
    );
}
