import axios from "axios";
import { API_MY_ARTIST } from "../constants/api";
import { createAction, STORE_PROFILE_ARTIST } from "../constants/constants";

export const getMyListArtist = () => {
    return (dispatch) => {
        axios
            .get(API_MY_ARTIST)
            .then((resp) => {
                console.log(resp.data)
                dispatch(createAction(STORE_PROFILE_ARTIST, resp.data.artists.items));

                return resp.data.artists.items;
            })
            .catch(() => dispatch(createAction(STORE_PROFILE_ARTIST, [])));
    };
};