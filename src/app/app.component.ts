import { Component } from '@angular/core';
import { Course } from './course';
import { LOCALE_DATA } from '@angular/common/src/i18n/locale_data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  van = { value: true };
  date = Date.parse("5");
  // course = [{name:"social", id:1},{name:"science", id:2},{name:"maths", id:3},{name:"telugu"}];

  course = [new Course("social", 100, "unavailable", false), new Course("science", 100, "available", true),
  new Course("maths", 100, "available", true)]


}
