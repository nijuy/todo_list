import React from 'react';
import './TdTemplate.css';
import './SgTemplate.css';

function SgTemplate({ sg_children }) {
    return(
        <>
        <div className = "sgtemplate">
            <div className = "suggestion_box">
                <div className = "sg_text"> 이런 일은 어때요? </div>
            </div>
            { sg_children }
        </div>
        </> 
    );
}

export default SgTemplate;

