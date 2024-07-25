import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  navData = [
    {routerLink:'student',title:'Student'},
    {routerLink:'employee',title:'Employee'},
    {routerLink:'dropdown',title:'Dropdown'},
    {routerLink:'inline',title:'Inline Editing'},
    {routerLink:'jira',title:'Jira'},
    {routerLink:'product',title:'Product'},
  ];

  constructor(private router: Router) {
  }

  Active(e:any)
  {
    debugger;
  }

}