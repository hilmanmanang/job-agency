import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatNativeDateModule } from '@angular/material/core';

import { AppComponent } from './app.component';
import { CreateComponent } from './admin/create/create.component';
import { EditComponent } from './admin/edit/edit.component';
import { ListComponent } from './admin/list/list.component';
import { ApplyComponent } from './user/apply/apply.component';
import { SearchComponent } from './user/search/search.component';

import { VacancyService } from './vacancy.service';
import { LoginComponent } from './login/login.component';

import { JobTitlePipe } from './pipe/job-title/job-title.pipe';
import { CompanyPipe } from './pipe/company/company.pipe';
import { StatePipe } from './pipe/state/state.pipe';
import { StatusPipe } from './pipe/status/status.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    EditComponent,
    ListComponent,
    ApplyComponent,
    SearchComponent,
    LoginComponent,
    JobTitlePipe,
    CompanyPipe,
    StatePipe,
    StatusPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatSelectModule,
    RouterModule,
    MatDialogModule,
    Ng2SearchPipeModule,
    FormsModule,
    MatSidenavModule,
    MatSortModule,
    MatNativeDateModule
  ],
  providers: [VacancyService, MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
