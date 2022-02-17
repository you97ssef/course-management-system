import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth/auth-guard.service';
import { AllCoursesComponent } from './pages/courses/all-courses/all-courses.component';
import { DetailsComponent } from './pages/courses/details/details.component';
import { NewCourseComponent } from './pages/courses/new-course/new-course.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/users/login/login.component';
import { UpdateUserComponent } from './pages/users/update-user/update-user.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: AllCoursesComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'courses/new',
    component: NewCourseComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'course/:id',
    component: DetailsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'accounts/update',
    component: UpdateUserComponent,
    canActivate: [AuthGuardService],
  },
  { path: '**', redirectTo: '404' },
  { path: '404', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
