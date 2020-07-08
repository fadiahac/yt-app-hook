import React from "react";

const VideoDetails = ({video}) => {
    if (!video) {
        return (<div>Loading... </div>);
    }

    return (
        <div>
            <div className="ui embed">
                <iframe id="player" type="text/html" width="640" height="390"
                        src={`https://www.youtube.com/embed/${video.id.videoId}?enablejsapi=1`}
                        frameBorder="0" title={video.snippet.title}>
                </iframe>
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDetails;