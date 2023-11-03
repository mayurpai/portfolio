import Navigation from "../components/Navigation";
import Home from "./Home/page";
import "./globals.scss";

export default function Index() {
  return (
    <div className="main_app_container">
      <Navigation />
      <Home />
    </div>
  );
}
