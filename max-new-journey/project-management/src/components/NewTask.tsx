import { useState } from 'react';

type NewTaskProps = {
  onAddTask: (task: string) => void;
};

function NewTask({ onAddTask }: NewTaskProps): JSX.Element {
  const [task, setTask] = useState<string>('');

  function handleAddTask() {
    if (task.trim().length > 0) {
      onAddTask(task);
      setTask('');
    }
  }

  return (
    <div className="flex items-center gap-4">
      <input
        value={task}
        onChange={({ target: { value } }) => setTask(value)}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleAddTask}
      >
        Add Tasks
      </button>
    </div>
  );
}

export default NewTask;
