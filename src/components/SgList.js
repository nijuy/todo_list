import React, { Component } from 'react';
import SgItem from "./SgItem";

class SgList extends Component {

    state = {
        sgitems_home : [{text : '🍙 삼시세끼 밥 챙겨먹기 (배달음식 X!) 🥗'}, 
                        {text : '🛌 침대 정리하기 🛌'},
                        {text : '📓 다이어리 작성하기 ✒️'},
                        {text : '😴 끝내주게 낮잠 자기 💤'},
                        {text : '🧘🏻‍♀️ 유튜브에서 홈 트레이닝 영상 따라하기 💪'}],

        sgitems_outside : [ {text : '☕ 가고싶던 카페 다녀오기 🍰'}, 
                            {text : '🏢 도서관 가서 책 빌려오기 📚'},
                            {text : '🚶‍♂ 동네 한 바퀴 산책하기 🚶‍♂'},
                            {text : '🌆 집에 가는 길에 하늘 사진 찍기 ☁️'},
                            {text : '⛰️ 집에서 제일 가까운 산에서 등산하기 ⛰️'}]
    }

    render(){
        const { checkHome } = this.props;
        const { sgitems_home, sgitems_outside } = this.state;

        const suggestion_List_Home = sgitems_home.map( 
            ({ text }) => (
                <SgItem
                    text = {text}
                />
            )
        );

        const suggestion_List_Outside = sgitems_outside.map( 
            ({ text }) => (
                <SgItem
                    text = {text}
                />
        ));

        return(
            <div>
                { (checkHome === 'curr') ? suggestion_List_Home : suggestion_List_Outside}
            </div>
        );
    }
}

export default SgList;