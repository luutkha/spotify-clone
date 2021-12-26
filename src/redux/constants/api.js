const authAPI = "https://accounts.spotify.com/api"
const baseAPI = "https://api.spotify.com/v1"

export const API_GET_TOKEN = authAPI+"/token"
export const API_ME= baseAPI+"/me"
export const API_MY_ARTIST= API_ME+"/following?type=artist"


