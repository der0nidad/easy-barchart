import React from "react";
import "./App.css";
import BarChart from "./components/BarChart/BarChart";

const series = [
  {
    value: 12,
  },
  {
    value: 85,
  },
  {
    value: 129,
  },
  {
    value: 6,
  },
  {
    value: 78,
  },
];
function App() {
  return (
    <div className="App">
      <BarChart series={series} />
    </div>
  );
}

export default App;
