import { gql, Query } from 'apollo-angular';
import { Injectable } from '@angular/core';

export interface Task {
    id: string;
    title: string;
    description: string;
    status: TASK_STATUS
}

export enum TASK_STATUS {
    TODO = "To do",
    IN_PROGRESS = "In Progress",
    DONE = "Done"
}

@Injectable({
    providedIn: 'root',
})
export class AllTasksGQL extends Query<Task[]> {
    document = gql`{
        tasks {
            id
            title
            description
            status
        }
    }`
}

@Injectable({
    providedIn: 'root',
})
export class SpecificTaskGql extends Query<Task> {
    document = gql`
        query GetTask($id: ID!) {
            task(id: $id) {
                id
                title
                description
                status
            }
        }
    `
}