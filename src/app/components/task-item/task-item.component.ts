import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  faTimesIcon = faTimes;
  @Output() OnDelete: EventEmitter<Task> = new EventEmitter();
  @Output() Toggle: EventEmitter<Task> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  OnDeleteIconClicked(task: Task): void {
    this.OnDelete.emit(task);
    // console.log(task.id);
  }

  OnDoubleClick(task: Task): void {
    this.Toggle.emit(task);
  }
}
