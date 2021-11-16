import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiserviceService } from 'src/app/services/uiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiserviceService, private router: Router) {
    this.subscription = this.uiService
      .toggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}

  onButton() {
    console.log('on add button clicked !');
    this.uiService.ToggleAddTask();
  }

  routerCheck(route: string) {
    return this.router.url === route;
  }
}
