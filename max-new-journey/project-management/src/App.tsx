import { ReactNode, useEffect } from 'react';
import ProjectsSidebar from './components/ProjectsSidebar.tsx';
import NewProject from './components/NewProject.tsx';
import NoProjectSelected from './components/NoProjectSelected.tsx';
import Details from './components/Details.tsx';
import { useProjects } from './projects-context.tsx';

function App() {
  const {
    onGetProjects,
    state: { selectedProjectId },
  } = useProjects();

  useEffect(() => {
    (async () => {
      await onGetProjects();
    })();
  }, []);

  let content: ReactNode;

  if (selectedProjectId === null) {
    content = <NewProject />;
  } else if (selectedProjectId === undefined) {
    content = <NoProjectSelected />;
  } else {
    content = <Details />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar />
      {content}
    </main>
  );
}

export default App;
