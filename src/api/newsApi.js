import axios from "axios";

const API_KEY = "pFpSg40feER6OKDiEgPgdLKM1TFaXD8k";
const instance = axios.create({
    baseURL: `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${API_KEY}`
});

export const api = {
    getResults() {
        return instance.get("", {})
    },
};