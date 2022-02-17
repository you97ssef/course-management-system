import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent implements OnInit {
  @Input('course') course: Course = {
    id: 1,
    category: 'category',
    name: 'name',
    description: 'description',
    subject: 'subject',
    start: new Date(),
    end: new Date(),
    students: 0,
  };

  constructor() {}

  ngOnInit(): void {}
}
