import React, {useEffect, useState} from "react";
import Loader from "./Loader";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";
import useVideos from "../hooks/useVideos";

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, searchVideos] = useVideos('yalgaar');

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);

    return (
        <div className="ui container" style={{margin: '10px'}}>
            <Loader/>
            <SearchBar getSearchText={searchVideos}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetails video={selectedVideo}/>
                    </div>
                    <div className="five wide column">
                        <VideoList
                            videos={videos}
                            onVideoSelected={(video) => {setSelectedVideo(video)}}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;

