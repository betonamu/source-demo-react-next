import { mainActionTypes } from "../actions";
import { createSuccessActionType } from "../helper";
import { HYDRATE } from 'next-redux-wrapper'
import { handleActions } from 'redux-actions';

const {GET_DATA} = mainActionTypes;

const initialState = {
    getData: [],
}

const main = handleActions(
    {
        [HYDRATE]: (state, action) =>{
            return {...state, ...action.payload.main}
        },
        [createSuccessActionType(GET_DATA)]: (state, action)=>{
            return{...state, getData:action.payload.galleries.data
            };
        },
    },
    initialState
);
export default main;