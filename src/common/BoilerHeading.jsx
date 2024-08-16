import TagsCreator from "@/components/TagsCreator";
import "../app/globals.scss";
import { createAnimatedText } from "./Animation";
import ScrambleText from "@/components/ScrambleText";

export default function BoilerHeading({ title }) {
  return (
    <>
      <TagsCreator
        tag="h1"
        style={{ marginBottom: "-2rem", marginLeft: "6rem" }}
        bool={false}
      ></TagsCreator>
      <h1 className="main_heading_container">
        <ul>{createAnimatedText(title)}</ul>
      </h1>
      <TagsCreator
        tag="h1"
        style={{ marginTop: "-1rem", marginLeft: "6rem" }}
        bool={!false}
      ></TagsCreator>
    </>
  );
}
