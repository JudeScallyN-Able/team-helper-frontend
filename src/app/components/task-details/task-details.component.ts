import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink, RouterOutlet} from "@angular/router";
import {Task} from "../../gql-types/task";
import {switchMap} from "rxjs";
import {TaskService} from "../../services/task.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-task-details',
  imports: [
    RouterOutlet, CommonModule, RouterLink
  ],
  templateUrl: './task-details.component.html',
  standalone: true,
  styleUrl: './task-details.component.css'
})
export class TaskDetailsComponent implements OnInit {
  constructor(private readonly taskService: TaskService) {
  }
  task: Task | undefined;
  isInErrorState: boolean = false;
  private readonly route = inject(ActivatedRoute);

  ngOnInit() {
    this.route.paramMap.pipe(
        switchMap(params => {
          let selectedId = params.get('id');
          return this.taskService.getSpecificTask(selectedId)
        })
    ).subscribe({
      // @ts-ignore
      next: specificTask => this.task = specificTask.data.task,
      error: () => this.isInErrorState = true
    })
  }
}
