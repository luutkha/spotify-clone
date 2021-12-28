import axios from "axios";
import { API_MY_ARTIST, API_SEARCH_ARTIST } from "../constants/api";
import { createAction, STORE_LIST_ARTIST, STORE_PROFILE_ARTIST } from "../constants/constants";

export const getMyListArtist = () => {
    return (dispatch) => {
        axios
            .get(API_MY_ARTIST)
            .then((resp) => {
                dispatch(createAction(STORE_PROFILE_ARTIST, resp.data.artists.items));

                return resp.data.artists.items;
            })
            .catch(() => dispatch(createAction(STORE_PROFILE_ARTIST, [])));
    };
};

export const getListArtistWhenSearch = (queryForSearch) => {
    return (dispatch) => {
        axios
            .get(API_SEARCH_ARTIST+`&q=${queryForSearch}`)
            .then((resp) => {
                dispatch(createAction(STORE_LIST_ARTIST, resp.data.artists.items));

                return resp.data.artists.items;
            })
            .catch(() => dispatch(createAction(STORE_LIST_ARTIST, [])));
    };
};