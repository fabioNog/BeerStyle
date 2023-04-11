import { TaskType } from 'interfaces';

const BASE_URL = 'http://localhost:3001';

export const taskApi = {
  create: async (task: TaskType) => {
    const res = await fetch(`${BASE_URL}/beerstyle`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(task),
    });
    return res.json();
  },
  getAll: async (): Promise<TaskType[]> => {
    const res = await fetch(`${BASE_URL}/beerstyle`);
    return res.json();
  },
  update: async (task: TaskType) => {
    const res = await fetch(`${BASE_URL}/beerstyle/${task.mintemperature}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'PATCH',
      body: JSON.stringify(task),
    });
    return res.json();
  },
  delete: async (id: string) => {
    const res = await fetch(`${BASE_URL}/beerstyle/${id}`, {
      method: 'DELETE',
    });
    return res.json();
  },
};
