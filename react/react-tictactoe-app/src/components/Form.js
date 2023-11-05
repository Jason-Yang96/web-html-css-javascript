import React from 'react'

export default function Form({value, setValue, handleSubmit}) {
    
    const handleChange = (e) => { //할 일을 입력할 때 변화를 체크해서 반복적으로 값 상태를 Read하여 Update해준다.
        setValue(e.target.value);
    }
    
    
    return (
        <div>
            <form style= {{display: 'flex'}} onSubmit={handleSubmit}>
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
  )
}
