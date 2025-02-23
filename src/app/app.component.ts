import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TasksComponent} from "./components/tasks/tasks.component";
import {TaskDetailsComponent} from "./components/task-details/task-details.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'team-helper-frontend';
}
