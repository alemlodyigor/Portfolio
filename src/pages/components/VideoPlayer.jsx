import React from "react";
import {DefaultPlayer as Video} from 'react-html5video';

import 'react-html5video/dist/styles.css';

const VideoPlayer = (props) => {
    return (
        <div className="content-preview__video">
            <Video autoPlay loop>
                <source src={props.data} type="video/webm"/> 
            </Video>
      </div>
    );
}

export default VideoPlayer;