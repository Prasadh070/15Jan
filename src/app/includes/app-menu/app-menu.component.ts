import { Component, OnInit } from '@angular/core';
import { Roles } from 'src/app/model/roles';

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css']
})
export class AppMenuComponent implements OnInit {

  role:string;
  menus:Array<any>;

  ngOnInit(): void {
    this.role=sessionStorage.getItem('role')

    this.menus=Roles.userroles;
  }
}
