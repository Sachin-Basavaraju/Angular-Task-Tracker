import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}
  apiUrl = 'http://localhost:5000/tasks';

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const IDUrlToDeleted = `http://localhost:5000/tasks/${task.id}`;
    return this.http.delete<Task>(IDUrlToDeleted);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }

  toggleReminder(task: Task): Observable<Task> {
    const IDUrlToUpdate = `http://localhost:5000/tasks/${task.id}`;
    return this.http.put<Task>(IDUrlToUpdate, task, httpOptions);
  }
}
