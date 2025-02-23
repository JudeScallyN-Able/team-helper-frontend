import { Routes } from '@angular/router';
import {TaskDetailsComponent} from "./components/task-details/task-details.component";
import {TasksComponent} from "./components/tasks/tasks.component";

export const routes: Routes = [
    { path: 'task/:id', component: TaskDetailsComponent },
    { path: '**', component: TasksComponent }
];
