import axios from "axios";
import { API_URL } from "./baseURL";

export const getApi = (url) => {
    return axios({
        method: 'get',
        url: API_URL + url,
    });
}

export const postApi = (url, data) => {
    return axios({
        method: 'post',
        url: API_URL + url,
        data
    });
}