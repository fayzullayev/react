import NewTask from './NewTask.tsx';
import { Task } from '../projects-context.tsx';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Tasks() {
  const { id } = useParams();
  const [tasks, setTasks] = useState<Task | null>(null);
  function handleDeleteTask(taskId: number) {
    // onDeleteTask(taskId);
    console.log(taskId);
  }

  useEffect(() => {}, [id]);

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      {/*<NewTask onAddTask={onAddTask} />*/}
      {!(tasks.length > 0) ? (
        <p className="text-stone-800 my-4">
          There is no tasks for this project
        </p>
      ) : (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task: Task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span> {task.title}</span>

              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => handleDeleteTask(task.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Tasks;
