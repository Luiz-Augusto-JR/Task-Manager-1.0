import React, { useState } from 'react';

import './App.css'
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';


const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: true,
    },
    {
      id: '2',
      title: 'Ler Livros',
      completed: true,
    },
    {
      id: '1',
      title: 'Estudar Programação',
      completed: true,
    }
  ])

  return (
    <>
    <div className='container'>
      <AddTask />
      <Tasks tasks={tasks} />
    </div>
    </>
  )
};

export default App;
