import Immutable from 'seamless-immutable';

export const Types = {
  ADD_USER_REQUEST: 'ADD_USER_REQUEST',
  ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',
  ADD_USER_ERROR: 'ADD_USER_ERROR',
};

const INITIAL_STATE = Immutable({
  loading: false,
  error: false,
  users: [],
});

export default function User(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_USER_REQUEST:
      return state.merge({ loading: true, error: false });

    case Types.ADD_USER_SUCCESS: {
      const { data, coordinate } = action.payload;
      data.coordinate = coordinate;
      return state.merge({ loading: false, error: false, users: [...state.users, data] });
    }

    case Types.ADD_USER_ERROR: {
      return state.merge({ loading: false, error: true });
    }
    default:
      return state;
  }
}

export const Creators = {
  addUserRequest: (username, coordinate) => ({
    type: Types.ADD_USER_REQUEST,
    payload: { username, coordinate },
  }),
  addUserSuccess: (data, coordinate) => ({
    type: Types.ADD_USER_SUCCESS,
    payload: { data, coordinate },
  }),
  addUserError: () => ({
    type: Types.ADD_USER_ERROR,
  }),
};
