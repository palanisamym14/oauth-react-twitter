import { loaderConstants } from '../constants/actionTypes';

export const enableLoader = (data: any) => (dispatch: any) => dispatch({
    type: loaderConstants.LOADING_INFO,
    payload: data
});
export const enablePopupModal = (data: any) => (dispatch: any) => dispatch({
    type: loaderConstants.POPUP_MODAL_INFO,
    payload: data
});


