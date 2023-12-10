import axios from "axios";
import myAxios from "./myAxios";


export const requestLoginUser = async () => {
    return myAxios.get('/user/get/login');
}

export const requestCoursesToCurrentUser = async () => {
    return myAxios.get('/course/getCourseToCurrentUser/');
}

export const requestCurrentSubscribeCourse = async () => {
    return myAxios.get('/course/getCurrentSubscribeCourse');
}

export const requestListUserByPage = async (params:any) => {
    return myAxios.get('/user/list/page', {
        params:{
        }

    });
}

export const getIndex3 = async () => {
    return myAxios.get('/user/12345');
}

export const getIndex4 = async () => {
    return myAxios.get('/user/12345');
}

export const getIndex5 = async () => {
    return myAxios.get('/user/12345');
}
