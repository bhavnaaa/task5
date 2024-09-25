import React from 'react';
import { useDrag } from 'react-dnd';

function TaskItem({ task, from }) {
  const [{ isDragging }, drag] = useDrag({
    type: 'task',
    item: { id: task.id, from },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      className="task-item"
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
      }}
    >
      {task.name}
    </div>
  );
}

export default TaskItem;
