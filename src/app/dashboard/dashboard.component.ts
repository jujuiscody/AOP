import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../Course.Service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //courseservice:CourseService = new CourseService();

  Courses: Array<Course> = [];

  constructor(private courseService:CourseService) { }

  ngOnInit() {
    this.Courses = this.courseService.getCourses();
  }

}
