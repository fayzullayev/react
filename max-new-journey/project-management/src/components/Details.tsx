import { Project } from '../App.tsx';
import Button from './Button.tsx';
import Tasks from './Tasks.tsx';

type DetailsProps = Project & {
  onDelete: (id: number) => void;
  onAddTask: (projectId: number, task: string) => void;
  onDeleteTask: (projectId: number, taskId: number) => void;
};

function Details({
  title,
  dueDate,
  description,
  onDelete,
  id,
  tasks,
  onAddTask,
  onDeleteTask,
}: DetailsProps) {
  const formattedDate = new Date(dueDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  function handleAddTask(task: string) {
    onAddTask(id, task);
  }

  function handleDeleteTask(taskId: number) {
    onDeleteTask(id, taskId);
  }

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">{title}</h1>
          <Button onClick={() => onDelete(id)}>Delete</Button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{description}</p>
      </header>
      <Tasks
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        tasks={tasks}
      />
    </div>
  );
}

export default Details;
