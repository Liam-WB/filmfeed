import axios from "axios";

axios.defaults.baseURL = 'https://filmfeed-api-d8205608db2c.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true