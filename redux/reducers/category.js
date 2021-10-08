import { categoryActionTypes } from "../actions";
import { createSuccessActionType } from "../helper";
import { HYDRATE } from 'next-redux-wrapper'
import { handleActions } from 'redux-actions';

const {GET_CATEGORY} = categoryActionTypes;

const initialState = {
    getList: [],
}

const category = handleActions(
    {
        [HYDRATE]: (state, action) =>{
            return {...state, ...action.payload.category}
        },
        [createSuccessActionType(GET_CATEGORY)]: (state, action)=>{
            return{...state, getList:action.payload.data.search.edges
            };
        },
    },
    initialState
);
export default category;