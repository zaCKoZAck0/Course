import { Component, OnInit } from '@angular/core';
import { CoursedaoService } from '../coursedao.service';
import { Course } from '../courses/Course';

@Component({
  selector: 'app-courseform',
  templateUrl: './courseform.component.html',
  styleUrls: ['./courseform.component.css']
})
export class CourseformComponent implements OnInit {

  private courseDao:CoursedaoService

  constructor( courseDao:CoursedaoService) {
    this.courseDao = courseDao
   }

   formAddCourse(id:string, name:string, instructor:string){
    this.courseDao.addCourse(new Course(+id,name,instructor))
   }

  ngOnInit(): void {
  }

}
