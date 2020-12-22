import React from "react";
import SourceCss from "./Source.module.css";

const Source = (props) => {
    let res;
    switch (props.type) {
        case "video" :
            res = <div className={SourceCss.video}></div>
            break;
        case "text" :
            res = <div className={SourceCss.text}></div>
            break;
        default :
            res = <div></div>
    }
    return (
        <div>
            <a href={props.source} target="_blank">
                {res}
            </a>
        </div>
    );
}

export default Source;