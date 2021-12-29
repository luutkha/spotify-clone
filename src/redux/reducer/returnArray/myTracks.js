import {   STORE_PROFILE_TRACKS } from "../../constants/constants";

let initial = []

const reducer = (state = initial, action) => {
    let { type, data } = action;
    switch (type) {
        case STORE_PROFILE_TRACKS:
            console.log(data)
            return data
      
        default:
            return state
    }

    
};

export default reducer;
