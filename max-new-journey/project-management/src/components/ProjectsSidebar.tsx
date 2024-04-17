import Button from './Button.tsx';

import { Project, useProjects } from '../projects-context.tsx';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function ProjectsSidebar() {
  const {
    onGetProjects,
    state: { projects },
  } = useProjects();
  let { id: projectId } = useParams();

  useEffect(() => {
    (async () => {
      await onGetProjects();
    })();
  }, []);

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your projects
      </h2>
      <div>
        <Button>
          <Link to="/create-project">+ Add Project</Link>
        </Button>
      </div>

      <ul className="mt-8">
        {projects.map(({ id, title }: Project) => {
          const isActive = projectId === id.toString();

          let cssClass =
            'w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800';

          if (isActive) {
            cssClass += ' bg-stone-800 text-stone-200';
          } else {
            cssClass += ' text-stone-400';
          }

          return (
            <li key={id}>
              <Link to={'/projects/' + id}>
                <button className={cssClass}>{title}</button>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default ProjectsSidebar;
