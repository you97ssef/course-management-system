import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course';
import { CoursesService } from 'src/app/services/courses.service';
import { Db } from '../../../data/db';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css'],
})
export class NewCourseComponent implements OnInit {
  course: Course = {
    id: Db.courses.length,
    name: '',
    description: '',
    category: '',
    subject: '',
    start: new Date(),
    end: new Date(),
    students: 0,
  };

  constructor(
    private coursesServices: CoursesService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  newCourse() {
    this.coursesServices.newCourse(this.course);
    this.router.navigate(['/']);
  }
}
