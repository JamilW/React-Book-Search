import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&process.env.API_KEY";

export default {
    search: function(query) {
        let q = (query).split(" ").join("+");
        return axios.get(BASEURL + q + APIKEY)
    }
};

