import React, {useState} from 'react';
import SgList from './SgList';
import './TdTemplate.css';

function SgTemplate() {
    let [checkHome, setCheckHome] = useState('curr');
    
    return(
        <>
        <div className = "tdtemplate">
            <div className = "suggestion_box">
                <div className = "day"> 이런 일은 어때요? </div>
            </div>

            <section className = "todo">
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

