import './App.css';
import React, {useState} from 'react'; //Component 클래스 불러오기 
import Lists from './components/Lists';
import Form from './components/Form';

const initialTodoDatas = localStorage.getItem('todoDatas') ? JSON.parse(localStorage.getItem('todoDatas')): [];

const App = () => { //App이 컴포넌트로 불러와져서 사용된다면? 아래 함수가 실행된다. 
    console.log("App");
    const [todoDatas, setTodoData] = useState(initialTodoDatas); // 초기값 설정과 상태 변화 함수 리턴 => 로컬 스토리지 활용
    const [value, setValue] = useState("");

    const handleRomoveAllClick = () => {
      setTodoData([]);
      localStorage.setItem('todoDatas', JSON.stringify([])) ;
    }

    return(
      <div className='flex items-center justify-center w-screen h-screen bg-blue-100'>
        <div className='w-full p-6 m-4 bg-white rounded shadow md:w-3/4 md:max-w-lg lg:w-3/4 lg:max-w-lg'>
          <div className='flex justify-between mb-3'>
            <h1>할 일 목록</h1>
            <button onClick={handleRomoveAllClick}>Delete All</button>
          </div> {/* jsx 구문에서는 함부로 세미콜론 넣으면 안됨. 브라우저에 인식될 수 있음 */}
          <Lists todoDatas = {todoDatas} setTodoData = {setTodoData}/>  {/* Lists 요소에 state를 속성으로 내려준다 */}
          <Form value = {value} setValue = {setValue} setTodoData = {setTodoData} todoDatas = {todoDatas}/>
        </div>
      </div>
    )
}

export default App

