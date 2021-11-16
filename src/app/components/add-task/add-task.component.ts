import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiserviceService } from 'src/app/services/uiservice.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddingNewTasks: EventEmitter<Task> = new EventEmitter();

  text: string;
  day: string;
  reminder: boolean = false;

  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiserviceService) {
    this.subscription = this.uiService
      .toggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (!this.text) {
      alert('Please add the task');
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddingNewTasks.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
