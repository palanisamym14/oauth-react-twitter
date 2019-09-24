import {combineReducers }from 'redux';
// import postReducer from './PostReducers';
import loginReducer from './loginReducer';


 export default combineReducers({
  //  postsData:postReducer,
   loginData:loginReducer,
 });
