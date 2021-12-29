import { combineReducers } from "redux";

import authentication from "./returnObject/authentication";
import profile from "./returnObject/profile";
import myArtist from "./returnArray/myArtist"
import listArtistWhenSearch from "./returnArray/listArtistWhenSearch"
import listAlbumWhenSearch from "./returnArray/listAlbumWhenSearch"
import listTrackWhenSearch from "./returnArray/listTrackWhenSearch"
import listPlayListWhenSearch from "./returnArray/listPlayListWhenSearch"
import selectedTrack from './returnObject/selectedTrack'
const reducer = combineReducers({
    authentication,
    profile,
    myArtist,
    listArtistWhenSearch,
    listAlbumWhenSearch,
    listTrackWhenSearch,
    listPlayListWhenSearch,
    selectedTrack,

});

export default reducer;
