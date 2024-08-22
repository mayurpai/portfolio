"use client"
import BoilerHeading from "@/common/BoilerHeading";
import TagsCreator from "@/components/TagsCreator";
import About from "@/sections/About";
import "./globals.scss";

const heading = "404: Page Ghosted";

export default function NotFound() {

    return (
        <section className="not_found" id="not_found">
            <div className="not_found_body_container">
                <div className="heading">
                    <BoilerHeading title={heading} header="h1" />
                </div>
                <TagsCreator
                    tag="p"
                    style={{ marginLeft: "7.5rem" }}
                    bool={false}
                ></TagsCreator>
                <About page="Not Found" />
                <TagsCreator
                    tag="p"
                    style={{ marginLeft: "7.5rem" }}
                    bool={!false}
                ></TagsCreator>
            </div>
        </section>
    );
}
