import React from "react";
import {DefaultPlayer as Video} from 'react-html5video';
import MyW from '../../assets/myw.mp4';
import 'react-html5video/dist/styles.css';

const VideoPlayer = () => {
    return (
        <div className="content-preview__video">
            <Video autoPlay loop>
                <source src={MyW} type="video/webm"/> 
            </Video>
      </div>
    );
}

export default VideoPlayer;