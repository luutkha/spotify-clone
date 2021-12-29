import {  API_MY_TRACK, API_SEARCH_TRACK } from "../constants/api";
import axios from "axios";
import { createAction,  STORE_LIST_TRACK, STORE_PROFILE_TRACKS, STORE_SELECTED_TRACK } from "../constants/constants";
export const getListTrackWhenSearch = (queryForSearch) => {
    return (dispatch) => {
        axios
            .get(API_SEARCH_TRACK+`&q=${queryForSearch}`)
            .then((resp) => {
                dispatch(createAction(STORE_LIST_TRACK, resp.data.tracks.items));

                return resp.data.artists.items;
            })
            .catch(() =>{
                console.log("Something err, but just log in console!")
            } );
    };
};

export const getMyTracks = () => {
    return (dispatch) => {
        axios
            .get(API_MY_TRACK)
            .then((resp) => {
              
                let rawData = resp.data.items
                let executedData = []
                for (let index = 0; index < 8; index++) {
                    const album = rawData[index].album;
                    executedData.push(album)

                    
                }
                dispatch(createAction(STORE_PROFILE_TRACKS, executedData));
                console.log(executedData)

                // return resp.data.artists.items;
            })
            .catch(() =>{
                console.log("Something err, but just log in console!")
            } );
    };
};

export const setSelectedTrack = (uris,isVisible) => {
    return (dispatch) =>{
        dispatch(createAction(STORE_SELECTED_TRACK, {isVisible: isVisible, uris: uris}))
    }
}