require('jquery-ui');
import React from 'react';
import YieldCurveViewer from './YieldCurveViewer';

const YieldCurveChartPage = () => (
  <div className="yield-curve-chart-page">
    <h1 className="center">US Treasuries Yield Curve</h1>
    <div className="container">

      <YieldCurveViewer/>

      <div className="row">
        <div className="col-lg-12 center">
          For an explanation, see <a href="http://www.investopedia.com/terms/t/termstructure.asp" target="_blank">'Term Structure of Interest Rates'</a>
        </div>
      </div>

      <div className="row social-media-box">
        <div className="offset-md-1 col-md-5 email-contact-link">
          <a href="mailto:wak@wakproductions.com">Contact</a>
        </div>

        <div className="col-md-5 social-media-buttons">
        </div>
      </div>
    </div>
  </div>
)


// require('./chart_utils.js');

export default YieldCurveChartPage;
