import Immutable from 'seamless-immutable';

export const Types = {
  ADD_USER_REQUEST: 'ADD_USER_REQUEST',
  ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',
  ADD_USER_ERROR: 'ADD_USER_ERROR',
};

const INITIAL_STATE = Immutable({
  loading: false,
  error: false,
  users: [
    {
      login: 'carlos-cne',
      id: 41330782,
      node_id: 'MDQ6VXNlcjQxMzMwNzgy',
      avatar_url: 'https://avatars2.githubusercontent.com/u/41330782?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/carlos-cne',
      html_url: 'https://github.com/carlos-cne',
      followers_url: 'https://api.github.com/users/carlos-cne/followers',
      following_url: 'https://api.github.com/users/carlos-cne/following{/other_user}',
      gists_url: 'https://api.github.com/users/carlos-cne/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/carlos-cne/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/carlos-cne/subscriptions',
      organizations_url: 'https://api.github.com/users/carlos-cne/orgs',
      repos_url: 'https://api.github.com/users/carlos-cne/repos',
      events_url: 'https://api.github.com/users/carlos-cne/events{/privacy}',
      received_events_url: 'https://api.github.com/users/carlos-cne/received_events',
      type: 'User',
      site_admin: false,
      name: 'Carlos Queiroz',
      company: null,
      blog: '',
      location: 'Belo Horizonte - MG - Brazil',
      email: null,
      hireable: null,
      bio:
        "At age 11 I had my first contact with programming using QBasic. But as time went by I lost my way. Today I'm going back to doing what I like: Programming.",
      public_repos: 7,
      public_gists: 0,
      followers: 1,
      following: 6,
      created_at: '2018-07-17T11:53:30Z',
      updated_at: '2019-04-09T01:24:14Z',
      coordinate: {
        latitude: -27.2177659,
        longitude: -49.6451598,
      },
    },
  ],
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
