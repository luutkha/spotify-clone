import axios from "axios";
import { API_GET_TOKEN } from "../redux/constants/api";

function GetAccessTokenServices() {}
const headers = {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'Authorization': 'basic YWE4MWM4YjA4Zjk4NDdjY2I5N2QxMmVkMDNkY2NkMzQ6Zjk0MjViZDc0YWJlNDBhYWJiODU1ZGQwZDk1MmE0ZDY='

  };
GetAccessTokenServices.prototype = {
    getToken(data) {
        return axios.post(API_GET_TOKEN, data, headers)
        .then((resp) => {
            console.log(resp.data)
            // const refreshToken = resp.data.refresh_token;
            const accessToken = resp.data.access_token
            if (accessToken) {
                // sessionStorage.setItem("refreshToken", refreshToken);
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
           return err;
        });
        
    },
   
};

export default new GetAccessTokenServices();
