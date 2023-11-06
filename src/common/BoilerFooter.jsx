import TagsCreator from "@/components/TagsCreator";
import "../app/globals.scss";

export default function BoilerFooter() {
  return (
    <div className="boiler_footer">
      <TagsCreator
        tag="body"
        style={{ marginLeft: "3rem" }}
        bool={!false}
      ></TagsCreator>
      <TagsCreator
        tag="html"
        style={{ marginLeft: "1.5rem", zIndex: "999" }}
        bool={!false}
      ></TagsCreator>
    </div>
  );
}
