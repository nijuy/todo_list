import React, {useState} from 'react';
import SgList from './SgList';
import './TdTemplate.css';
import './SgTemplate.css';

function SgTemplate() {
    let [checkHome, setCheckHome] = useState('curr');
    
    return(
        <>
        <div className = "sgtemplate">
            <div className = "suggestion_box">
                <div className = "sg_text"> 이런 일은 어때요? </div>
            </div>

            <section className = "suggestion">
                <div className = 'sg_choose'>
                    오늘은
                    <button className={`sg_button ${checkHome === 'curr' ? 'active' : ''}`} onClick={() => setCheckHome('curr')}> 
                        집에만 있을래요 🏡
                    </button>
                    <button className={`sg_button ${checkHome === 'prev' ? 'active' : ''}`} onClick={() => setCheckHome('prev')}> 
                        외출하는 날! 😎 
                    </button>
                </div>
            <br/>
            
            <SgList checkHome = {checkHome} />
            </section>
            
        </div>

        </>
    );

    
}

export default SgTemplate;

