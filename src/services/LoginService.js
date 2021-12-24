import axios from "axios";
import { API_GET_TOKEN } from "../redux/constants/api";

function LoginService() {}
const headers = {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  };
LoginService.prototype = {
    login(data) {
        return axios.post(API_GET_TOKEN, data,headers)
        .then((resp) => {
            console.log(resp.data)
            const refreshToken = resp.data.refresh_token;
            const accessToken = resp.data.access_token
            if (refreshToken) {
                sessionStorage.setItem("accessToken", refreshToken);
                axios.interceptors.request.use(function (config) {
                    const token = `Bearer ${accessToken}`;
                    // config.headers.token = token;
                    config.headers.Authorization = token;

                    axios.defaults.withCredentials = true
                    return config;
                });
                
            }

            return resp;
        })
        .catch(err =>{
            console.log(err)
        });
        
    },
    // logout() {
    //     return axios.post(API_SIGN_OUT, {}, { withCredentials: true });
    // },
};

export default new LoginService();
