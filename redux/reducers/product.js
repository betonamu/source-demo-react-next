import { detailActionTypes } from "../actions";
import { createSuccessActionType } from "../helper";
import { HYDRATE } from 'next-redux-wrapper'
import { handleActions } from 'redux-actions';

const {GET_DETAIL} = detailActionTypes;

const initialState = {
    getDetail: [],
}

const detail = handleActions(
    {
        [HYDRATE]: (state, action) =>{
            return {...state, ...action.payload.product}
        },
        [createSuccessActionType(GET_DETAIL)]: (state, action)=>{
            return{...state, getDetail:action.payload.data.product
            };
        },
    },
    initialState
);
export default detail;