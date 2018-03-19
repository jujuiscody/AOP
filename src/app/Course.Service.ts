import { Course } from "./course";

export class CourseService {

    Courses: Array<Course> = [new Course("java", 201, "available", true),
    new Course("java", 202, "available", true),new Course("java", 203, "available", true)];

        getCourses(){
            return this.Courses;
        }
}