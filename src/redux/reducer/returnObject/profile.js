import {  STORE_PROFILE } from "../../constants/constants";

let initial = {}

const reducer = (state = initial, action) => {
    let { type, data } = action;
    switch (type) {
        case STORE_PROFILE:

        return data
      
        default:
            return state
    }

    
};

export default reducer;
