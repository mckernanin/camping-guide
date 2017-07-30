import createApiRequest from '../../utils/createApiRequest';

export const FETCH_LOCATIONS_REQUEST = 'location/FETCH_LOCATIONS_REQUEST';
export const FETCH_LOCATIONS_SUCCESS = 'location/FETCH_LOCATIONS_SUCCESS';
export const FETCH_LOCATIONS_FAILURE = 'location/FETCH_LOCATIONS_FAILURE';

export const SELECT_LOCATION = 'location/SELECT_LOCATION';

const defaultState = {
  loading: false,
  loaded: false,
  locations: []
};

export default function reducer(state = defaultState, action) {
  const { response } = action;
  switch (action.type) {
    case FETCH_LOCATIONS_REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false
      };
    case FETCH_LOCATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        locations: response
      };
    case FETCH_LOCATIONS_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false
      };
    case SELECT_LOCATION:
      return {
        ...state,
        selectedLocation: action.location
      };
    default:
      return state;
  }
}

export function fetchLocationsRequest() {
  return {
    types: [FETCH_LOCATIONS_REQUEST, FETCH_LOCATIONS_SUCCESS, FETCH_LOCATIONS_FAILURE],
    promise: createApiRequest('locations')
  };
}

export function selectLocation(location) {
  return {
    type: SELECT_LOCATION,
    location
  };
}
