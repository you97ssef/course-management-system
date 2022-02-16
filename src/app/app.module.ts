import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/users/login/login.component';
import { UpdateUserComponent } from './pages/users/update-user/update-user.component';
import { NewCourseComponent } from './pages/courses/new-course/new-course.component';
import { AllCoursesComponent } from './pages/courses/all-courses/all-courses.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UpdateUserComponent,
    NewCourseComponent,
    AllCoursesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
