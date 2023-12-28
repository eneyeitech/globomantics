
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./header";
import FeatureHouse from "./feature-house";
import HouseFilter from "./house-filter";
import "./main-page.css";
import SearchResults from "../search-results";
import HouseFromQuery from "../house/HouseFromQuery";
import useHouses from "../hooks/useHouses";
import useFeaturedHouse from "../hooks/useFeaturedHouse";
import HousesContext from "../context/housesContext";
function App() {
  const allHouses = useHouses();
  const featuredHouse = useFeaturedHouse(allHouses);
  

  const header = <Header subtitle="Providing house all over the world" />;

  return (
    <Router>
      <HousesContext.Provider value={allHouses}>
      <div className="container">
        {header}
        <HouseFilter />
        <Switch>
          <Route path="/searchresults/:country">
            <SearchResults />
          </Route>
          <Route exact path="/">
            <FeatureHouse house={featuredHouse} />
          </Route>
          <Route path="/house/:id">
            <HouseFromQuery />
          </Route>
        </Switch>
      </div>
      </HousesContext.Provider>
    </Router>
  );
}

export default App;
