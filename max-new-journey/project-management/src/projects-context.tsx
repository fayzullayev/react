import { createContext, ReactNode, useContext, useReducer } from 'react';
import { getProjects } from './api/projects.ts';

export type Task = {
  id: number;
  title: string;
};

export interface Project {
  id: number;
  title: string;
  description: string;
  dueDate: string;
}

type ProjectsContextType = {
  state: State;
  onGetProjects: () => Promise<void>;
  onStartAddProject: () => void;
  onSetCurrentProject: (id: number) => void;
};

const ProjectsContext = createContext<ProjectsContextType | null>(null);

type ProjectsProviderProps = {
  children: ReactNode;
};

const initialState: State = {
  selectedProjectId: undefined,
  isLoading: true,
  error: undefined,
  projects: [],
};

export function ProjectsProvider({ children }: ProjectsProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function handleGetProjects() {
    dispatch({ type: ACTION_TYPE.START_FETCHING });
    try {
      const response = await getProjects();
      dispatch({ type: ACTION_TYPE.END_FETCHING, payload: response.data });
    } catch (error: any) {
      dispatch({ type: ACTION_TYPE.ON_ERROR, payload: error.message });
    }
  }

  function handleStartAddProject() {
    dispatch({ type: ACTION_TYPE.START_ADD_PROJECT });
  }

  function handleSetCurrentProject(id: number) {
    dispatch({ type: ACTION_TYPE.SET_CURRENT_PROJECT, payload: id });
  }

  return (
    <ProjectsContext.Provider
      value={{
        state,
        onGetProjects: handleGetProjects,
        onStartAddProject: handleStartAddProject,
        onSetCurrentProject: handleSetCurrentProject,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
}

export function useProjects() {
  const context = useContext(ProjectsContext);

  if (context === null) {
    throw new Error('Context must be used within a ProjectsProvider');
  }

  return context;
}

enum ACTION_TYPE {
  START_FETCHING,
  END_FETCHING,
  ON_ERROR,
  START_ADD_PROJECT,
  CANCEL_ADD_PROJECT,
  SET_CURRENT_PROJECT,
}

type END_FETCHING = {
  type: ACTION_TYPE.END_FETCHING;
  payload: Project[];
};

type START_FETCHING = {
  type: ACTION_TYPE.START_FETCHING;
};

type ON_ERROR = {
  type: ACTION_TYPE.ON_ERROR;
  payload: string;
};

type START_ADD_PROJECT = {
  type: ACTION_TYPE.START_ADD_PROJECT;
};

type CANCEL_ADD_PROJECT = {
  type: ACTION_TYPE.CANCEL_ADD_PROJECT;
};

type SET_CURRENT_PROJECT = {
  type: ACTION_TYPE.SET_CURRENT_PROJECT;
  payload: number;
};

type Action =
  | END_FETCHING
  | START_FETCHING
  | ON_ERROR
  | START_ADD_PROJECT
  | CANCEL_ADD_PROJECT
  | SET_CURRENT_PROJECT;

type State = {
  projects: Project[];
  isLoading: boolean;
  error: string | undefined;
  selectedProjectId: undefined | null | number;
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ACTION_TYPE.START_FETCHING:
      return {
        ...state,
        projects: [],
        isLoading: true,
        error: undefined,
      };

    case ACTION_TYPE.END_FETCHING:
      return {
        ...state,
        projects: action.payload,
        isLoading: false,
        error: undefined,
      };

    case ACTION_TYPE.ON_ERROR:
      return {
        ...state,
        projects: [],
        isLoading: false,
        error: action.payload,
      };

    case ACTION_TYPE.START_ADD_PROJECT:
      return {
        ...state,
        selectedProjectId: null,
      };

    case ACTION_TYPE.CANCEL_ADD_PROJECT:
      return {
        ...state,
        selectedProjectId: undefined,
      };

    case ACTION_TYPE.SET_CURRENT_PROJECT:
      return {
        ...state,
        selectedProjectId: action.payload,
      };

    default:
      return state;
  }
}
