import { Component, OnInit } from '@angular/core';
import { CoursedaoService } from '../coursedao.service';
import { Course } from './Course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses:Course[]
  private courseDao: CoursedaoService;
  
  constructor(courseDao:CoursedaoService) {
    this.courseDao = courseDao;
    this.courses = []
   }

  ngOnInit(): void {
    this.courses = this.courseDao.getAllCourses();
  }

}
