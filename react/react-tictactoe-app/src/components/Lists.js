import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

export default function Lists({todoDatas,setTodoData}) {
    
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
            <DragDropContext>
                <Droppable droppableId='to-dos'>
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                        {todoDatas.map((data, index) => (  
                            <Draggable
                                key = {data.id}
                                draggableId={data.id.toString()}
                                index = {index}
                            > 
                                {(provided, snapshot) => (
                                    <div key = {data.id} {...provided.draggableProps} ref = {provided.innerRef} {...provided.dragHandleProps}>
                                        <div className='flex justify-between items-center text-gray-600 bg-gray-100 border rounded' key={data.id}>
                                            <div className='flex items-center w-full px-4 py-1 my-2'>
                                                <input 
                                                    className='mr-5'
                                                    type='checkbox' 
                                                    onChange={() => handleCompleteChange(data.id)}  // return 의 맥락 속에서는 this를 사용해서 클래스의 메서드임을 명시해주어야 한다.
                                                    defaultChecked = {false}
                                                />
                                                <span className= {data.completed? "line-through":"undefined"}>
                                                    {data.title}
                                                </span>
                                            </div>
                                            <div className='p-4 mr-6'>
                                                <button onClick = {() => handleClick(data.id)}>X</button>  
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    )
}
