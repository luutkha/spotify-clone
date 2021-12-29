import {  STORE_SELECTED_TRACK } from "../../constants/constants";

let initial = {isVisible: false, uris: []}

const reducer = (state = initial, action) => {
    let { type, data } = action;
    switch (type) {
        case STORE_SELECTED_TRACK:

        return data
      
        default:
            return state
    }

    
};

export default reducer;
