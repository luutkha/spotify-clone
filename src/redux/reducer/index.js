import { combineReducers } from "redux";

import authentication from "./returnObject/authentication";
import profile from "./returnObject/profile";
import myArtist from "./returnArray/myArtist"
import listArtistWhenSearch from "./returnArray/listArtistWhenSearch"

const reducer = combineReducers({
    authentication,
    profile,
    myArtist,
    listArtistWhenSearch,

});

export default reducer;
