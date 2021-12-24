import { combineReducers } from "redux";

import authentication from "./returnObject/authentication";
import profile from "./returnObject/profile";


const reducer = combineReducers({
    authentication,
    profile

});

export default reducer;
