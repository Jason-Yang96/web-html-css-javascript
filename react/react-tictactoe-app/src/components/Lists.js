import React from 'react'

export default function Lists({todoDatas,setTodoData}) {
    const btnStyle = { //버튼 스타일 정의. css 코드 같지만, 객체의 형식으로 정의하고 있다. 스타일이 일종의 속성을 가진 요소처럼 표현 됨
        color: "#fff",
        border: "none",
        padding: "5px 9px",
        borderRadius: "50%",
        cursor: "pointer",
        float: "right",
    };
    const listStyle = (completed) => { //변수라고 생각되는데 실제 사용할 때는 메서드 처럼 하용된다. 아니지? 속성이지?
        return {
            padding: "10px",
            borderBottom: "1px #ccc dotted",
            textDecoration: completed? "line-through": "none" //삼항 연산자. completed 가 true 라면 line-through, 아니면 none
            };
    };
    const handleCompleteChange = (id) => { //체크 버튼을 누르게 되면 만약 아이디가 같은 상태인 경우 completed의 boolean값이 바뀐다.
        let newTodoDatas = todoDatas.map((data) => { // 반환값이 무조건 있어야 한다.??
            if (data.id === id) {
            data.completed = !data.completed;
            }
            return data; //그리고는 바뀐 것의 리스트를 반환해준다. Update!
        });
        setTodoData(newTodoDatas); //바뀐 ;
    };
    const handleClick = (id) => { //클릭을 하면 Delete한다. 방금 이벤트가 발생한 아이디와 다른 것들만 newTodoDatas 배열을 만들어 넣어준다. 일종의 Update이다.
        let newTodoDatas = todoDatas.filter((data) => data.id !== id);
        console.log('newTodoData', newTodoDatas);
        setTodoData(newTodoDatas);
    }
    return (
        <div>
            {todoDatas.map((data) => ( //this는 이 맥락에서 클래스 객체를 가르킨다. 
                <div style={listStyle(data.completed)} key={data.id}>
                <input 
                    type='checkbox' 
                    onChange={() => handleCompleteChange(data.id)}  // return 의 맥락 속에서는 this를 사용해서 클래스의 메서드임을 명시해주어야 한다.
                    defaultChecked = {false}
                />
                {data.title}
                <button 
                    style = {btnStyle} 
                    onClick = {() => handleClick(data.id)}
                >
                    x
                </button>  {/*지금은 map 안에서 돌아가고 있기 때문에 data.id로*/}
                </div>
            )
            )}
        </div>
    )
}
