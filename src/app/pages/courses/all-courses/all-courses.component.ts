import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css'],
})
export class AllCoursesComponent implements OnInit {
  courseName = '';
  courseDate = new Date();
  courses: Array<Course>;

  constructor(private coursesService: CoursesService) {
    this.courses = coursesService.getAllCourses();
  }

  ngOnInit(): void {}

  searchByName() {
    this.courses = this.coursesService.searchForCoursesByName(this.courseName);
  }

  searchByDate() {
    this.courses = this.coursesService.searchForCoursesByTime(this.courseDate);
  }
}
