import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tasks: Task[] = [new Task('Visit Ann'), new Task('Call dad'), new Task('go to the gym'), new Task('Pay bills')];

  addTask(newTask: string): void {
    this.tasks.push(new Task(newTask));
  }

  removeTask(selectedTask: Task): void {
    let userConfirmed = confirm(`Are you sure you want to remove the task "${ selectedTask.title }" from the list?`);
    let taskIndex: number = this.tasks.indexOf(selectedTask);
    if (userConfirmed && taskIndex  > -1) {
      this.tasks.splice(taskIndex, 1);
    }
  }
}

class Task {
  title: string;
  isDone = false;

  constructor(title: string) {
    this.title = title;
  }

  toggleIsDone(): void {
    this.isDone = !this.isDone;
  }
}
