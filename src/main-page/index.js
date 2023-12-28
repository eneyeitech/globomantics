import { useEffect, useMemo, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./header";
import FeatureHouse from "./feature-house";
import HouseFilter from "./house-filter";
import "./main-page.css";
import SearchResults from "../search-results";
import HouseFromQuery from "../house/HouseFromQuery";
import useHouses from "../hooks/useHouses";
import useFeaturedHouse from "../hooks/useFeaturedHouse";

function App() {
  const allHouses = useHouses();
  const featuredHouse = useFeaturedHouse(allHouses);
  

  const header = <Header subtitle="Providing house all over the world" />;

  return (
    <Router>
      <div className="container">
        {header}
        <HouseFilter allHouses={allHouses} />
        <Switch>
          <Route path="/searchresults/:country">
            <SearchResults allHouses={allHouses} />
          </Route>
          <Route exact path="/">
            <FeatureHouse house={featuredHouse} />
          </Route>
          <Route path="/house/:id">
            <HouseFromQuery allHouses={allHouses} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
