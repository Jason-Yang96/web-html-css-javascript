import React, {useState} from 'react'

const List = React.memo (({
    id, title, completed, todoDatas, setTodoData, provided, snapshot
    }) => {
        console.log("List");

        const [isEditing, setisEditing] = useState(false);
        const [editedtitle, setEditedtitle] = useState(title);

        const handleCompleteChange = (id) => { 
        let newTodoDatas = todoDatas.map((data) => { 
            if (data.id === id) {
            data.completed = !completed;
            }
            return data; 
        });
        setTodoData(newTodoDatas);
        localStorage.setItem('todoDatas', JSON.stringify(newTodoDatas)) ;
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        let newTodoDatas = todoDatas.map(data =>{
            if(data.id === id) {
                data.title = editedtitle
            }
            return data
        })
        setTodoData(newTodoDatas);
        setisEditing(false);
        localStorage.setItem('todoDatas', JSON.stringify(newTodoDatas)) ;
    }

    const handleRemoveClick = (id) => { 
        let newTodoDatas = todoDatas.filter((data) => data.id !== id);
        console.log('newTodoData', newTodoDatas);
        setTodoData(newTodoDatas);
        localStorage.setItem('todoDatas', JSON.stringify(newTodoDatas)) ;
      };
    
    const handleEditChange = (e) => {
        setEditedtitle(e.target.value);
    };

    if (isEditing){
        return(
            <div 
                className= 'flex my-3 justify-between items-center text-gray-600 bg-gray-100 border rounded'>
                <div className='flex items-center w-full px-4 py-1 my-2'>
                    <form onSubmit={handleSubmit}>
                        <input 
                            value={editedtitle}
                            className='w-full px-3 py-2 mr-4 text-gray-500 rounded'
                            onChange={handleEditChange}
                            autoFocus
                        />
                    </form>
                </div>
                <div className='flex items-center'>
                    <button 
                        className='px-4 py-2 float-right'
                        onClick = {handleSubmit}>
                        Save
                    </button>  
                    <button 
                        className='px-4 py-2 float-right'
                        onClick = {() => setisEditing(false)}>
                        X
                    </button>  
                </div>
            </div>
        )
    } else{
        return (
            <div 
                key = {id} 
                    {...provided.draggableProps} 
                    ref = {provided.innerRef} 
                    {...provided.dragHandleProps} 
                    className={`${snapshot.isDragging ? 'bg-gray-400' : 'bg-gray-100'} 
                    flex my-3 justify-between items-center text-gray-600 bg-gray-100 border rounded`}>
                <div className='flex items-center w-full px-4 py-1 my-2 hover:gh-gray-200'>
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
                <div className='flex items-center'>
                    <button 
                        className='px-4 py-2 float-right'
                        onClick = {() => setisEditing(true)}>
                        Edit
                    </button>  
                    <button 
                        className='px-4 py-2 float-right'
                        onClick = {() => handleRemoveClick(id)}>
                        X
                    </button>  
                </div>
            </div>
      );
    }
}); 

export default List