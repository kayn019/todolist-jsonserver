export interface ITask {
  id: number,
  text: string
}

export interface IProject {
  project: Project[];
}

export interface Project {
  id: number,
  name: string
}