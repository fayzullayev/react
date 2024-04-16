import Button from './Button.tsx';

import { Project, useProjects } from '../projects-context.tsx';

function ProjectsSidebar() {
  const {
    state: { projects, selectedProjectId },
    onStartAddProject,
    onSetCurrentProject,
  } = useProjects();

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>

      <ul className="mt-8">
        {projects.map(({ id, title }: Project) => {
          const isActive = selectedProjectId === id;

          let cssClass =
            'w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800';

          if (isActive) {
            cssClass += ' bg-stone-800 text-stone-200';
          } else {
            cssClass += ' text-stone-400';
          }

          return (
            <li key={id} onClick={() => onSetCurrentProject(id)}>
              <button className={cssClass}>{title}</button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default ProjectsSidebar;
