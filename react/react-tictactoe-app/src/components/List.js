import React from 'react'

const List = React.memo (({
    id, title, completed, todoDatas, setTodoData, provided, snapshot, handleClick
}) => {
        console.log("List");
        const handleCompleteChange = (id) => { 
        let newTodoDatas = todoDatas.map((data) => { 
            if (data.id === id) {
            data.completed = !completed;
            }
            return data; 
        });
        setTodoData(newTodoDatas); 
    };
    return (
        <div 
            key = {id} 
                {...provided.draggableProps} 
                ref = {provided.innerRef} 
                {...provided.dragHandleProps} 
                className={`${snapshot.isDragging ? 'bg-gray-400' : 'bg-gray-100'} 
                flex my-3 justify-between items-center text-gray-600 bg-gray-100 border rounded`}>
            <div className='flex items-center w-full px-4 py-1 my-2'>
                <input 
                    className='mr-5'
                    type='checkbox' 
                    onChange={() => handleCompleteChange(id)}  // return 의 맥락 속에서는 this를 사용해서 클래스의 메서드임을 명시해주어야 한다.
                    defaultChecked = {false}
                />
                <span className= {completed? "line-through":"undefined"}>
                    {title}
                </span>
            </div>
            <div className='p-4 mr-6'>
                <button onClick = {() => handleClick(id)}>X</button>  
            </div>
        </div>
  );
}); 

export default List