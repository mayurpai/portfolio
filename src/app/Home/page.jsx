"use client";
import BoilerHeading from "@/common/BoilerHeading";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import TagsCreator from "@/components/TagsCreator";
import About from "@/sections/About";
import Project from "@/sections/Project";
import Skills from "@/sections/Skills";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/pages/Home.module.scss";

library.add(faMagnifyingGlass);

const heading = "Mayur Pai";

export default function Home() {
    return (
        <div>
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
                    <TagsCreator
                        tag="a"
                        style={{ marginLeft: "9rem" }}
                        bool={false}
                    ></TagsCreator>
                    <div className={styles.icon_section_container}>
                        <Icon />
                    </div>
                    <TagsCreator
                        tag="a"
                        style={{ marginLeft: "9rem" }}
                        bool={!false}
                    ></TagsCreator>
                </div>
                <Project />
                <Skills />
                <Button buttonName="Stalk My Dev Resume" icon={faMagnifyingGlass} />
            </section>
        </div>
    );
}
