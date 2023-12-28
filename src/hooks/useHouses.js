import { useEffect, useState } from "react";

const useHouses = () => {
  const [allHouses, setAllHouses] = useState([]);
  useEffect(() => {
    const fetchHouses = async () => {
      const rsp = await fetch("/houses.json");
      const houses = await rsp.json();
      setAllHouses(houses);
    };

    fetchHouses();
    //subscribe
    return () => {
      //unsubscribe
    };
  }, []);

  return allHouses;
};

export default useHouses;
