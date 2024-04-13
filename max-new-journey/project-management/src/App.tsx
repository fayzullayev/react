import ProjectsSidebar from './components/ProjectsSidebar.tsx';
import NewProject, { InputsType } from './components/NewProject.tsx';
import NoProjectSelected from './components/NoProjectSelected.tsx';
import { useState } from 'react';
import Details from './components/Details.tsx';

export type Task = {
  id: number;
  title: string;
};

export interface Project extends InputsType {
  id: number;
  tasks: Task[];
}

type ProjectsState = {
  selectedProjectId: undefined | null | number;
  projects: Project[];
};

function App() {
  const [projectState, setProjectState] = useState<ProjectsState>({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  }

  function handleAddProject(inputs: InputsType) {
    setProjectState((prevState) => {
      const id = Math.random();

      return {
        ...prevState,
        selectedProjectId: id,
        projects: [...prevState.projects, { ...inputs, id: id, tasks: [] }],
      };
    });
  }

  function handleCancelProject() {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  }

  function handleDeleteProject(id: number) {
    setProjectState((prevState) => ({
      ...prevState,
      projects: prevState.projects.filter((p) => p.id !== id),
      selectedProjectId: undefined,
    }));
  }

  function handleAddTask(projectId: number, taskTitle: string) {
    const task: Task = { id: Math.random(), title: taskTitle };

    setProjectState((projectState) => ({
      ...projectState,
      projects: projectState.projects.map((p) =>
        p.id === projectId ? { ...p, tasks: [...p.tasks, task] } : p,
      ),
    }));
  }

  function handleDeleteTask(projectId: number, taskId: number) {
    setProjectState((projectState) => ({
      ...projectState,
      projects: projectState.projects.map((p) =>
        p.id === projectId
          ? { ...p, tasks: p.tasks.filter((t) => t.id != taskId) }
          : p,
      ),
    }));
  }

  let content;

  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject
        onAddProject={handleAddProject}
        onCancelProject={handleCancelProject}
      />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else {
    const project = projectState.projects.find(
      (p) => p.id === projectState.selectedProjectId,
    );

    if (project) {
      content = (
        <Details
          {...project}
          onDelete={handleDeleteProject}
          onAddTask={handleAddTask}
          onDeleteTask={handleDeleteTask}
        />
      );
    } else {
      content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
    }
  }

  function handleSetCurrentProject(id: number) {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: id,
    }));
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        onSetCurrentProject={handleSetCurrentProject}
        selectedProjectId={projectState.selectedProjectId as number}
      />

      {content}
    </main>
  );
}

export default App;
