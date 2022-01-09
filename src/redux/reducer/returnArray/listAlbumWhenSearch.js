import {  STORE_LIST_ALBUM } from "../../constants/constants";

let initial = []

const reducer = (state = initial, action) => {
    let { type, data } = action;
    switch (type) {
        case STORE_LIST_ALBUM:
            return [...data]
      
        default:
            return state
    }

    
};

export default reducer;
