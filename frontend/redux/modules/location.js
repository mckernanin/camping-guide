import { takeLatest, call, put } from 'redux-saga/effects';

function createApiRequest(url, method, data) {
  return fetch(url, {
    method,
    body: data ? JSON.stringify(data) : null
  })
    .then(response => response.json())
    .catch((error) => {
      throw error;
    });
}

const defaultState = {
  loading: false,
  loaded: false,
  locations: []
};

// reducer
export default function reducer(state = defaultState, action) {
  const { response } = action;
  switch (action.type) {
    case 'FETCH_LOCATIONS_REQUEST':
      return {
        ...state,
        loading: true,
        loaded: false
      };
    case 'FETCH_LOCATIONS_SUCCESS':
      return {
        ...state,
        loading: false,
        loaded: true,
        locations: response
      };
    case 'FETCH_LOCATIONS_FAILURE':
      return {
        ...state,
        loading: false,
        loaded: false,
        error: response
      };
    case 'SELECT_LOCATION':
      return {
        ...state,
        selectedLocation: action.location
      };
    case 'CREATE_LOCATION_REQUEST':
      return {
        ...state,
        loading: true,
        loaded: false
      };
    case 'CREATE_LOCATION_SUCCESS':
      return {
        ...state,
        loading: false,
        loaded: true,
        locations: state.locations.concat([response])
      };
    case 'CREATE_LOCATION_FAILURE':
      return {
        ...state,
        loading: false,
        loaded: false,
        error: response
      };
    default:
      return state;
  }
}

// actions
export function fetchLocationsRequest() {
  return {
    types: ['FETCH_LOCATIONS_REQUEST', 'FETCH_LOCATIONS_SUCCESS', 'FETCH_LOCATIONS_FAILURE'],
    promise: createApiRequest('locations')
  };
}

export function selectLocation(location) {
  return {
    type: 'SELECT_LOCATION',
    location
  };
}

export function createLocation(location) {
  return {
    types: ['CREATE_LOCATION_REQUEST', 'CREATE_LOCATION_SUCCESS', 'CREATE_LOCATION_FAILURE'],
    promise: createApiRequest('locations', 'POST', { location })
  };
}

// saga
function fetchLocationsApi() {
  return createApiRequest('/api/locations', 'GET', null);
}

function* locationsFlow() {
  try {
    const response = yield call(fetchLocationsApi);
    yield put({
      type: 'FETCH_LOCATIONS_SUCCESS',
      response
    });
  } catch (e) {
    yield put({
      type: 'FETCH_LOCATIONS_FAILURE',
      e
    });
  }
}

export function* locationsSaga() {
  yield takeLatest('FETCH_LOCATIONS_REQUEST', locationsFlow);
}
