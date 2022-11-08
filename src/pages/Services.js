import axios from "axios";
import React, { useEffect, useState } from "react";
import fetcher from "../api";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    /*  axios
      .get("http://localhost:5000/service")
      .then((res) => setServices(res.data)); */
    (async () => {
      const res = await fetcher.get("/service");
      setServices(res.data);
    })();
  }, []);
  return (
    <div>
      <h2>This is services</h2>
      <h2>This is services</h2>
      <h2>This is services</h2>
      <h2>This is services</h2>
      <h2>This is services</h2>
      <h2>This is services</h2>
    </div>
  );
};

export default Services;
