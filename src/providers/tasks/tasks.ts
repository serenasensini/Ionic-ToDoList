import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../environment/environment";

/*
  Generated class for the TasksProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TasksProvider {

  constructor(public http: HttpClient) {
  }

  getTasks(){
    return this.http.get(environment.baseURL + '/tasks');
  }

  deleteTask(id){
    return this.http.delete(environment.baseURL + '/tasks/' + id);
  }

  newTask(task){
    return this.http.post(environment.baseURL + '/tasks', task);
  }

}
