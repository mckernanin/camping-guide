import { LOCATIONS_REQUEST, LOCATIONS_SUCCESS, LOCATIONS_FAILURE } from '../constants/location';

const defaultState = {
  loading: false,
  loaded: false,
  locations: []
};

export default function (state = defaultState, action) {
  const { response } = action;
  switch (action.type) {
    case LOCATIONS_REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false
      };
    case LOCATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        locations: response
      };
    case LOCATIONS_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false
      };
    default:
      return state;
  }
}
