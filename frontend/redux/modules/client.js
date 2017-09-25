const initialState = {
  id: null,
  token: null
};

const reducer = function clientReducer(state = initialState, action) {
  switch (action.type) {
    case 'CLIENT_SET':
      return {
        id: action.token.userId,
        token: action.token
      };

    case 'CLIENT_UNSET':
      return {
        id: null,
        token: null
      };

    default:
      return state;
  }
};

export function setClient(token) {
  return {
    type: 'CLIENT_SET',
    token
  };
}

export function unsetClient() {
  return {
    type: 'CLIENT_UNSET'
  };
}

export default reducer;
