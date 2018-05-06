function courseReducer(state=[],action){
    switch(action.type){
        case 'CREATE_COURSE':
            return [...state,Object.assign({},action.course)]; //Returns an array with state and the added course
        default : 
            return state;
    }
}

export default courseReducer;