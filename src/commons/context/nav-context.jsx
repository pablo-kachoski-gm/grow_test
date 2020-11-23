import { createContext } from "react";

const NavContext = createContext({
  navigationData: { selectedPlanet: {}, selectedResident: {} },
  setNavigationData: () => {},
});
export default NavContext;
