import axios from "axios";
import React, { useEffect, useState } from "react";
import { formatDate, predictRain } from "../functions/processData";
import PrintDetailedData from "./PrintDetailedData";

const PrintData = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState();
  const [showDetails, setShowDetails] = useState(false);
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.datos.gob.mx/v1/condiciones-atmosfericas")
      .then((response) => {
        const res = response.data.results;
        setData(res);
      });
  }, []);

  return showAll ? (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>City Id</th>
            <th>Name</th>
            <th>State</th>
            <th>Probability of Precip</th>
            <th>Relative Humidity</th>
            <th>Last Report Time</th>
            <th>Rain</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr>
                <td
                  onClick={() => {
                    console.log(item._id);
                    setId(item._id);
                    setShowDetails(true);
                    setShowAll(false);
                  }}
                >
                  {item._id}
                </td>
                <td>{item.cityid}</td>
                <td>{item.name}</td>
                <td>{item.state}</td>
                <td>{item.probabilityofprecip}</td>
                <td>{item.relativehumidity}</td>
                <td>{formatDate(item.lastreporttime)}</td>
                <td>
                  {predictRain(item.probabilityofprecip, item.relativehumidity)}
                </td>
              </tr>
            );
          })}
        </tbody>
        <tbody></tbody>
      </table>
    </div>
  ) : (
    <PrintDetailedData id={id} show={showDetails} />
  );
};

export default PrintData;
