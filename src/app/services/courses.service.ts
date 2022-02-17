import { Injectable } from '@angular/core';
import { Db } from '../data/db';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor() {
    if (localStorage.getItem('courses') === null) {
      localStorage.setItem('courses', JSON.stringify(Db.courses));
    }
  }

  newCourse(course: Course) {
    let courses: Array<Course> = JSON.parse(localStorage.getItem('courses')!);

    courses.push(course);

    localStorage.setItem('courses', JSON.stringify(courses));
  }

  searchForCoursesByTime(date: Date) {
    let courses: Array<Course> = JSON.parse(localStorage.getItem('courses')!);

    return courses.filter((c) => c.start <= date && c.end >= date);
  }

  searchForCoursesByName(name: string) {
    let courses: Array<Course> = JSON.parse(localStorage.getItem('courses')!);

    return courses.filter((c) => c.name.includes(name));
  }

  getAllCourses() {
    let courses: Array<Course> = JSON.parse(localStorage.getItem('courses')!);

    return courses;
  }

  getCourse(courseId: number) {
    let courses: Array<Course> = JSON.parse(localStorage.getItem('courses')!);

    return courses.find(({ id }) => id === courseId);
  }
}
