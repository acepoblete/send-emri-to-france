import React from 'react'
import YouTube from 'react-youtube';

export default function Youtube() {

    const opts = {
        frameborder: 0,
        playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 1
        }
    };

    return (
        <div className="video-container">
            <YouTube
                className="video"
                videoId="u4dyBz6MDo4"
                opts={opts}
            />
        </div>
    )
}
