import { userConstants } from "../constants/user-constants";
import axios from 'axios';
export const loginInfo = (data: any) => (dispatch: any) =>
  dispatch({
    type: userConstants.LOGIN_SUCCESS,
    payload: data
  });

  export const updateSpinner = (payload:any) => {
    return { type: userConstants.LOGIN_REQUEST, payload };
}

export const setUserDetails = (payload:any) => {
  return { type: userConstants.UPDATE_FOLLOWERS, payload };
}
export const onSessionLogout = ()=>{
  return { type: userConstants.LOGOUT };
}
export const onsearchText = (payload:any) => {
  return { type: userConstants.SEARCH, payload };
}

export const getFollowersDetails = (username: any) => {
    return (dispatch: { (arg0: any): void; (arg0: any): void; (arg0: any): void; (arg0: any): void; }) => {
      dispatch(updateSpinner(true));
      try {
        axios.all([
          axios.get(`http://localhost:4000/api/v1/getUserDetails/${username}`),
          axios.get(`http://localhost:4000/api/v1/getFollwersList/${username}`)
        ]).then(axios.spread(function (userDetails: { [x: string]: any; }, followersList: { [x: string]: any; }) {
          dispatch(setUserDetails({
            userDetails: userDetails['data'],
            followersList: followersList['data']
          }));
          dispatch(updateSpinner(false));
        }));
      }
      catch (error) {
        // dispatch(setUserDetailError({ error }));
      }
    };
  }