import {  API_SEARCH_PLAYLIST } from "../constants/api";
import axios from "axios";
import { createAction, STORE_LIST_PLAYLIST } from "../constants/constants";

export const getListPlayListWhenSearch = (queryForSearch) => {
    return (dispatch) => {
        axios
            .get(API_SEARCH_PLAYLIST+`&q=${queryForSearch}`)
            .then((resp) => {
                dispatch(createAction(STORE_LIST_PLAYLIST, resp.data.playlists.items));
                return resp.data.artists.items;
            })
            .catch(() =>{
                console.log("catch")
            } );
    };
};