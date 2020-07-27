import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './components/auth/register/register.component';
import {LoginComponent} from './components/auth/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {CreatePostComponent} from './components/post/create-post/create-post.component';
import {CreateGenreComponent} from './components/genre/create-genre/create-genre.component';
import {ListGenresComponent} from './components/genre/list-genres/list-genres.component';
import {ViewPostComponent} from './components/post/view-post/view-post.component';
import {UserProfileComponent} from './components/user-profile/user-profile.component';
import {AuthGuard} from './components/auth/auth.guard';
import {Role} from './model/role';
import {DashboardComponent} from './components/admin/dashboard/dashboard.component';
import {UserListComponent} from './components/admin/user-list/user-list.component';
import {NotFoundComponent} from './error/not-found/not-found.component';
import {UnathorizedComponent} from './error/unathorized/unathorized.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'view-post/:id', component: ViewPostComponent },
  { path: 'user-profile/:name', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'list-genres', component: ListGenresComponent },
  { path: 'create-post', component: CreatePostComponent, canActivate: [AuthGuard] },
  { path: 'create-genre', component: CreateGenreComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

  {path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.ADMIN]}
  },
  {path: 'user-list',
    component: UserListComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.ADMIN]}
  },

  {path: '404', component: NotFoundComponent},
  {path: '401', component: UnathorizedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
      this.router.navigate(['/404']);
    }
  }
}
