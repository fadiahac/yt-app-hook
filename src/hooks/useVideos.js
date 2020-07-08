import {useState, useEffect } from 'react';
import YouTube from "../apis/YouTube";

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    const searchVideo = async (searchText) => {
        const {data} = await YouTube.get('/search', {
            params: {
                q: searchText,
                part: "snippet",
                maxResults: 5,
                type: 'video',
                key: 'AIzaSyBH8RjGibZYKbfhn55o-hSOoEchR1lLbac',
            }
        });

        setVideos(data.items);
    };

    useEffect(() => {
        searchVideo(defaultSearchTerm);
    },[defaultSearchTerm]);

    return [videos, searchVideo];
};

export default useVideos;