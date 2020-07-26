import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {RegisterComponent} from './components/auth/register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './components/auth/login/login.component';
import {NgxWebstorageModule} from 'ngx-webstorage';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {HomeComponent} from './components/home/home.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {PostTileComponent} from './components/shared/post-tile/post-tile.component';
import {VoteButtonComponent} from './components/shared/vote-button/vote-button.component';
import {SideBarComponent} from './components/shared/side-bar/side-bar.component';
import {GenreSideBarComponent} from './components/shared/genre-side-bar/genre-side-bar.component';
import {CreateGenreComponent} from './components/genre/create-genre/create-genre.component';
import {CreatePostComponent} from './components/post/create-post/create-post.component';
import {ListGenresComponent} from './components/genre/list-genres/list-genres.component';
import {EditorModule} from '@tinymce/tinymce-angular';
import {ViewPostComponent} from './components/post/view-post/view-post.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {UserProfileComponent} from './components/auth/user-profile/user-profile.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {JwPaginationComponent} from 'jw-angular-pagination';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSortModule} from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {DashboardComponent} from './components/admin/dashboard/dashboard.component';
import {UserListComponent} from './components/admin/user-list/user-list.component';
import {AuthTemplateComponent} from './components/auth-template/auth-template.component';
import {NotFoundComponent} from './error/not-found/not-found.component';
import {UnathorizedComponent} from './error/unathorized/unathorized.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    PostTileComponent,
    VoteButtonComponent,
    SideBarComponent,
    GenreSideBarComponent,
    CreateGenreComponent,
    CreatePostComponent,
    ListGenresComponent,
    ViewPostComponent,
    UserProfileComponent,
    JwPaginationComponent,
    DashboardComponent,
    UserListComponent,
    AuthTemplateComponent,
    NotFoundComponent,
    UnathorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,
    EditorModule,
    NgbModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressBarModule,
    MatIconModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
