import axios from 'axios';

const KEY = 'AIzaSyBH8RjGibZYKbfhn55o-hSOoEchR1lLbac';

const api_config = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
        part: "snippet",
        maxResults: 5,
        type: 'video',
        key: KEY,
    }
});

export default api_config;
