import * as types from '../actions/actionTypes';


function courseReducer(state=[],action){
    switch(action.type){
        case types.CREATE_COURSE:
            return [...state,Object.assign({},action.course)]; //Returns an array with state and the added course
        default : 
            return state;
    }
}

export default courseReducer;