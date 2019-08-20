import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  //templateUrl: './success-alert.component.html',
  template: '<p>Success in Component</p>',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
