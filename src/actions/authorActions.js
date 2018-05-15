import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';
import CourseApi from '../api/mockCourseApi';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadAuthorsSuccess(authors) {
    return ({
        type : types.LOAD_AUTHORS_SUCCESS , 
        authors : authors
    });
}

export function createCourseSuccess(course){
    return {type: types.CREATE_COURSE_SUCCESS,course};
}

export function updateCourseSuccess(course){
    return{type: types.UPDATE_COURSE_SUCCESS, course};
}

export function loadAuthors(){
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return AuthorApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorsSuccess(authors));
        }).catch(error => {
            throw(error);
        });
    };
}

export function saveCourse(course){
    return function(dispatch,getState) {
        dispatch(beginAjaxCall());
        return CourseApi.saveCourse(course).then(savedCourse => {
            course.id ? dispatch(updateCourseSuccess(savedCourse)) :
                dispatch(createCourseSuccess(savedCourse));
        }).catch(error => {
            throw(error);
        });
    };
}