import { FETCH_WEATHER, REMOVE_WEATHER } from '../actions/index';
import _ from 'lodash';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ];
    case REMOVE_WEATHER:  
      const newState = _.remove(state, function(cityData) {
        return cityData.city.id !== action.payload.city.id;
      });

      console.log('newState', newState);
      return newState
      // avoid state mutations
  }
  return state;
}
