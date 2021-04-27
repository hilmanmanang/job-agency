import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './admin/list/list.component';
import { CreateComponent } from './admin/create/create.component';
import { EditComponent } from './admin/edit/edit.component';
import { ApplyComponent } from './user/apply/apply.component';
import { SearchComponent } from './user/search/search.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'apply/:id',
    component: ApplyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
