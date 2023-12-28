import { useEffect, useMemo, useState } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from "./header";
import FeatureHouse from "./feature-house";
import HouseFilter from './house-filter';
import "./main-page.css";
import SearchResults from "../search-results";
import HouseFromQuery from "../house/HouseFromQuery";

function App() {
  const [allHouses, setAllHouses] = useState([]);
  useEffect(() => {
    const fetchHouses = async () => {
      const rsp = await fetch("/houses.json");
      const houses = await rsp.json();
      setAllHouses(houses);
    };

    fetchHouses();
  }, []);

  let featuredHouse = useMemo(() => {
    if (allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
  }, [allHouses]);

  return (
    <Router>
      <div className="container">
        <Header subtitle="Providing house all over the world"/>
        <HouseFilter allHouses={allHouses}/>
        <Switch>
          <Route path="/searchresults/:country">
            <SearchResults allHouses={allHouses}/>
          </Route>
          <Route exact path="/">
            <FeatureHouse house={featuredHouse}/>
          </Route>
          <Route path="/house/:id">
            <HouseFromQuery allHouses={allHouses}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
