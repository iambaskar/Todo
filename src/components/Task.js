import { useState,useEffect } from "react"
import { Button,Form } from "react-bootstrap";
import './task.css';

export default function Task() {

  const [task,setTask] = useState('');

  const [taskList,setTaskList] = useState([]);


  const handleChange = (e)=>{
    setTask(e.target.value) 
  }

  const addTask = ()=>{
    if(task == ""){
      return false
    }
    const list = [...taskList,{name:task,completed:false,id:Math.random()}]
    setTaskList(list)
    setTask('')
  }

  const deleteTask = (index)=>{
    const newList = []
    for(let i = 0; i < taskList.length; i++){
      if(index != i){
        newList.push(taskList[i])
      }
    }
    setTaskList(newList)
  }

  const completeTask = (todo)=>{
    setTaskList(
      taskList.map((item) => {
        if(item.id === todo.id){
          return {...item, completed: !item.completed}
        }
        return item;
      })
    )
  }

  useEffect(()=>{
    const localData = localStorage.getItem('task')
    setTaskList(JSON.parse(localData))
  },[])

  useEffect(()=>{
    localStorage.setItem('task',JSON.stringify(taskList))
  })


  return(
    <div className="container">
      <div className="inputText">
      <Form className="form">
        <Form.Control className="formvalue" value={task} onChange={handleChange} />
        <Button variant="primary" className="btn" onClick={()=>{
            addTask()
        }}>Add Task</Button>
      </Form>
      
       
      </div>
      
      <div>
          {
            taskList[0] ? <h5>tasks</h5> : <h5>You don't have any tasks</h5>  
          }
      </div>
      
      <div>
      {
            
            taskList.map((todo,index)=>{
                return(
                  
                    <div key={todo.id} className="list">
                      <p className={`todo ${todo.completed ? "completed" : ""}`}>
                        {todo.name}
                      </p>
                      <div>
                      <Button className="su-btn" variant="success" onClick={()=>completeTask(todo)}><i className="fa fa-check" aria-hidden="true"></i></Button>
                      <Button className="del-btn" variant="danger" onClick={()=>deleteTask(index)}><i className="fa fa-trash-o" aria-hidden="true"></i></Button>
                      </div>
                      
                    </div>
                )
            })
        }

      </div>
         
    </div>
  )
}
