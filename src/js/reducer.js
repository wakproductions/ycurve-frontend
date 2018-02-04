import { createStateFromAPIResponse } from './chart_actions';

const SAMPLE_API_RESPONSE = {
  "id":null,
  "treasury_datum_id":7029,
  "yield_curve_date":"2018-01-31",
  "yield_1m":1.43,
  "yield_3m":1.46,
  "yield_6m":1.66,
  "yield_1y":1.9,
  "yield_2y":2.14,
  "yield_3y":2.29,
  "yield_5y":2.52,
  "yield_7y":2.66,
  "yield_10y":2.72,
  "yield_20y":2.83,
  "yield_30y":2.95
}

const INITIAL_STATE = {
  chartData: createStateFromAPIResponse(SAMPLE_API_RESPONSE),
  pinLast: false  // We are kinda violating Redux by leaving some state data in the chart
};


function reducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'UPDATE_CHART_DATA':
      return updateChartData(state, action)
  }
  // switch (action.type) {
  //   case 'SET_ENTRIES':
  //     return setEntries(state, action.entries);
  //   case 'NEXT':
  //     return next(state);
  //   case 'RESTART':
  //     return restart(state);
  //   case 'VOTE':
  //     return state.update('vote',
  //       voteState => vote(voteState, action.entry, action.clientId));
  // }
  // return state;
}

export default reducer;