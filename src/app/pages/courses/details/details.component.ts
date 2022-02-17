import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/models/course';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  course;

  constructor(
    private service: CoursesService,
    private route: ActivatedRoute,
    router: Router
  ) {
    this.course = this.service.getCourse(
      parseInt(this.route.snapshot.paramMap.get('id')!)
    );
    if (this.course === undefined) {
      router.navigate(['404']);
    }
  }

  ngOnInit(): void {}
}
