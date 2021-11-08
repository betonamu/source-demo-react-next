import { productActionTypes } from "../actions";
import { createSuccessActionType } from "../helper";
import { HYDRATE } from 'next-redux-wrapper'
import { handleActions } from 'redux-actions';

const {GET_DETAIL} = productActionTypes;

const initialState = {
    getDetail: [],
}

const product = handleActions(
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
export default product;