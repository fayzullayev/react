import { api } from './api.ts';

export async function getTasks(id: string | undefined): Promise<any> {
  const response = await api.get('/tasks/' + id);

  return response.data;
}
