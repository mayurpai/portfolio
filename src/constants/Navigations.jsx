
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHatWizard, faHouse } from "@fortawesome/free-solid-svg-icons";
library.add(faHouse, faHatWizard);

export const Navigations = [
    {
        path: "/",
        icon: faHouse,
        title: "Home",
        color: "#09fdd9",
    },
    {
        path: "/Lafzon-Ka-Jadugar",
        icon: faHatWizard,
        title: "Poetry",
        color: "#f6cd29",
    }
]
