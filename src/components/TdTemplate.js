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
        </>
    );
}

export default TdTemplate;