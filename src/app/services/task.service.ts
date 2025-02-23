import { Injectable } from '@angular/core';
import {ApolloQueryResult, gql} from "@apollo/client";
import {AllTasksGQL, SpecificTaskGql, Task} from "../gql-types/task";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private readonly allTasks: AllTasksGQL, private readonly specificTask: SpecificTaskGql) { }

  getTasks(): Observable<ApolloQueryResult<Task[]>> {
    return this.allTasks.fetch()
  }

  getSpecificTask(id: string | null): Observable<ApolloQueryResult<Task>> {
      id = id ? id : "100000";
      return this.specificTask.fetch({id: id})
  }
}
