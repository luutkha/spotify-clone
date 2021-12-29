import {  STORE_LIST_TRACK } from "../../constants/constants";

let initial = []

const reducer = (state = initial, action) => {
    let { type, data } = action;
    switch (type) {
        case STORE_LIST_TRACK:
            console.log(data)
            return [...data]
      
        default:
            return state
    }

    
};

export default reducer;
