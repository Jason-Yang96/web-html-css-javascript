import './App.css';
import React, {useState} from 'react'; //Component 클래스 불러오기 
import Lists from './components/Lists';
import Form from './components/Form';


export default function App() { // 내보낼 클래스 정의하기
  // state setting 해주는 부분
  const [todoDatas, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => { //클릭하면 페이지를 리로드하지 않고 할 일을 Create해준다.
    e.preventDefault();
    
    let newTodo = {
      id: Date.now(), //id는 구분 가능할 수 있도록 시간 관련된 값을 부여해준다
      title: value, 
      completed: false
    }
    
    setTodoData(prev => [...prev, newTodo]); //기존의 todoDatas에 새로운 요소를 추가한다. 새로운 추가 요소는 처음에 값을 가지지 않는다.;
    setValue("")
  }
  return(
    <div className='flex items-center justify-center w-screen h-screen bg-blue-100'>
      <div className='w-full p-6 m-4 bg-white rounded shadow md:w-3/4 md:max-w-lg lg:w-3/4 lg:max-w-lg'>
        <div className='flex justify-between mb-3'>
          <h1>할 일 목록</h1>
        </div> {/* jsx 구문에서는 함부로 세미콜론 넣으면 안됨. 브라우저에 인식될 수 있음 */}
        <Lists todoDatas = {todoDatas} setTodoData = {setTodoData}/>  {/* Lists 요소에 state를 속성으로 내려준다 */}
        <Form value = {value} setValue = {setValue} handleSubmit = {handleSubmit}/>
      </div>
    </div>
  )
}

