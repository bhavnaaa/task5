import React from 'react';
import { useDrop } from 'react-dnd';
import TaskItem from './TaskItem';

function TaskBox({ title, tasks, moveTask, group }) {
  const [, drop] = useDrop({
    accept: 'task',
    drop: (item) => moveTask(item.id, item.from, group),
  });

  return (
    <div className="task-box" ref={drop}>
      <h2>{title}</h2>
      <div className="task-list">
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} from={group} />
        ))}
      </div>
    </div>
  );
}

export default TaskBox;
