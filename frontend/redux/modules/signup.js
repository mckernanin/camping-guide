import { call, put, takeLatest } from 'redux-saga/effects';
import handleApiErrors from '../../utils/handleApiErrors';

const initialState = {
  requesting: false,
  successful: false,
  messages: [],
  errors: []
};

// Reducer
export default function signupReducer(state = initialState, action) {
  switch (action.type) {
    case 'SIGNUP_REQUESTING':
      return {
        requesting: true,
        successful: false,
        messages: [{ body: 'Signing up...', time: new Date() }],
        errors: []
      };

    case 'SIGNUP_SUCCESS':
      return {
        errors: [],
        messages: [
          {
            body: 'Successfully created account!',
            time: new Date()
          }
        ],
        requesting: false,
        successful: true
      };

    case 'SIGNUP_ERROR':
      return {
        errors: state.errors.concat([
          {
            body: action.error.toString(),
            time: new Date()
          }
        ]),
        messages: [],
        requesting: false,
        successful: false
      };

    default:
      return state;
  }
}

// Action
export function signupRequest({ name, email, password }) {
  return {
    type: 'SIGNUP_REQUESTING',
    name,
    email,
    password
  };
}

// API Request
function signupApi(name, email, password) {
  return fetch('/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  })
    .then(handleApiErrors)
    .then(response => response.json())
    .then(json => json)
    .catch((error) => {
      throw error;
    });
}

// Saga
function* signupFlow(action) {
  try {
    const { name, email, password } = action;
    const response = yield call(signupApi, name, email, password);
    yield put({ type: 'SIGNUP_SUCCESS', response });
  } catch (error) {
    yield put({ type: 'SIGNUP_ERROR', error });
  }
}

export function* signupSaga() {
  yield takeLatest('SIGNUP_REQUESTING', signupFlow);
}
