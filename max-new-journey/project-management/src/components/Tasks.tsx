import NewTask from './NewTask.tsx';
import { Task } from '../App.tsx';

type TasksProps = {
  onAddTask: (task: string) => void;
  onDeleteTask: (taskId: number) => void;
  tasks: Task[];
};

function Tasks({ onAddTask, tasks, onDeleteTask }: TasksProps) {
  function handleDeleteTask(taskId: number) {
    onDeleteTask(taskId);
  }

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddTask={onAddTask} />
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
