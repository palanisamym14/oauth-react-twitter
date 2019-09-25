import { userConstants } from "../constants/user-constants";

const initialstate = {
  item: {},
  loginInfo: [],
  isLoggedIn: false,
  followersList: {users:[]},
  followersFilter: {}
};

export default (state: any = initialstate, action: any) => {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      return InitialLogin(state, action);
    case userConstants.UPDATE_FOLLOWERS:
      return { ...state, ...action.payload };
      case userConstants.SEARCH:
        return followersFilter(state, action);
    case userConstants.LOGOUT:
      return { };
    default:
      return state;
  }
};

export const InitialLogin = (state: any, action: any) => {
  const payload = action.payload;
  if (!!payload) {
    return { ...state, loginInfo: payload, isLoggedIn: true };
  }
  return { ...state, loginInfo: null, isLoggedIn: false };
};

export const followersFilter = (state: any, action: any) => {
  const payload = action.payload;
  const _followersFilter = {...state["followersFilter"], ...payload};
  return { ...state, ...{followersFilter: _followersFilter} };
};
