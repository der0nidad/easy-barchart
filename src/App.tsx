import React from "react";
import "./App.css";
import BarChart from "./components/BarChart/BarChart";
import { series, seriesLong } from "./mockStore/mockStore";

function App() {
  return (
    <div className="App">
      <div className="chart">
        <BarChart series={series} />
      </div>
      <div className="chart">
        <BarChart series={[]} />
      </div>
      <div className="chart">
        <BarChart series={seriesLong} />
      </div>
    </div>
  );
}

export default App;
