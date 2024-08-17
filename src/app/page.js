import Home from "./Home/page";
import LafzonKaJadugar from "./Lafzon-Ka-Jadugar/page";
import "./globals.scss";

function Index() {
    const currentPage = "/";

    const renderPageComponent = () => {
        switch (currentPage) {
            case "/":
                return <Home />;
            case "/Lafzon-Ka-Jadugar":
                return <LafzonKaJadugar />;
            default:
                return null;
        }
    };

    return (
        <>
            {renderPageComponent()}
        </>
    );
}

export default Index;
