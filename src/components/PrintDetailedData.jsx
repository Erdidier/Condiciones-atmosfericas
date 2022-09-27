import axios from "axios";
import React, { useEffect, useState } from "react";
import { formatDate, predictRain } from "../functions/processData";

const PrintDetailedData = (id, show) => {
  const [cityData, setCityData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.datos.gob.mx/v1/condiciones-atmosfericas?_id=${id.id}`)
      .then((response) => {
        const res = response.data.results;
        setCityData(res);
      });
  }, [id]);

  console.log(id);

  return show ? (
    <div>
      {cityData.map((item) => {
        return (
          <ul>
            <li>_id: {item._id}</li>
            <li>City Id: {item.cityid}</li>
            <li>Valid Date in UTC: {item.validdateutc}</li>
            <li>Wind Direction: {item.winddirectioncardinal}</li>
            <li>Probability of Precipitation: {item.probabilityofprecip}</li>
            <li>Relative Humidity: {item.relativehumidity}</li>
            <li>Name: {item.name}</li>
            {/* <li>Date of Insert: {item.date - insert}</li> */}
            <li>Longitude: {item.longitude}</li>
            <li>State: {item.state}</li>
            <li>Last Report Time: {formatDate(item.lastreporttime)}</li>
            <li>Sky Description: {item.skydescriptionlong}</li>
            <li>State Abrebiation: {item.stateabbr}</li>
            <li>Temperature in C°: {item.tempc}</li>
            <li>Latitude: {item.latitude}</li>
            <li>Icon Code: {item.iconcode}</li>
            <li>Wind Speed in km: {item.windspeedkm}</li>
            <li>
              {predictRain(item.probabilityofprecip, item.relativehumidity)}
            </li>
          </ul>
        );
      })}
    </div>
  ) : null;
};

export default PrintDetailedData;
