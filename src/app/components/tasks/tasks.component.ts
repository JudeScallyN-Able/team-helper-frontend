import {Component, inject, OnInit} from '@angular/core';
import {TaskService} from "../../services/task.service";
import { Task } from '../../gql-types/task';
import {CommonModule} from "@angular/common";
import {Router, RouterOutlet} from "@angular/router";

@Component({
  selector: 'tasks-component',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './tasks.component.html',
  standalone: true,
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  isInErrorState: boolean = false;
  private readonly router = inject(Router);
  constructor(private readonly taskService: TaskService) {
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe({
      next: tasksResult => {
        // @ts-ignore
        this.tasks = tasksResult.data.tasks
      },
      error: () => this.isInErrorState = true
    })
  }

  redirectToTaskPage(taskId: string): void {
    this.router.navigate(['/task', taskId ])
  }
}
