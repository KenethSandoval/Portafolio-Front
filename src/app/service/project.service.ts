import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

const base_url = environment.base_url;

interface IProject {
  _id: string;
  title: string;
  description: string;
  urlGithub: string;
  tags: Array<string>;
  urlDemo?: string;
  image?: string;
}

interface IProjectResponse {
  messageStatus: string;
  data: Array<IProject>;
  status: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private _http: HttpClient) {}

  public loadProjects() {
    const url = `${base_url}/project`;
    return this._http.get<IProjectResponse[]>(url);
  }
}
