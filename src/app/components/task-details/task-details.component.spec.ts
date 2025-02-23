import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDetailsComponent } from './task-details.component';
import Jasmine = jasmine.Jasmine;
import {TaskService} from "../../services/task.service";
import {ActivatedRoute} from "@angular/router";
import {of} from "rxjs";

describe('TaskDetailsComponent', () => {
  let component: TaskDetailsComponent;
  let fixture: ComponentFixture<TaskDetailsComponent>;
  let mockTaskService = jasmine.createSpyObj("TaskService", ["getSpecificTask"])
  let mockActivatedRoute = jasmine.createSpyObj("ActivatedRoute", ["paramMap"])

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskDetailsComponent],
      providers: [
          {
        provide: TaskService,
        useValue: mockTaskService
      },
        {
          provide: ActivatedRoute,
          useValue: mockActivatedRoute
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
