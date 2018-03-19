import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../Course.Service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private courseService:CourseService) { }

 // courseService:CourseService = new CourseService();
  courses: Array<Course> = [];

  ngOnInit() {
    this.courses = this.courseService.getCourses();
  }

}
