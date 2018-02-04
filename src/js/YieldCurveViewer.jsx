import React from 'react';
import { render } from 'react-dom';
import Chart from 'chart.js';  //TODO move this to wherever the Chart code is

const chartColors = {
  blue: 'rgb(54, 162, 235)',
  red: 'rgb(255, 99, 132)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  orange: 'rgb(255, 159, 64)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)'
};
const terms = ['1M', '3M', '6M', '1Y', '2Y', '3Y', '5Y', '7Y', '10Y', '20Y', '30Y']
var config = {
  type: 'line',
  data: {
    labels: terms,
    datasets: []
  },
  options: {
    responsive: true,
    title:{
      display:true,
      // text:'US Treasuries Yield Curve',
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Term'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Yield (%)'
        }
      }]
    }
  },
};
// const initialData = {"id":null,"treasury_datum_id":7029,"yield_curve_date":"2018-01-31","yield_1m":1.43,"yield_3m":1.46,"yield_6m":1.66,"yield_1y":1.9,"yield_2y":2.14,"yield_3y":2.29,"yield_5y":2.52,"yield_7y":2.66,"yield_10y":2.72,"yield_20y":2.83,"yield_30y":2.95}

class YieldCurveViewer extends React.Component {
  componentDidMount() {
    const canvas = document.getElementById("chartTreasuryYieldCurve").getContext("2d");
    window.chartTreasuryYieldCurve = new Chart(canvas, config);
  }

  render() {
    return(
      <div className="yield-curve-viewer">
        <div className="row">
          <div className="offset-md-1 col-md-10 chart-navigation" id="#chart-navigation">
            <div className="action-button date-navigate-backward">
              <i className="fa fa-lg fa-angle-left" aria-hidden="true"></i>
            </div>

            <input type="text" id="text-date-navigation" value="2017-11-10" />

            <div className="action-button date-navigate-forward">
              <i className="fa fa-lg fa-angle-right" aria-hidden="true"></i>
            </div>

            <div className="action-button stick-current-graph">
              <i className="fa fa-lg fa-paperclip" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="offset-md-1 col-md-10 interest-rate-chart center">
            <div id="chart-canvas-horizontal">
              <div id="chart-canvas">
                <canvas id="chartTreasuryYieldCurve"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

require('./chart_actions.js');
export default YieldCurveViewer;