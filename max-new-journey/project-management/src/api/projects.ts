import { api } from './api.ts';
import { Project } from '../projects-context.tsx';

export async function getProjects(): Promise<Project[]> {
  const response = await api.get('/projects');

  return response.data.data;
}
