import { take, fork, cancel, call, put, cancelled } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import handleApiErrors from '../../utils/handleApiErrors';
import { setClient, unsetClient } from './client';

const initialState = {
  requesting: false,
  successful: false,
  messages: [],
  errors: []
};

// Reducer
export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_REQUESTING':
      return {
        requesting: false,
        successful: false,
        messages: [{ body: 'Logging in...', time: new Date() }],
        errors: []
      };

    case 'LOGIN_SUCCESS':
      return {
        requesting: false,
        successful: true,
        messages: [],
        errors: []
      };

    case 'LOGIN_ERROR':
      return {
        requesting: false,
        successful: false,
        messages: [],
        errors: state.errors.concat([
          {
            body: action.error.toString(),
            time: new Date()
          }
        ])
      };

    default:
      return state;
  }
}

// Action
export function loginRequest({ email, password }) {
  return {
    type: 'LOGIN_REQUESTING',
    email,
    password
  };
}

// API Request
function loginApi(email, password) {
  return fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then(handleApiErrors)
    .then(response => response.json())
    .then(json => json)
    .catch((error) => {
      throw error;
    });
}

function* logout() {
  yield put(unsetClient());
  localStorage.removeItem('token');
  yield put(push('/login'));
}

function* loginFlow(email, password) {
  let auth;
  try {
    auth = yield call(loginApi, email, password);
    yield put(setClient(auth.token));
    yield put({ type: 'LOGIN_SUCCESS' });
    localStorage.setItem('token', JSON.stringify(auth.token));
    yield put(push('/'));
  } catch (error) {
    yield put({ type: 'LOGIN_ERROR', error });
  } finally {
    if (yield cancelled()) {
      yield put(push('/Login'));
    }
  }

  return auth;
}

export function* loginSaga() {
  while (true) {
    const { email, password } = yield take('LOGIN_REQUESTING');
    const task = yield fork(loginFlow, email, password);
    const action = yield take(['CLIENT_UNSET', 'LOGIN_ERROR']);
    if (action.type === 'CLIENT_UNSET') {
      yield cancel(task);
    }
    yield call(logout);
  }
}
