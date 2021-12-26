import { combineReducers } from "redux";

import authentication from "./returnObject/authentication";
import profile from "./returnObject/profile";
import myArtist from "./returnArray/myArtist"

const reducer = combineReducers({
    authentication,
    profile,
    myArtist,

});

export default reducer;
