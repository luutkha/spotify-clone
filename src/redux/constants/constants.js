export const STORE_PHONE_AND_PASSWORD_WHEN_LOGIN = "STORE_PHONE_AND_PASSWORD_WHEN_LOGIN";
export const CLEAR_USER_INFO_LOGIN = "CLEAR_USER_INFO_LOGIN";
export const LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT_SUCCESSFUL = "LOGOUT_SUCCESSFUL";

/**Profile */
export const STORE_PROFILE = "STORE_PROFILE";

/**Artist */
export const STORE_PROFILE_ARTIST = "STORE_PROFILE_ARTIST";
export const STORE_LIST_ARTIST = "STORE_LIST_ARTIST";
export const STORE_SELECTED_ARTIST = "STORE_SELECTED_ARTIST";

/**Message from server */
export const SET_MESSAGE_FROM_SERVER = "SET_MESSAGE_FORM_SERVER";
export const CLEAR_MESSAGE_FROM_SERVER = "CLEAR_MESSAGE_FROM_SERVER";

export const createAction = (type, data) => {
    return { type, data };
};
