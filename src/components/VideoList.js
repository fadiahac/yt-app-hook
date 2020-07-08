import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelected}) => {
    const renderedList = videos.map( (video) => {
        return (
            <div className="ui list" key={video.id.videoId}>
                <VideoItem
                    video={video}
                    onVideoSelected = {onVideoSelected}
                />
            </div>
        );
    });

    return <div>{renderedList}</div>
};

export default VideoList;