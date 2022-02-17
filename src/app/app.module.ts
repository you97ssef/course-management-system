import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/users/login/login.component';
import { UpdateUserComponent } from './pages/users/update-user/update-user.component';
import { NewCourseComponent } from './pages/courses/new-course/new-course.component';
import { AllCoursesComponent } from './pages/courses/all-courses/all-courses.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './pages/courses/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UpdateUserComponent,
    NewCourseComponent,
    AllCoursesComponent,
    NavbarComponent,
    CourseCardComponent,
    NotFoundComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
