import React from 'react'
import Header from '../other/Header'
import TaskList from '../TaskList/TaskList'
import TaskListNumbers from '../other/TaskListNumbers'

const EmployeeDashboard = (props) => {
  return (
    <div className='p-10 bg-[#1c1c1c]'>
        <Header changeUser={props.changeUser} data={props.data} />
        <TaskListNumbers data={props.data}/>
        <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard
