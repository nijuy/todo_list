import React, { Component } from 'react';
import TdTemplate from "./components/TdTemplate";
import SgTemplate from "./components/SgTemplate";
import Form from "./components/Form";
import TdList from "./components/TdList";

class App extends Component {
  id = 0;
  cc = 0;
  uc = 0;
  click = [];

  state = {
    input : '',
    todos : []
  }

  handleChange = (e) => {
    this.setState( { input : e.target.value });
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    let space = 0;

    for(let i of input){
      if(i === ' ')
        space += 1;
    }

    if(space === input.length)
      this.setState({ input : '' });

    else {
      this.uc++;
      this.click.push(0);
      this.setState(
        { 
          input : '', 
          todos : todos.concat({ id : this.id++, text : input, checked : false })
        });
    }
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;
    let click_here = ++this.click[id];

    const ind = todos.findIndex(i => i.id === id);
    const selected = todos[ind];
    const nextTd = [...todos]; /*뭐임????*/

    nextTd[ind] = { ...selected, checked : !selected.checked };
    this.setState({ todos : nextTd });

    if(click_here % 2 === 1)
      this.cc++;
    else 
      this.cc--;

    this.click[id] = click_here;
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    
    /* filter로 삭제 대상 (id가 일치하는 것)만 제외하고 새 배열 추출*/
    this.setState({ todos : todos.filter(i => i.id !== id)});
    
    this.uc--;
    if(this.click[id] % 2 === 1)
      this.cc--;
  }

  render(){
    const { input, todos } = this.state;
    const cc = this.cc;
    const uc = this.uc;

    return(<div>
      <TdTemplate 
        cc = {cc} 
        uc = {uc}
        form = { 
          <Form 
            value = { input }  
            onChange = { this.handleChange }
            onCreate = { this.handleCreate }
            onKeyPress = { this.handleKeyPress }
          /> 
        }
      >
        <TdList 
          todos = { todos } 
          onToggle = {this.handleToggle} 
          onRemove = {this.handleRemove}
        />
      </TdTemplate>

      <SgTemplate/>
    </div>);
  }
}
export default App;
