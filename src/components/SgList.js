import React, { useState } from 'react';
import SgItem from "./SgItem";

function SgList() {
    let [checkHome, setCheckHome] = useState('curr');

    const [sgitems_home] = useState([   {text : '🍙 삼시세끼 밥 챙겨먹기 (배달음식 X!) 🥗'}, 
                                        {text : '🛌 침대 정리하기 🛌'},
                                        {text : '📓 다이어리 작성하기 ✒️'},
                                        {text : '😴 끝내주게 낮잠 자기 💤'},
                                        {text : '🧘🏻‍♀️ 유튜브에서 홈 트레이닝 영상 따라하기 💪'}]);
    
    const [sgitems_outside] = useState([    {text : '☕ 가고싶던 카페 다녀오기 🍰'}, 
                                            {text : '🏢 도서관 가서 책 빌려오기 📚'},
                                            {text : '🚶‍♂ 동네 한 바퀴 산책하기 🚶‍♂'},
                                            {text : '🌆 집에 가는 길에 하늘 사진 찍기 ☁️'},
                                            {text : '⛰️ 집에서 제일 가까운 산으로 등산하러 가기 ⛰️'}]);
    
    const suggestion_List_Home = sgitems_home.map( ({ text }) => (<SgItem text = { text }/> ) );
    const suggestion_List_Outside = sgitems_outside.map( ({ text }) => (<SgItem text = { text }/>) );

    return(
        <>
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
            
            <div>
                { (checkHome === 'curr') ? suggestion_List_Home : suggestion_List_Outside}
            </div>
        </section>
        </>
    );
}

export default SgList;
