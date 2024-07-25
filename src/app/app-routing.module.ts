import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { EmployeeComponent } from './employee/employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { InlineEditingComponent } from './inline-editing/inline-editing.component';
import { JiraBoardComponent } from './jira-board/jira-board.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'student', component: StudentComponent,canActivate:[AuthGuard] },
  { path: 'employee', component: EmployeeComponent },
  { path: 'dropdown', component: DropdownComponent },
  {path:'inline',component:InlineEditingComponent},
  {path:'jira',component:JiraBoardComponent},
  {path:'product',component:ProductComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  { path: '',   redirectTo: '/student', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
