import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  task: string = ""
  tasks: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addTask(): void {
    if("" != this.task.trim()) {
      this.tasks.push(this.task);
      this.task = "";
    }
  }

  removeTask(index: number): void {
    this.tasks.splice(index, 1);
  }

}
