import axios from "axios";
import { API_GET_TOKEN } from "../redux/constants/api";

function LoginService() {}
const headers = {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  };

LoginService.prototype = {
    login(data) {
        return axios.post(API_GET_TOKEN, data,headers)
        .then((resp) => {
            const refreshToken = resp.data.refresh_token;
            const accessToken = resp.data.access_token
            if (refreshToken) {
                sessionStorage.setItem("refreshToken", refreshToken);
                axios.interceptors.request.use(function (config) {
                    const token = `Bearer ${accessToken}`;
                    
                    config.headers.Authorization = token;

                   
                    return config;
                });
                
            }

            return resp;
        })
        .catch(err =>{
            console.log(err)
        });
        
    },
  
};

export default new LoginService();
