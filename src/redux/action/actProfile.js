import axios from "axios";
import { API_ME } from "../constants/api";
import { createAction, STORE_PROFILE } from "../constants/constants";

export const getUserInfo = () => {
    return async (dispatch) => {
        const user_info = await axios
            .get(API_ME)
            .then((resp) => {
                console.log(resp.data.images[0])
                return resp.data;
            })
            .catch(() => dispatch(createAction(STORE_PROFILE,{})));
            dispatch(createAction(STORE_PROFILE, user_info));
    };
};