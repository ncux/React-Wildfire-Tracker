import axios from 'axios';
import { useEffect, useState } from "react";
import { Map } from "./components/map/map";
import './App.css';
import Loading from "./components/loading/loading";

const NASA_EONET_API = `https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?api_key=${process.env.REACT_APP_NASA_API_KEY}`;

function App() {

  const [loading, setLoading] = useState(false);
  const [eventData, setEventData] = useState([]);

  const fetchEvents = async () => {
      try {
          setLoading(true);
          const { data } = await axios.get(NASA_EONET_API);
          setEventData(data['events']);
          setLoading(false);
      } catch (e) {
          setLoading(false);
          console.log(e);
      }
  };

  useEffect(() => fetchEvents(), []);

  return (
    <div className="container mx-auto mt-5">
        { loading ? (<Loading />) : (<Map events={ eventData } />) }
    </div>
  );

}

export default App;
