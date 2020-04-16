import axios from "axios";

const API_KEY = "AIzaSyA1ekIAkTGCDSz_MdhqrskiiL7LuhQxYqs";
const instance = axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&key=${API_KEY}`
});

export const api = {
    getPopularVideosList() {
        return instance.get("", {})
    },
};