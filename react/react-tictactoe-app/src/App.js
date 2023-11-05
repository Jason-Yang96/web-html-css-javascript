import './App.css';
import React, {useState} from 'react'; //Component 클래스 불러오기 
import Lists from './components/Lists';


export default function App() { // 내보낼 클래스 정의하기
  // state setting 해주는 부분
  const [todoDatas, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const handleSumit = (e) => { //클릭하면 페이지를 리로드하지 않고 할 일을 Create해준다.
    e.preventDefault();
    
    let newTodo = {
      id: Date.now(), //id는 구분 가능할 수 있도록 시간 관련된 값을 부여해준다
      title: value, 
      completed: false
    }
    
    setTodoData(prev => [...prev, newTodo]); //기존의 todoDatas에 새로운 요소를 추가한다. 새로운 추가 요소는 처음에 값을 가지지 않는다.;
  }
  
  const handleChange = (e) => { //할 일을 입력할 때 변화를 체크해서 반복적으로 값 상태를 Read하여 Update해준다.
    setValue(e.target.value);
  }
  return(
    <div className='container'>
      <div className='todoBlock'>
        <div className='title'>
          <h1>할 일 목록</h1>
        </div> {/* jsx 구문에서는 함부로 세미콜론 넣으면 안됨. 브라우저에 인식될 수 있음 */}
        <Lists todoDatas = {todoDatas} setTodoData = {setTodoData}/>  {/* Lists 요소에 state를 속성으로 내려준다 */}
        <form style= {{display: 'flex'}} onSubmit={handleSumit}>
          <input
            type ='text'
            name ='value'
            style = {{flex: '10', padding: '5px'}}
            placeholder = '해야 할 일을 입력하세요.'
            value = {value}
            onChange= {handleChange}
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

