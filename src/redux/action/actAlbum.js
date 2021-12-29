import { API_SEARCH_ALBUM } from "../constants/api";
import axios from "axios";
import { createAction, STORE_LIST_ALBUM } from "../constants/constants";

export const getListAlbumWhenSearch = (queryForSearch) => {
    return (dispatch) => {
        axios
            .get(API_SEARCH_ALBUM+`&q=${queryForSearch}`)
            .then((resp) => {
                dispatch(createAction(STORE_LIST_ALBUM, resp.data.albums.items));

                return resp.data.artists.items;
            })
            .catch(() =>{
                console.log("catch")
            } );
    };
};