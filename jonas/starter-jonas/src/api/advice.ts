import { api } from './index.ts';

export async function getAdviceList() {
  const response = await api.get('/advices');

  return await response.data;
}
