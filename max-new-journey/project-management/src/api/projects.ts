import { api } from './api.ts';
import { Project } from '../projects-context.tsx';

type ProjectForCreateType = {
  title: string;
  description: string;
  dueDate: string;
};

export async function getProjects(): Promise<any> {
  const response = await api.get('/projects');

  return response.data;
}

export async function getProject(id: string | undefined): Promise<any> {
  const response = await api.get('/projects/' + id);

  return response.data;
}

export async function createProject(
  project: ProjectForCreateType,
): Promise<any> {
  const response = await api.post('/projects', project);
  return response.data;
}
