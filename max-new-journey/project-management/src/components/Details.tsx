import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from './Button.tsx';
import Tasks from './Tasks.tsx';
import { Project } from '../projects-context.tsx';
import { getProject } from '../api/projects.ts';

function Details() {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setError(null);
    setIsLoading(true);
    (async () => {
      try {
        const response = await getProject(id);
        setProject(response.data);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);

  return !isLoading && !error ? (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project?.title}
          </h1>
          <Button>Delete</Button>
        </div>
        <p className="mb-4 text-stone-400">
          {getFormattedDate(project!.dueDate)}
        </p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project?.description}
        </p>
      </header>

      <Tasks />
    </div>
  ) : isLoading && !error ? (
    <h1>Loading...</h1>
  ) : !isLoading && error ? (
    <h1>{error}</h1>
  ) : null;
}

const getFormattedDate = (dueDate: string) =>
  new Date(dueDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

export default Details;
