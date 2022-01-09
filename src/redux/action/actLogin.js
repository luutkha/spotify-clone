import {
    CLEAR_MESSAGE_FROM_SERVER,
    createAction,
    LOGIN_FAILED,
    LOGIN_SUCCESSFUL,
    SET_MESSAGE_FROM_SERVER,
    STORE_PHONE_AND_PASSWORD_WHEN_LOGIN,
    STORE_PROFILE,
} from "../constants/constants";
import { API_GET_TOKEN, API_ME, } from "../constants/api";
import LoginService from "../../services/LoginService";
import axios from "axios";
import qs from 'qs';


export const storePhoneAndPasswordWhenLogin = (key, value) => {
    //key and value was created to save a dynamic object
    return {
        type: STORE_PHONE_AND_PASSWORD_WHEN_LOGIN,
        key,
        value,
    };
};

export const login = (data) => {
    return (dispatch) => {
        return LoginService.login(data)
            .then((resp) => {
                dispatch({
                    type: LOGIN_SUCCESSFUL,
                    user: resp.data
                })
                return Promise.resolve();
            })
            .catch((err) => {
                let MESSAGE =
                    (err.response && err.response.data && err.response.data.message) ||
                    err.message ||
                    err.toString();

                dispatch({
                    type: SET_MESSAGE_FROM_SERVER,
                    message: MESSAGE,
                });

                dispatch({
                    type: LOGIN_FAILED,
                });

                return Promise.reject(MESSAGE);
            });
    };
};
const headers = {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'Authorization': 'basic YWE4MWM4YjA4Zjk4NDdjY2I5N2QxMmVkMDNkY2NkMzQ6Zjk0MjViZDc0YWJlNDBhYWJiODU1ZGQwZDk1MmE0ZDY='
};

export const getTokenWhenRefreshPage = () => {
    let refreshToken = sessionStorage.getItem('refreshToken')
    let data = qs.stringify({

        "grant_type": "refresh_token",
        "refresh_token": refreshToken,
        "client_id": "aa81c8b08f9847ccb97d12ed03dccd34",

    })
    return async (dispatch) => {
        await axios
            .post(API_GET_TOKEN, data, { headers: headers })
            .then((resp) => {
                const accessToken = resp.data.access_token
                console.log(accessToken)
                if (accessToken) {
                    axios.interceptors.request.use(function (config) {
                        const token = `Bearer ${accessToken}`;
                        config.headers.Authorization = token;
                        return config;
                    });
                }
                dispatch({
                    type: LOGIN_SUCCESSFUL,
                    user: resp.data
                })



                return resp.data;
            })
            .catch((err) => console.log(err));
        const user_info = await axios
            .get(API_ME)
            .then((resp) => {
                return resp.data;
            })
            .catch(() => dispatch(createAction(STORE_PROFILE, {})));
        dispatch(createAction(STORE_PROFILE, user_info));
    };
};

export const logout = () => {
    return (dispatch) => {
        return LoginService.logout()
            .then(() => {
                dispatch({
                    type: CLEAR_MESSAGE_FROM_SERVER,
                });

                return Promise.resolve();
            })
            .catch((err) => {
                let MESSAGE =
                    (err.response && err.response.data && err.response.data.message) ||
                    err.message ||
                    err.toString();

                dispatch({
                    type: SET_MESSAGE_FROM_SERVER,
                    message: MESSAGE,
                });

                return Promise.reject(err);
            });
    };
};
