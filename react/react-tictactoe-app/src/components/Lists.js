import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import List from './List';

const Lists = React.memo(({todoDatas,setTodoData, value, setValue}) => {
    console.log("Lists");
    const handleEnd = (result) => {
        console.log("result", result)
        if(!result.destination) return;

        const newTodoDatas = todoDatas;
        const [reorderedItem] = newTodoDatas.splice(result.source.index, 1);
        newTodoDatas.splice(result.destination.index, 0, reorderedItem); //put zero at the second place when you intend to insert data in the array
        setTodoData(newTodoDatas);
        localStorage.setItem('todoDatas', JSON.stringify(newTodoDatas)) ;
    }
    return (
        <div>
            <DragDropContext onDragEnd={handleEnd}>
                <Droppable droppableId="todos"> 
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                        {todoDatas.map((data, index) => (  
                            <Draggable
                                key = {data.id}
                                draggableId={data.id.toString()}
                                index = {index}
                            > 
                                {(provided, snapshot) => (
                                    <List
                                        key={data.id}
                                        id={data.id}
                                        title={data.title}
                                        completed = {data.completed}
                                        todoDatas = {todoDatas}  
                                        setTodoData = {setTodoData}
                                        provided = {provided}
                                        snapshot = {snapshot}
                                    />
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
  );
});

export default Lists;


