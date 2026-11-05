import TagsCreator from "@/components/TagsCreator";
import "../app/globals.scss";

export default function BoilerHeader() {
  return (
    <div className="boiler_header">
      <TagsCreator
        tag="!DOCTYPE html"
        style={{ marginLeft: "1.5rem" }}
        bool={false}
      ></TagsCreator>
      <TagsCreator
        tag='html lang="en"'
        style={{ marginLeft: "1.5rem" }}
        bool={false}
        delay={0.15}
      ></TagsCreator>
      <TagsCreator
        tag="body"
        style={{ marginLeft: "3rem" }}
        bool={false}
        delay={0.3}
      ></TagsCreator>
    </div>
  );
}
