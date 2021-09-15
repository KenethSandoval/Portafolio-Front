export interface IProject {
  _id: string;
  title: string;
  description: string;
  urlGithub: string;
  tags: Array<string>;
  urlDemo?: string;
  image?: string;
}

export interface IProjectResponse {
  messageStatus: string;
  data: Array<IProject>;
  status: number;
}
