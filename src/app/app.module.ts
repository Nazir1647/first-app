import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { StudentComponent } from './student/student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeeComponent } from './employee/employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { DropdownComponent } from './dropdown/dropdown.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { InlineEditingComponent } from './inline-editing/inline-editing.component';
import { JiraBoardComponent } from './jira-board/jira-board.component';
import { Inline2Component } from './inline2/inline2.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { LoginComponent } from './login/login.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    NgTemplateComponent,
    StudentComponent,
    NavbarComponent,
    EmployeeComponent,
    PageNotFoundComponent,
    DropdownComponent,
    InlineEditingComponent,
    JiraBoardComponent,
    Inline2Component,
    LeftnavComponent,
    LoginComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    NgMultiSelectDropDownModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
