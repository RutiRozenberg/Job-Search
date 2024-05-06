import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { JobComponent } from './components/job/job.component';
import { JobsListComponent } from './components/jobs-list/jobs-list.component';
import { MainComponent } from './components/main/main.component';
import { FilterJobsComponent } from './components/filter-jobs/filter-jobs.component';
import { ShowDetailsComponent } from './components/show-details/show-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    JobComponent,
    JobsListComponent,
    MainComponent,
    FilterJobsComponent,
    ShowDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
