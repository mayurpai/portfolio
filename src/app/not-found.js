"use client"
import BoilerHeading from "@/common/BoilerHeading";
import TagsCreator from "@/components/TagsCreator";
import About from "@/sections/About";
import "./globals.scss";
import Image from "next/image"
import Button from "@/components/Button";

const heading = "404: Page Ghosted";

export default function NotFound() {

    return (
        <section className="not_found" id="not_found">
            <div className="not_found_body_container">
                <div className="heading_image">
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
                {/* <h1>Oops!</h1>
                <h2>Something went wrong...</h2>
                <p>But hey, enjoy this video instead!</p> */}
            </div>
        </section>
    );
}
