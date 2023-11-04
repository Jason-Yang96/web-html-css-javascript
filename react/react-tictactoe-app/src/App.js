import './App.css';
import React, {Component} from 'react';


export default class App extends Component {
  btnStyle = {
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
  };
  listStyle = (completed) => { //변수라고 생각되는데 실제 사용할 때는 메서드 처럼 하용된다. 
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed? "line-through": "none"
    };
  };
  state = {
    todoDatas : [],
    value : ""
  }
  handleClick = (id) => {
    let newTodoDatas = this.state.todoDatas.filter((data) => data.id !== id);
    console.log('newTodoData', newTodoDatas);
    this.setState({todoDatas : newTodoDatas})
  }
  handleChange = (e) => {
    this.setState({value: e.target.value})
  }
  handleSumit = (e) => {
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: this.state.value,
      completed: false
    }

    this.setState({todoDatas: [...this.state.todoDatas, newTodo], value: ""})
  }
  handleCompleteChange = (id) => {
    let newTodoData = this.state.todoDatas.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    this.setState({todoDatas: newTodoData})
  };
  render(){
    return(
      <div className='container'>
        <div className='todoBlock'>
          <div className='title'>
            <h1>할 일 목록</h1>
          </div>
          {this.state.todoDatas.map((data) => (
            <div style={this.listStyle(data.completed)} key={data.id}>
              <input 
                type='checkbox' 
                onChange={() => this.handleCompleteChange(data.id)}  // return 의 맥락 속에서는 this를 사용해서 클래스의 메서드임을 명시해주어야 한다.
                defaultChecked = {false}/>
              {data.title}
              <button 
                style = {this.btnStyle} 
                onClick = {() => this.handleClick(data.id)}
              >
                
                x

              </button>  {/*wlrma map 안에서 돌아가고 있기 때문에 data.id로*/}
            </div>
          )
          )}
          <form style= {{display: 'flex'}} onSubmit={this.handleSumit}>
            <input
              type ='text'
              name ='value'
              style = {{flex: '10', padding: '5px'}}
              placeholder = '해야 할 일을 입력하세요.'
              value = {this.state.value}
              onChange= {this.handleChange}
            />
            <input
              type ='submit'
              value = "입력"
              className='btn'
              style={{flex: '1'}}
            />
              
          </form>

        </div>
      </div>
    )
  }
}
