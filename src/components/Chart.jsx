import React from 'react'
import { Doughnut } from "react-chartjs-2";
import data from '../mockData/chart';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

function Chart() {
  ChartJS.register(ArcElement, Tooltip, Legend);
  return (
    <div style={{width:500,height:500}}>
      <Doughnut data={data} />
    </div>
  )
}

export default Chart