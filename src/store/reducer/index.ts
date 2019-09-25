import {combineReducers }from 'redux';
// import postReducer from './PostReducers';
import twitterReducer from './twitterReducer';


 export default combineReducers({
  //  postsData:postReducer,
  twitterInfo:twitterReducer,
 });
