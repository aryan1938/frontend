import React from "react";
import * as qs from 'qs';
import axios from "axios";

const BASEURL = 'https://www.gokuthecoder.me/';
export const BASE_IMG = 'https://www.gokuthecoder.me/';

class Apiservices {
    register(data) {
        return axios.post(BASEURL + 'user/add', data)
    }

    login(data) {
        return axios.post(BASEURL + 'user/login', qs.stringify(data))
    }

    all_user() {
        const token = localStorage.getItem("token")
        const head = {
            Authorization: token
        }

        return axios.post(BASEURL + 'admin/alluser', {}, { headers: head })
    }

    add_category(body){
        const token = localStorage.getItem("token")
        const head = {
            Authorization: token
        }

        return axios.post(BASEURL+"admin/add/category",qs.stringify(body), {headers:head})
    }

    all_category(){
        return axios.post(BASEURL+"admin/all/category")
    }

    update_category(body_id_categoryName){
        const token = localStorage.getItem("token")
        const head = {
            Authorization: token
        }

        return axios.post(BASEURL+"admin/update/category", qs.stringify(body_id_categoryName) , {headers:head})
    }

    status_category(status_category){
        const token = localStorage.getItem("token")
        const head = {
            Authorization: token
        }

        return axios.post(BASEURL+"admin/updatestatus/category", qs.stringify(status_category) , {headers:head})
    }


}

export default new Apiservices;