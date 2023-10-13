import React, { useState } from 'react'
import './todo.css'  

const Todo = () => {
  const[inputData, setInputData] = useState("")
  return (
    <>
      <div className="main-div">
        <div className="child-div">
            <figure>
                <img src="./images/todo.svg" alt="" />
                <figcaption>Add Your List Here ✌</figcaption>
            </figure>
            <div className="addItems">
                <input type="text" placeholder='✍ add Item' className='form-control' value={inputData} onChange={(event)=>setInputData(event.target.value) }/>
                <span className='fa fa-plus add-btn'>➕</span>
            </div>
            
            <div className="showItems">
                <div className="eachItem">
                    <h3>apple</h3>
                    <div className="todo-btn">
                    <span className='far fa-edit add-btn'>✍</span>
                    <span className='fa fa-plus '>🗑</span>
                    </div>
                </div>
            </div>

            <div className="showItems">
                <button className='btn effect04'  data-sm-link-text="Remove all"> <span>CHECK LIST</span></button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Todo