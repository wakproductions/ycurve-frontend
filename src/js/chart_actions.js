createStateFromAPIResponse = (api_response) => {

}


setDateNavigationText = function(text) {
  $('input#text-date-navigation').val(text)
}

selectedDate = function() {
  return new Date($('input#text-date-navigation').val());
}

addData = function(yield_curve_date, values) {
  var newDataset = {
    label: "As of " + yield_curve_date,
    backgroundColor: nextChartColor(config.data.datasets.length + 1),
    borderColor: nextChartColor(config.data.datasets.length + 1),
    data: values,
    fill: false,
  };

  config.data.datasets.push(newDataset);
  window.chartTreasuryYieldCurve.update();
}

// formatChartDataFromAPIResponse() = function(api_data) {
//   sDate = formatDate(new Date(Date.parse(data[0]['yield_curve_date'].replace(/-/g, '/') + " GMT-0400 (EDT)")))
//     [
//     parseFloat(data[0]['yield_1m']),
//       parseFloat(data[0]['yield_3m']),
//       parseFloat(data[0]['yield_6m']),
//       parseFloat(data[0]['yield_1y']),
//       parseFloat(data[0]['yield_2y']),
//       parseFloat(data[0]['yield_3y']),
//       parseFloat(data[0]['yield_5y']),
//       parseFloat(data[0]['yield_7y']),
//       parseFloat(data[0]['yield_10y']),
//       parseFloat(data[0]['yield_20y']),
//       parseFloat(data[0]['yield_30y']),
//     ]
// }

removeTopDataset = function() {
  config.data.datasets.pop();
  window.chartTreasuryYieldCurve.update();
}

formatDate = function(date, format) {
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  var pad = "00";

  if(format=='YYYYMMDD') {
    return year + pad.substring(0, pad.length - month.toString().length) + month + pad.substring(0, pad.length - day.toString().length) + day;
  } else {
    return month + '/' + day + '/' + year;
  };
}

fetchData = function(as_of_date, replace=false, offset=0) {
  if(as_of_date==null) as_of_date = new Date();

  $.get('http://96.40.81.149:8030/api/v1/yield_curve_snapshot', {date: formatDate(as_of_date, 'YYYYMMDD'), offset: offset}, function(data) {
    console.log(data);
    if(replace) {
      removeTopDataset();
    };
    sDate = formatDate(new Date(Date.parse(data[0]['yield_curve_date'].replace(/-/g, '/') + " GMT-0400 (EDT)")))
    addData(
      sDate,
      [
        parseFloat(data[0]['yield_1m']),
        parseFloat(data[0]['yield_3m']),
        parseFloat(data[0]['yield_6m']),
        parseFloat(data[0]['yield_1y']),
        parseFloat(data[0]['yield_2y']),
        parseFloat(data[0]['yield_3y']),
        parseFloat(data[0]['yield_5y']),
        parseFloat(data[0]['yield_7y']),
        parseFloat(data[0]['yield_10y']),
        parseFloat(data[0]['yield_20y']),
        parseFloat(data[0]['yield_30y']),
      ]
    );
    setDateNavigationText(sDate);
  });
}

nextChartColor = function(datasetnum) {
  chartColors = Object.values(window.chartColors);
  return chartColors[datasetnum % chartColors.length - 1];
};

// window.onload = function() {
//   var ctx = document.getElementById("chartTreasuryYieldCurve").getContext("2d");
//   window.chartTreasuryYieldCurve = new Chart(ctx, config);
//   fetchData();
// };

// $("#text-date-navigation").datepicker({
//   onSelect: function(dateText, inst) {
//     var date = new Date($(this).val());
//     fetchData(date, true)
//   }
// });

$("#date-navigate-backward").click(function() {
    fetchData(new Date(selectedDate()), true, -1);
  }
)

$("#date-navigate-forward").click(function() {
    fetchData(new Date(selectedDate()), true, 1);
  }
)

$("#stick-current-graph").click(function() {
    fetchData(new Date(selectedDate()), false);
  }
)
