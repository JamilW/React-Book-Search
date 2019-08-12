import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&AIzaSyAyH2stwsAYO7v_zZz3XlgUjdKMXFC90PE";

export default {
    search: function(query) {
        let q = (query).split(" ").join("+");
        return axios.get(BASEURL + q + APIKEY)
    }
};

