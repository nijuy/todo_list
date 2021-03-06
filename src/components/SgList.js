import React, { useState } from 'react';
import SgItem from "./SgItem";

function SgList() {
    let [checkHome, setCheckHome] = useState('curr');

    const [sgitems_home] = useState([   {text : '๐ ์ผ์์ธ๋ผ ๋ฐฅ ์ฑ๊ฒจ๋จน๊ธฐ (๋ฐฐ๋ฌ์์ X!) ๐ฅ'}, 
                                        {text : '๐ ์นจ๋ ์ ๋ฆฌํ๊ธฐ ๐'},
                                        {text : '๐ ๋ค์ด์ด๋ฆฌ ์์ฑํ๊ธฐ โ๏ธ'},
                                        {text : '๐ด ๋๋ด์ฃผ๊ฒ ๋ฎ์  ์๊ธฐ ๐ค'},
                                        {text : '๐ง๐ปโโ๏ธ ์ ํ๋ธ์์ ํ ํธ๋ ์ด๋ ์์ ๋ฐ๋ผํ๊ธฐ ๐ช'}]);
    
    const [sgitems_outside] = useState([    {text : 'โ ๊ฐ๊ณ ์ถ๋ ์นดํ ๋ค๋์ค๊ธฐ ๐ฐ'}, 
                                            {text : '๐ข ๋์๊ด ๊ฐ์ ์ฑ ๋น๋ ค์ค๊ธฐ ๐'},
                                            {text : '๐ถโโ ๋๋ค ํ ๋ฐํด ์ฐ์ฑํ๊ธฐ ๐ถโโ'},
                                            {text : '๐ ์ง์ ๊ฐ๋ ๊ธธ์ ํ๋ ์ฌ์ง ์ฐ๊ธฐ โ๏ธ'},
                                            {text : 'โฐ๏ธ ์ง์์ ์ ์ผ ๊ฐ๊น์ด ์ฐ์ผ๋ก ๋ฑ์ฐํ๋ฌ ๊ฐ๊ธฐ โฐ๏ธ'}]);
    
    const suggestion_List_Home = sgitems_home.map( ({ text }) => (<SgItem text = { text }/> ) );
    const suggestion_List_Outside = sgitems_outside.map( ({ text }) => (<SgItem text = { text }/>) );

    return(
        <>
        <section className = "suggestion">
            <div className = 'sg_choose'>
                ์ค๋์
                <button className={`sg_button ${checkHome === 'curr' ? 'active' : ''}`} onClick={() => setCheckHome('curr')}> 
                ์ง์๋ง ์์๋์ ๐ก
                </button>
                
                <button className={`sg_button ${checkHome === 'prev' ? 'active' : ''}`} onClick={() => setCheckHome('prev')}> 
                ์ธ์ถํ๋ ๋ ! ๐ 
                </button>
            </div>
            
            <div>
                { (checkHome === 'curr') ? suggestion_List_Home : suggestion_List_Outside}
            </div>
        </section>
        </>
    );
}

export default SgList;
