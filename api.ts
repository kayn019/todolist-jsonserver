import { ITask } from './types/task';
import { IProject } from './types/task';

const baseUrl = 'http://localhost:3002';
let project = 'home';

export const setCurProject = async (projectName) =>{
  project = projectName;
  console.log(project);

}

export const getCurProject = () => {
  return project;
}


export const getAllTodos = async (pro): Promise<ITask[]> => {
  const res = await fetch(`${baseUrl}/${pro}`, { cache: 'no-store' });
  const todos = await res.json();
  return todos;
};

export const addTodo = async (todo: ITask): Promise<ITask> => {
  const res = await fetch(`${baseUrl}/${project}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });

  const newTodo = await res.json();
  return newTodo;
};

export const addProject = async (proj: IProject): Promise<IProject> => {
  const res = await fetch(`${baseUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(proj),
  });

  const newProject = await res.json();
  return newProject;
};

export const editTodo = async (todo: ITask): Promise<ITask> => {
  const res = await fetch(`${baseUrl}/${project}/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });

  const updatedTodo = await res.json();
  return updatedTodo;
};

export const deleteTodo = async (id: number): Promise<void> => {
  await fetch(`${baseUrl}/${project}/${id}`, {
    method: 'DELETE',
  });
};
