import { Injectable } from '@angular/core';
import { Course } from './courses/Course';

@Injectable({
  providedIn: 'root'
})
export class CoursedaoService {

  private courses:Course[]

  constructor() {
    this.courses = [];
    this.courses.push(new Course(1, "Java", "Ayush"))
    this.courses.push(new Course(2, "Python", "Abhishek"))
   }

   addCourse(course:Course):void{
    if (course!=null){
      this.courses.push(course)
    }
    else{
      console.log("Invalid Course.")
    }
   }

   getAllCourses():Course[]{
    return this.courses
   }
}
