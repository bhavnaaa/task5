
import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import TaskBox from './TaskBox';
import './App.css';

const initialTasks = [
  { id: 1, name: 'Test Task 1' },
  { id: 2, name: 'Test Task 2' },
  { id: 3, name: 'Test Task 3' },
  { id: 4, name: 'Test Task 4' },
  { id: 5, name: 'Test Task 5' },
  { id: 6, name: 'Test Task 6' },
  { id: 7, name: 'Test Task 7' },
  { id: 8, name: 'Test Task 8' },
  { id: 9, name: 'Test Task 9' },
  { id: 10, name: 'Test Task 10' },
];

function App() {
  const [taskGroups, setTaskGroups] = useState({
    today: [],
    tomorrow: [],
    thisWeek: [],
    nextWeek: [],
    unplanned: initialTasks,
  });

  const moveTask = (taskId, from, to) => {
    const taskToMove = taskGroups[from].find(task => task.id === taskId);
    setTaskGroups(prevState => ({
      ...prevState,
      [from]: prevState[from].filter(task => task.id !== taskId),
      [to]: [...prevState[to], taskToMove],
    }));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <h1>Task Planner</h1>
        <div className="task-container">
          <TaskBox title="Today" tasks={taskGroups.today} moveTask={moveTask} group="today" />
          <TaskBox title="Tomorrow" tasks={taskGroups.tomorrow} moveTask={moveTask} group="tomorrow" />
          <TaskBox title="This Week" tasks={taskGroups.thisWeek} moveTask={moveTask} group="thisWeek" />
          <TaskBox title="Next Week" tasks={taskGroups.nextWeek} moveTask={moveTask} group="nextWeek" />
          <TaskBox title="Unplanned" tasks={taskGroups.unplanned} moveTask={moveTask} group="unplanned" />
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
