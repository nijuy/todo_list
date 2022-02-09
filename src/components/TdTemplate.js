import React from 'react';
import './TdTemplate.css';

function TdTemplate({ cc, uc, form, children }) {
    let month = new Date().getMonth() + 1;
    let day = new Date().getDate();

    
    return(
        <>
        <div className = "tdtemplate">
            <div className = "title">
                <div className = "day">
                    { month } 월 { day } 일의
                </div>
                TODO
            </div>

            <section className = "form-wrapper">
                { form }
            </section>

            <section className = "todo">
                { children }
            </section>

            <section className = "done">
                오늘 할 일 {uc}개 중에서 {cc}개 완료 ! ᕕ( ᐛ )ᕗ
            </section>
        </div>
        
        <br></br>

        <div className = "tdtemplate">
            <div className = "suggestion_box">
                <div className = "day">
                    이런 일은 어떠세요?
                </div>
            </div>

            <section className = "todo">
                <div className = 'sg_choose'>
                    오늘은  
                    <button className = 'sg_button'> 집에만 있을래요 🏡</button>
                    <button className = 'sg_button'> 외출하는 날! 😎 </button>
                </div>
                
                <br/>

                여기에 할 일 목록 추천을 띄워주는거지 근데 까먹어서 당장은 못해
            </section>

            <section className = "done"></section>
        </div>
        </>
    );
}

export default TdTemplate;