import { Component, OnInit } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {

  constructor() { }

  public courseList = [new Course("ts", 200, "available", true), new Course("typescript", 201, "unavailable", false),
  new Course("javascript", 202, "available", true)]

  fun = {name:"cat",city:"fan",address:{alley:"louis",pin:123, active:true}}
}
