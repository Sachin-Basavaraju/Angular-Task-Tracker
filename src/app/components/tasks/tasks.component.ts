import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  OnDeleteClick(task: Task): void {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((item) => item.id !== task.id))
      );
  }

  OnToggle(task: Task): void {
    task.reminder = !task.reminder;
    console.log(task.reminder);
    this.taskService.toggleReminder(task).subscribe();
  }

  OnSubmitNewTask(newTask): void {
    console.log(newTask);
    this.taskService
      .addTask(newTask)
      .subscribe((item) => this.tasks.push(item));
  }
}
